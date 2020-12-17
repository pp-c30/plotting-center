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
exports.Gramajecontrollers = void 0;
//Importamos la funcion "conexion" desde el archivo database
const database_1 = require("../database");
//Clase que nos permite alamacenar metodos
class Gramajecontrollers {
    //Metodo que nos permite listar consola
    listargramaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
            const db = yield database_1.conexion();
            //Realizamos la consulta para mostrar los datos de la tabla gramaje
            let gramaje = yield db.query('select * from gramaje');
            //Retorna una respuesta en formato json de gramaje
            res.json(gramaje);
        });
    }
    //Metodo que guarda datos en la clase
    guardargramaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Guardamos los datos ingresados en el body en una variable
            let gramaje = req.body;
            //Inserta los datos en la base de datos
            yield db.query('insert into gramaje set ?', [gramaje]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            res.json('el gramaje fue guardado corecctamente');
        });
    }
    //Metodo que nos permite eliminar datos 
    eliminargramaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Realiza la eliminacion del gramaje
            yield db.query('delete from gramaje where id_gramaje = ?', [codigo]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            res.json('el gramaje fue eliminado corecctamente');
        });
    }
    //Metodo que nos permite actualizar datos
    actualizargramaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Nuevo datos del gramaje
            let gramaje_actualizado = req.body;
            //Realiza la actualizacion
            yield db.query('update gramaje set ? where id_gramaje = ?', [gramaje_actualizado, codigo]);
            //Retorno un mensaje despues de realizarse todo correctamente
            res.json('se actualizo correctamente');
        });
    }
    //Motodo que lista una gramaje en especifico
    obtenerUngramaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibimos el codigo de la consola
            let codigo = req.params.codigo;
            //Realiza la seleccion de una consola y la guarda en una variable
            let ungramaje = yield db.query('select * from gramaje where id_gramaje = ?', [codigo]);
            //Retorna la consola selecciona
            res.json(ungramaje[0]);
        });
    }
}
exports.Gramajecontrollers = Gramajecontrollers;
