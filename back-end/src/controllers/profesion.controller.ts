//Importamos la funcion "conexion" desde el archivo database
import { conexion } from '../database';

//Importamos las interfaz "Request" y "Repose" desde "express
import { Request, Response } from "express";

//Importamos la interfaz "iprofesion" desde el archivo "profesion.ts"
import { iprofesion } from '../models/profesion';

//Clase que donde guardamos los metodos
 export class ProfesionController{

    //Metodo que nos permite listar consola
    public async listarProfesion(req: Request , res: Response){

      //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
        const db = await conexion();

       //Realizamos la consulta para mostrar los datos de la tabla gramaje
        let profesion = await db.query('select * from profesion');

        //Retorna una respuesta en formato json de gramaje
        return res.json(profesion);




    }
       //Metodo que guarda datos en la clase
    public async guardarProfesion (req:Request , res:Response){

         //Conexion con la base de datos
        const db = await conexion();

        //Guardamos los datos ingresados en el body en una variable
        let profesion:iprofesion= req.body;


        //Inserta los datos en la base de datos
        await db.query('insert into profesion set ?',[profesion]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('profesion guardada correctamente');

    }
    
    //Metodo que nos permite eliminar datos 
    public async eliminarProfesion (req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibe el codigo
        let codigo = req.params.codigo;

        //Realiza la eliminacion de la profesion
        await db.query('delete from profesion where id_profesion = ?',[codigo]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('la profesion fue eliminado correctamente');


    }
    //Metodo que nos permite actualizar datos
    public async actualizarProfesion (req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibe el codigo
        let codigo = req.params.codigo;

         //Nuevo datos de profesion
        let profesion_actualizada = req.body;

        //Realiza la actualizacion
        await db.query('update profesion set ? where id_profesion = ?',[profesion_actualizada,codigo]);

        //Retorno un mensaje despues de realizarse todo correctamente
        return res.json ('se actualizo correctamente');

    }
     //Motodo que lista una gramaje en especifico
    public async obtenerProfesion (req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibimos el codigo de la consola
        let codigo = req.params.codigo;

        //Realiza la seleccion de una consola y la guarda en una variable
        let unaprofesion = await db.query('select * from profesion where id_profesion = ?',[codigo]);
        
        //Retorna la consola selecciona
        return res.json(unaprofesion[0]);
    }


}