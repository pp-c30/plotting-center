//importamos el archivo "router" proveniente de "express" para poder crear las rutas
import { Router } from "express";


//importo desde controllers el archivo "cliente.controllers" para accerder a la clase de la misma
import { Clientecontroller } from '../controllers/cliente.controllers';

//creo una instancia la cual permite el acceso a todos los metodos de la clase "cliente.controllers"
let  clienteController = new Clientecontroller();

//creamos  el enrutador de cliente que va a alojar todas las funncionalidades de "router"
const enrutadorCliente = Router();

//creo la ruta "/cliente" con una petecion "get" que permitira listar a los clientes  
enrutadorCliente.route('/cliente').get();
 
//se crea la ruta con una peticion "post" que permitira guardar los datos de los clientes en la BD
enrutadorCliente.route('/cliente').post();