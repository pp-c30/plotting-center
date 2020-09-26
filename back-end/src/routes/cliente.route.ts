import { Router } from "express";
import { ClienteController } from "../controllers/cliente.controllers";

//creamos la instacia de clientecontroller para terner acceso a todos los metodos de la misma
let clienteController = new ClienteController();

//creamos la constante enrutador para que 
const enrutadorCliente = Router();

//creamos la ruta con metodo un get, es decir, obtener datos 
enrutadorCliente.route('/cliente').get(ClienteController,listacliente);
//creamos la ruta con metodo un post para guardar datos en la BD
enrutadorCliente.route('/cliente').post();