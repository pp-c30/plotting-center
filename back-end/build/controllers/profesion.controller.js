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
//Clase que donde guardamos los metodos
class ProfesionController {
    //Metodo que nos permite listar consola
    listarProfesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
            const db = yield database_1.conexion();
            //Realizamos la consulta para mostrar los datos de la tabla gramaje
            let profesion = yield db.query('select * from profesion');
            //Retorna una respuesta en formato json de gramaje
            return res.json(profesion);
        });
    }
    //Metodo que guarda datos en la clase
    guardarProfesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Guardamos los datos ingresados en el body en una variable
            let profesion = req.body;
            //Inserta los datos en la base de datos
            yield db.query('insert into profesion set ?', [profesion]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('profesion guardada correctamente');
        });
    }
    //Metodo que nos permite eliminar datos 
    eliminarProfesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Realiza la eliminacion de la profesion
            yield db.query('delete from profesion where id_profesion = ?', [codigo]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('la profesion fue eliminado correctamente');
        });
    }
    //Metodo que nos permite actualizar datos
    actualizarProfesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Nuevo datos de profesion
            let profesion_actualizada = req.body;
            //Realiza la actualizacion
            yield db.query('update profesion set ? where id_profesion = ?', [profesion_actualizada, codigo]);
            //Retorno un mensaje despues de realizarse todo correctamente
            return res.json('se actualizo correctamente');
        });
    }
    //Motodo que lista una gramaje en especifico
    obtenerProfesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibimos el codigo de la consola
            let codigo = req.params.codigo;
            //Realiza la seleccion de una consola y la guarda en una variable
            let unaprofesion = yield db.query('select * from profesion where id_profesion = ?', [codigo]);
            //Retorna la consola selecciona
            return res.json(unaprofesion[0]);
        });
    }
}
exports.ProfesionController = ProfesionController;
