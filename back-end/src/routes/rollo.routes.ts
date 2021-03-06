//Importamos la funcion "Router" desde "express"
import { Router } from "express";

//Importamos el metodo "RolloController" desde el archivo "rollo.controllers"
import { RolloController } from '../controllers/rollo.controllers';

//Instancia que permite tener todas las funciones de la clase " RollonController"
let rolloController = new RolloController();

//Creamos una variable constante llamada "enrutador rollo" en la que se guardan todas las funciones de Router
const enrutadorRollo = Router();

//Ruta que listara todos los datos de la tabla "rollo"
enrutadorRollo.route('/rollo').get(rolloController.listarRollo);

//Ruta que permite guardar datos en la tabla "rollo"
enrutadorRollo.route('/rollo').post(rolloController.guardarRollo);

//Ruta que permite eliminar datos de la tabla "rollo"
enrutadorRollo.route('/rollo/:codigo').delete(rolloController.eliminarRollo);

//Ruta que permite actualizar datos de la tabla "rollon"
enrutadorRollo.route('/rollo/:codigo').put(rolloController.actualizarRollo);

//Ruta que permite mostrar un dato de la tabla "rollon"
enrutadorRollo.route('/rollo/:codigo').get(rolloController.obtenerRollo);

//Exportamos el enrutador 
export default enrutadorRollo;

