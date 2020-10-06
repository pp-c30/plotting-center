//Importamos la funcion "Router" desde "express"
import { Router } from "express";

//Importamos el metodo "gramaje Controllers" desde el archivo "gramaje.controllers"
import { Impresioncontrollers } from '../controllers/impresion.controllers';

//Instancia que permite tener todas las funciones de la clase " gramaje Controllers"
let impresioncontrollers = new Impresioncontrollers();

//Creamos una variable constante llamada "enrutador gramaje" en la que se guardan todas las funciones de Router
const enrutadorimpresion = Router();

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
export default enrutadorimpresion;



