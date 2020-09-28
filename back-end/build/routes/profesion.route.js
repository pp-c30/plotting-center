"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos un enrutador de express
const express_1 = require("express");
//importo profesion controller
const profesion_controller_1 = require("../controllers/profesion.controller");
//creamos una variable que se traiga todas las func de router
const enrutadorProfesion = express_1.Router();
//creamos una instancia para acceder a los metodos de la clase
let profesionController = new profesion_controller_1.ProfesionController();
//creacion de las rutas
enrutadorProfesion.route('/profesion').get(profesionController.listaProfesion);
