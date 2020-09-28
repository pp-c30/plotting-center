"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos la funcion "Router" desde "express"
const express_1 = require("express");
//Importamos el metodo "gramaje Controllers" desde el archivo "gramaje.controllers"
const gramaje_controllers_1 = require("../controllers/gramaje.controllers");
//Instancia que permite tener todas las funciones de la clase " gramaje Controllers"
let gramajecontrollers = new gramaje_controllers_1.Gramajecontrollers();
//Creamos una variable constante llamada "enrutador gramaje" en la que se guardan todas las funciones de Router
const enrutadorgramaje = express_1.Router();
//Creamos una ruta que realiza una peticion que listara el gramaje
enrutadorgramaje.route('/gramaje').get(gramajecontrollers.listargramaje);
//Ruta que permite guardar los datos en la base
enrutadorgramaje.route('/gramaje').post(gramajecontrollers.guardargramaje);
//Ruta que permite eliminar los datos
enrutadorgramaje.route('/gramaje/:codigo').delete(gramajecontrollers.eliminargramaje);
//Ruta que permite actualizar los datos
enrutadorgramaje.route('/gramaje/:codigo').put(gramajecontrollers.actualizargramaje);
//Ruta que permite una consola de la base de datos
enrutadorgramaje.route('/gramaje/:codigo').get(gramajecontrollers.obtenerUngramaje);
//Exportamos
exports.default = enrutadorgramaje;
