//Importamos la funcion "Router" desde "express"
import { Router } from "express";

//Importamos el metodo "usuario Controllers" desde el archivo "usuario.controllers"
import { Usuariocontrollers } from '../controllers/usuario.controllers';

//Instancia que permite tener todas las funciones de la clase " usuario Controllers"
let usuariocontrollers = new Usuariocontrollers();

//Creamos una variable constante llamada "enrutador usuario" en la que se guardan todas las funciones de Router
const enrutadorusuario = Router();

//Creamos una ruta que realiza una peticion que listara el usuario
enrutadorusuario.route('/usuario').get(usuariocontrollers.listarusuario);

//Ruta que permite guardar los datos en la base
enrutadorusuario.route('/usuario').post(usuariocontrollers.guardarusuario);

//Ruta que permite eliminar los datos
enrutadorusuario.route('/usuario/:codigo').delete(usuariocontrollers.eliminarusuario);

//Ruta que permite actualizar los datos
enrutadorusuario.route('/usuario/:codigo').put(usuariocontrollers.actualizarusuario);

//Ruta que permite una consola de la base de datos
enrutadorusuario.route('/usuario/:codigo').get(usuariocontrollers.obtenerUnusuario);

//Exportamos
export default enrutadorusuario;



