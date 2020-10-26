//importo la funcion conexcion desde el archivo database
import { conexion } from '../database';

//para que los metodos puedan entregar una rta hay que exportar desde express los tipos req y res
import { Request, Response } from "express";

//importamos la interface icliente desde cliente.ts para asi poder darle uso 
import { icliente } from "../models/cliente"; 

//se crea (y exporta) la clase "Clientecontroller" para alojar metodos publicos porque son accedidos desde otros archivos
export class Clientecontroller 
{
    //creo el metodo "listaCliente" para listar los clientes 
    public async listaCliente(req:Request, res:Response) {

         //guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
         const db = await conexion();

         //se crea la varible cliente para realizar una consulta y mostrar los datos que contiene la tabla cliente
         let cliente = await db.query('select * from cliente')

        //hacemos que el metodo cliente retorne una rta de tipo json, es decir todos los datos de los clientes
         return res.json(cliente)
    }
    //creo el metodo "guardarCliente" para guardar datos en la clase listacliente
    public async guardarCliente(req:Request, res:Response){

        //guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
        const db = await conexion();

        //creamos la variable cliente y guardamos los datos que ingresamos en el body 
        let cliente:icliente = req.body;

        //se crea la varible cliente para poder insertar datos en la BD, mas especificamente en la tabla cliente 
        await db.query('insert into cliente set ?',[cliente]);

        //retorna una respuesta de tipo json con el mensaje
        return res.json('el cliente fue guardado exitosamente'); 
    }
    
    public async eliminarCliente(req:Request, res:Response){
        
        const db = await conexion();

        //recibimos un parametro denominado id en una variable de tipo let 
        let id = req.params.id;

        //ejecutamos una query la cual va a eliminar a un cliente a travez de la variable id
        await db.query('delete from cliente where id_cliente = ?',[id]);

        return res.json('el cliente fue eliminado exitosamente');

    }
    public async actulizarCliente(req:Request, res:Response){

        const db = await conexion();

        //recibimos un parametro denominado id en una variable de tipo let 
        let id = req.params.id;

        //recibimos nuevos datos para poder actulizarlos 
        let nuevos_datos_cliente = req.body;

        //ejecutamos una query la cual va a actualizar los datos de un cliente mediante la variable de tipo let que creamos anteriormente para con los datos que contiene id 
        await db.query('update cliente set ? where id_cliente = ?',[nuevos_datos_cliente,id]);

        return res.json('el cliente fue actualizado exitosamente');
    }

    public async obtenerUnCliente(req:Request, res:Response){

        const db = await conexion();

        let id = req.params.id; 

        //hacemos una consulta para que mediante la varible id me muestre un cliente determinado
        let unCliente = await db.query('select * from cliente where id_cliente = ?',[id])

        //hacemos que el metodo Uncliente retorne una rta de tipo json, pero esta vez de un objeto en particular 
        return res.json(unCliente[0]);

    }

}