//aca no se por que me toma como que la importacion no esta en uso
//traemos desde "database" la funcion conexion
import { conexion } from "../database";

//para que los metedos puedan entregar una rta(res-req) traemos express 
import { Request, Response } from "express"; 

//exportamos la clase porque la vamos a utilizar desde cliente.route
export class ClienteController
{
    //alojamos metodos, en este caso publicos para que puedam ser accedidos desde otros archivos
    public listaCliente(req:Request, res:Response)
    {
        //el metedo va a retornar una rta de tipo json  
        return res.json("aca se listaron los pagos");
    }
}