//Importamos la funcion "Router" desde "express"
import { Router } from "express";

//Importamos el metodo "gramaje Controllers" desde el archivo "gramaje.controllers"
import { Gramajecontrollers } from '../controllers/gramaje.controllers';

//Instancia que permite tener todas las funciones de la clase " gramaje Controllers"
let gramajecontrollers = new Gramajecontrollers();

//Creamos una variable constante llamada "enrutador gramaje" en la que se guardan todas las funciones de Router
const enrutadorgramaje = Router();

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
export default enrutadorgramaje;



