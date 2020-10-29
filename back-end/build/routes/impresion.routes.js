"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos la funcion "Router" desde "express"
const express_1 = require("express");
//Importamos el metodo "gramaje Controllers" desde el archivo "gramaje.controllers"
const impresion_controllers_1 = require("../controllers/impresion.controllers");
//Instancia que permite tener todas las funciones de la clase " gramaje Controllers"
let impresioncontrollers = new impresion_controllers_1.Impresioncontrollers();
//Creamos una variable constante llamada "enrutador gramaje" en la que se guardan todas las funciones de Router
const enrutadorimpresion = express_1.Router();
//Creamos una ruta que realiza una peticion que listara el gramaje
enrutadorimpresion.route('/impresion').get(impresioncontrollers.listarimpresion);
//Ruta que permite guardar los datos en la base
enrutadorimpresion.route('/impresion').post(impresioncontrollers.guardarimpresion);
//Ruta que permite eliminar los datos
enrutadorimpresion.route('/impresion/:codigo').delete(impresioncontrollers.eliminarimpresion);
//Ruta que permite actualizar los datos
enrutadorimpresion.route('/impresion/:codigo').put(impresioncontrollers.actualizarimpresion);
//Ruta que permite una consola de la base de datos
enrutadorimpresion.route('/impresion/:codigo').get(impresioncontrollers.obtenerUnaimpresion);
//Exportamos
exports.default = enrutadorimpresion;
