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
class Impresioncontrollers {
    //Metodo que nos permite listar consola
    listarimpresion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
            const db = yield database_1.conexion();
            //Realizamos la consulta para mostrar los datos de la tabla impresion
            let impresion = yield db.query('select * from impresion');
            //Retorna una respuesta en formato json de la impresion
            return res.json(impresion);
        });
    }
    //Metodo que guarda datos en la clase
    guardarimpresion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Guardamos los datos ingresados en el body en una variable
            let impresion = req.body;
            //Inserta los datos en la base de datos
            yield db.query('insert into impresion set ?', [impresion]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('La impresion fue guardada corecctamente');
        });
    }
    //Metodo que nos permite eliminar datos 
    eliminarimpresion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Realiza la eliminacion de la impresion
            yield db.query('delete from impresion where id_impresion = ?', [codigo]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('La impresion fue eliminada corecctamente');
        });
    }
    //Metodo que nos permite actualizar datos
    actualizarimpresion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Nuevo datos de la impresion
            let impresion_actualizada = req.body;
            //Realiza la actualizacion
            yield db.query('update impresion set ? where id_impresion = ?', [impresion_actualizada, codigo]);
            //Retorno un mensaje despues de realizarse todo correctamente
            return res.json('Se actualizo correctamente la impresion');
        });
    }
    //Motodo que lista una impresion en especifico
    obtenerUnaimpresion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibimos el codigo de la consola
            let codigo = req.params.codigo;
            //Realiza la seleccion de una consola y la guarda en una variable
            let unaimpresion = yield db.query('select * from impresion where id_impresion = ?', [codigo]);
            //Retorna la consola selecciona
            return res.json(unaimpresion[0]);
        });
    }
}
exports.Impresioncontrollers = Impresioncontrollers;
