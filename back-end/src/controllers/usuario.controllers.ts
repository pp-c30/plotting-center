//Importamos la funcion "conexion" desde el archivo database
import { conexion } from '../database';

//Importamos las interfaz "Request" y "Repose" desde "express
import { Request, Response } from "express";

//Importamos la interfaz "iusuario" desde el archivo "usuario"
import { iusuario } from '../models/usuario';

//Clase que nos permite alamacenar metodos
 export class Usuariocontrollers{

     //Metodo que nos permite listar consola
     public async listarusuario(req: Request , res: Response){

        //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
          const db = await conexion();
  
         //Realizamos la consulta para mostrar los datos de la tabla usuario
          let usuario = await db.query('select * from usuario');
  
          //Retorna una respuesta en formato json del usuario
          return res.json(usuario);
  
      }
          //Metodo que guarda datos en la clase
    public async guardarusuario (req:Request , res:Response){

        //Conexion con la base de datos
       const db = await conexion();

       //Guardamos los datos ingresados en el body en una variable
       let usuario:iusuario= req.body;


       //Inserta los datos en la base de datos
       await db.query('insert into usuario set ?',[usuario]);

       //Retorna un mensaje despues de realizarse todo de forma correcta
       return res.json('El usuario fue guardado correctamente');

   }
   
   //Metodo que nos permite eliminar datos 
   public async eliminarusuario (req:Request , res:Response){

       //Conexion con la base de datos
       const db = await conexion();

       //Recibe el codigo
       let codigo = req.params.codigo;

       //Realiza la eliminacion del usuario
       await db.query('delete from usuario where id_usuario = ?',[codigo]);

       //Retorna un mensaje despues de realizarse todo de forma correcta
       return res.json('El usuario fue eliminado correctamente');


   }
   //Metodo que nos permite actualizar datos
   public async actualizarusuario (req:Request , res:Response){

       //Conexion con la base de datos
       const db = await conexion();

       //Recibe el codigo
       let codigo = req.params.codigo;

        //Nuevo datos del usuario
       let usuario_actualizada = req.body;

       //Realiza la actualizacion
       await db.query('update usuario set ? where id_usuario = ?',[usuario_actualizada,codigo]);

       //Retorno un mensaje despues de realizarse todo correctamente
       return res.json ('Se actualizo correctamente el usuario');

   }
    //Motodo que lista una impresion en especifico
   public async obtenerUnusuario (req:Request , res:Response){

       //Conexion con la base de datos
       const db = await conexion();

       //Recibimos el codigo de la consola
       let codigo = req.params.codigo;

       //Realiza la seleccion de una consola y la guarda en una variable
       let unusuario = await db.query('select * from usuario where id_usuario = ?',[codigo]);
       
       //Retorna la consola selecciona
       return res.json(unusuario[0]);
   }


}