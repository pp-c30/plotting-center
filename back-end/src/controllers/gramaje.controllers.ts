//Importamos la funcion "conexion" desde el archivo database
import { conexion } from '../database';

//Importamos las interfaz "Request" y "Repose" desde "express
import { Request, Response } from "express";

//Importamos la interfaz "igramaje" desde el archivo "gramaje"
import { igramaje } from '../models/gramaje';

//Clase que nos permite alamacenar metodos
 export class Gramajecontrollers{

    //Metodo que nos permite listar consola
    public async listargramaje(req: Request , res: Response){

      //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
        const db = await conexion();

       //Realizamos la consulta para mostrar los datos de la tabla gramaje
        let gramaje = await db.query('select * from gramaje');

        //Retorna una respuesta en formato json de gramaje
        return res.json(gramaje);




    }
       //Metodo que guarda datos en la clase
    public async guardargramaje (req:Request , res:Response){

         //Conexion con la base de datos
        const db = await conexion();

        //Guardamos los datos ingresados en el body en una variable
        let gramaje:igramaje= req.body;


        //Inserta los datos en la base de datos
        await db.query('insert into gramaje set ?',[gramaje]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('el gramaje fue guardado corecctamente');

    }
    
    //Metodo que nos permite eliminar datos 
    public async eliminargramaje (req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibe el codigo
        let codigo = req.params.codigo;

        //Realiza la eliminacion del gramaje
        await db.query('delete from consola where id_gramaje = ?',[codigo]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('el gramaje fue eliminado corecctamente');


    }
    //Metodo que nos permite actualizar datos
    public async actualizargramaje (req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibe el codigo
        let codigo = req.params.codigo;

         //Nuevo datos del gramaje
        let gramaje_actualizado = req.body;

        //Realiza la actualizacion
        await db.query('uptade consola set ? where id_gramaje = ?',[gramaje_actualizado,codigo]);

        //Retorno un mensaje despues de realizarse todo correctamente
        return res.json ('se actualizo correctamente');

    }
     //Motodo que lista una consola en especifico
    public async obtenerUngramaje (req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibimos el codigo de la consola
        let codigo = req.params.codigo;

        //Realiza la seleccion de una consola y la guarda en una variable
        let ungramaje = await db.query('select * from gramaje where id_gramaje = ?',[codigo]);
        
        //Retorna la consola selecciona
        return res.json(ungramaje[0]);
    }


}