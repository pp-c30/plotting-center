//Importamos la funcion "conexion" desde el archivo database
import { conexion } from '../database';

//Importamos las interfaz "Request" y "Repose" desde "express
import { Request, Response } from "express";

//Importamos la interfaz "irollo" desde el archivo "rollo.ts"
import { irollo } from '../models/rollo';

//Clase que donde guardamos los metodos
 export class RolloController{

    //Metodo que nos permite listar consola
    public async listarRollo(req: Request , res: Response){

      //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
        const db = await conexion();

       //Realizamos la consulta para mostrar los datos de la tabla rollo
        let rollo = await db.query('select * from rollo');

        //Retorna una respuesta en formato json de rollo
        return res.json(rollo);




    }
       //Metodo que guarda datos en la clase
    public async guardarRollo (req:Request , res:Response){

         //Conexion con la base de datos
        const db = await conexion();

        //Guardamos los datos ingresados en el body en una variable
        let rollo:irollo= req.body;


        //Inserta los datos en la base de datos
        await db.query('insert into rollo set ?',[rollo]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('rollo guardado correctamente');

    }
    
    //Metodo que nos permite eliminar datos 
    public async eliminarRollo (req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibe el codigo
        let codigo = req.params.codigo;

        //Realiza la eliminacion de la rollo
        await db.query('delete from rollo where id_rollo = ?',[codigo]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('el rollo fue eliminado correctamente');


    }
    //Metodo que nos permite actualizar datos
    public async actualizarRollo(req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibe el codigo
        let codigo = req.params.codigo;

         //Nuevo datos de rollo
        let rollo_actualizado = req.body;

        //Realiza la actualizacion
        await db.query('update rollo set ? where id_prollo = ?',[rollo_actualizado ,codigo]);

        //Retorno un mensaje despues de realizarse todo correctamente
        return res.json ('se actualizo correctamente');

    }
     //Motodo que lista un rollo en especifico
    public async obtenerRollo (req:Request , res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Recibimos el codigo de la consola
        let codigo = req.params.codigo;

        //Realiza la seleccion de una consola y la guarda en una variable
        let unrollo = await db.query('select * from rollo where id_rollo = ?',[codigo]);
        
        //Retorna la consola selecciona
        return res.json(unrollo[0]);
    }


}