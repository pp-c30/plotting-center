"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controllers_1 = require("../controllers/cliente.controllers");
//creamos la instacia de clientecontroller para terner acceso a todos los metodos de la misma
let clienteController = new cliente_controllers_1.ClienteController();
//creamos la constante enrutador para que 
const enrutadorCliente = express_1.Router();
//creamos la ruta con metodo un get, es decir, obtener datos 
enrutadorCliente.route('/cliente').get(clienteController.listaCliente);
//creamos la ruta con metodo un post para guardar datos en la BD
enrutadorCliente.route('/cliente').post();
