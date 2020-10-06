//Importamos la funcion "conexion" desde el archivo database
import { conexion } from '../database';

//Importamos las interfaz "Request" y "Repose" desde "express
import { Request, Response } from "express";

//Importamos la interfaz "iimpresion" desde el archivo "impresion"
import { iimpresion } from '../models/impresion';

//Clase que nos permite alamacenar metodos
 export class Impresioncontrollers{

     //Metodo que nos permite listar consola
     public async listarimpresion(req: Request , res: Response){

        //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
          const db = await conexion();
  
         //Realizamos la consulta para mostrar los datos de la tabla impresion
          let impresion = await db.query('select * from impresion');
  
          //Retorna una respuesta en formato json de la impresion
          return res.json(impresion);
  
      }
          //Metodo que guarda datos en la clase
    public async guardarimpresion (req:Request , res:Response){

        //Conexion con la base de datos
       const db = await conexion();

       //Guardamos los datos ingresados en el body en una variable
       let impresion:iimpresion= req.body;


       //Inserta los datos en la base de datos
       await db.query('insert into gramaje set ?',[impresion]);

       //Retorna un mensaje despues de realizarse todo de forma correcta
       return res.json('La impresion fue guardada corecctamente');

   }
   
   //Metodo que nos permite eliminar datos 
   public async eliminarimpresion (req:Request , res:Response){

       //Conexion con la base de datos
       const db = await conexion();

       //Recibe el codigo
       let codigo = req.params.codigo;

       //Realiza la eliminacion de la impresion
       await db.query('delete from impresion where id_impresion = ?',[codigo]);

       //Retorna un mensaje despues de realizarse todo de forma correcta
       return res.json('La impresion fue eliminada corecctamente');


   }
   //Metodo que nos permite actualizar datos
   public async actualizarimpresion (req:Request , res:Response){

       //Conexion con la base de datos
       const db = await conexion();

       //Recibe el codigo
       let codigo = req.params.codigo;

        //Nuevo datos de la impresion
       let impresion_actualizada = req.body;

       //Realiza la actualizacion
       await db.query('update impresion set ? where id_impresion = ?',[impresion_actualizada,codigo]);

       //Retorno un mensaje despues de realizarse todo correctamente
       return res.json ('Se actualizo correctamente la impresion');

   }
    //Motodo que lista una impresion en especifico
   public async obtenerUnaimpresion (req:Request , res:Response){

       //Conexion con la base de datos
       const db = await conexion();

       //Recibimos el codigo de la consola
       let codigo = req.params.codigo;

       //Realiza la seleccion de una consola y la guarda en una variable
       let unaimpresion = await db.query('select * from impresion where id_impresion = ?',[codigo]);
       
       //Retorna la consola selecciona
       return res.json(unaimpresion[0]);
   }


}