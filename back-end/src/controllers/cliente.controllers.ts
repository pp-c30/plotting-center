//importo la funcion conexcion desde el archivo database
import { conexion } from '../database';

//para que los metodos puedan entregar una rta hay que exportar desde express los tipos req y res
import { Request, Response } from "express";

//se crea (y exporta) la clase "Clientecontroller" para alojar metodos publicos porque son accedidos desde otros archivos
export class Clientecontroller 
{
    //creo el metodo "listaCliente" que va a tener un prametro de tipo res y otro de tipo req
    public listaCliente(req:Request, res:Response)
    {
        //hacemos que el metodo listaCliente retorne una rta de tipo json 
         return res.json('')
    }
}