"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos la funcion "conexion" desde el archivo database
const database_1 = require("../database");
//Clase que nos permite alamacenar metodos
class Usuariocontrollers {
    //Metodo que nos permite listar consola
    listarusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
            const db = yield database_1.conexion();
            //Realizamos la consulta para mostrar los datos de la tabla usuario
            let usuario = yield db.query('select * from usuario');
            //Retorna una respuesta en formato json del usuario
            return res.json(usuario);
        });
    }
    //Metodo que guarda datos en la clase
    guardarusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Guardamos los datos ingresados en el body en una variable
            let usuario = req.body;
            //Inserta los datos en la base de datos
            yield db.query('insert into usuario set ?', [usuario]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('El usuario fue guardado correctamente');
        });
    }
    //Metodo que nos permite eliminar datos 
    eliminarusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Realiza la eliminacion del usuario
            yield db.query('delete from usuario where id_usuario = ?', [codigo]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('El usuario fue eliminado correctamente');
        });
    }
    //Metodo que nos permite actualizar datos
    actualizarusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Nuevo datos del usuario
            let usuario_actualizada = req.body;
            //Realiza la actualizacion
            yield db.query('update usuario set ? where id_usuario = ?', [usuario_actualizada, codigo]);
            //Retorno un mensaje despues de realizarse todo correctamente
            return res.json('Se actualizo correctamente el usuario');
        });
    }
    //Motodo que lista una impresion en especifico
    obtenerUnusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibimos el codigo de la consola
            let codigo = req.params.codigo;
            //Realiza la seleccion de una consola y la guarda en una variable
            let unusuario = yield db.query('select * from usuario where id_usuario = ?', [codigo]);
            //Retorna la consola selecciona
            return res.json(unusuario[0]);
        });
    }
}
exports.Usuariocontrollers = Usuariocontrollers;
