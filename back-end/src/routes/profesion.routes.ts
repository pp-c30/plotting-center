//Importamos la funcion "Router" desde "express"
import { Router } from "express";

//Importamos el metodo "ProfesionController" desde el archivo "profesion.controllers"
import { ProfesionController } from '../controllers/profesion.controller';

//Instancia que permite tener todas las funciones de la clase " ProfesionController"
let profesionController = new ProfesionController();

//Creamos una variable constante llamada "enrutadorProfesion" en la que se guardan todas las funciones de Router
const enrutadorProfesion = Router();

//Ruta que listara todos los datos de la tabla "profesion"
enrutadorProfesion.route('/profesion').get(profesionController.listarProfesion);

//Ruta que permite guardar datos en la tabla "profesion"
enrutadorProfesion.route('/profesion').post(profesionController.guardarProfesion);

//Ruta que permite eliminar datos de la tabla "profesion"
enrutadorProfesion.route('/profesion/:codigo').delete(profesionController.eliminarProfesion);

//Ruta que permite actualizar datos de la tabla "profesion"
enrutadorProfesion.route('/profesion/:codigo').put(profesionController.actualizarProfesion);

//Ruta que permite mostrar un dato de la tabla "profesion"
enrutadorProfesion.route('/profesion/:codigo').get(profesionController.obtenerProfesion);

//Exportamos el enrutador 
export default enrutadorProfesion;

