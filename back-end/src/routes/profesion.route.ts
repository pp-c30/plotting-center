//importamos un enrutador de express
import { Router } from "express";
//importo profesion controller
import { ProfesionController } from "../controllers/profesion.controller";

//creamos una variable que se traiga todas las func de router
const enrutadorProfesion = Router();

//creamos una instancia para acceder a los metodos de la clase
let profesionController = new ProfesionController();

//creacion de las rutas

enrutadorProfesion.route('/profesion').get(profesionController.listaProfesion);