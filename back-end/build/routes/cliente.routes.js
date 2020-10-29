"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos el archivo "router" proveniente de "express" para poder crear las rutas
const express_1 = require("express");
//importo desde controllers el archivo "cliente.controllers" para accerder a la clase de la misma
const cliente_controllers_1 = require("../controllers/cliente.controllers");
//creo una instancia la cual permite el acceso a todos los metodos de la clase "cliente.controllers"
let clienteController = new cliente_controllers_1.Clientecontroller();
//creamos  el enrutador de cliente que va a alojar todas las funncionalidades de "router"
const enrutadorCliente = express_1.Router();
//creo la ruta "/cliente" con una petecion "get" que permitira listar a los clientes  
enrutadorCliente.route('/cliente').get(clienteController.listaCliente);
//se crea la ruta con una peticion "post" que permitira guardar los datos de los clientes en la BD
enrutadorCliente.route('/cliente').post(clienteController.guardarCliente);
//se crea la ruta con una peticion "delete" que permitira eliminar los datos de algun cliente que sea seleccionado
enrutadorCliente.route('/cliente/:id').delete(clienteController.eliminarCliente);
//ruta con una peticion "put" que permitira actulizar los datos de los cliente
enrutadorCliente.route('/cliente/:id').put(clienteController.actulizarCliente);
//ruta con una peticion "get" que permitira buscar un cliente en particular, no como le primer metodo get que me trae todos los clientes
enrutadorCliente.route('/cliente/:id').get(clienteController.obtenerUnCliente);
//expotamos el enrutador para que  pueda ser usado 
exports.default = enrutadorCliente;
