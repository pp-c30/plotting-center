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
exports.RolloController = void 0;
//Importamos la funcion "conexion" desde el archivo database
const database_1 = require("../database");
//Clase que donde guardamos los metodos
class RolloController {
    //Metodo que nos permite listar consola
    listarRollo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
            const db = yield database_1.conexion();
            //Realizamos la consulta para mostrar los datos de la tabla rollo
            let rollo = yield db.query('select * from rollo');
            //Retorna una respuesta en formato json de rollo
            return res.json(rollo);
        });
    }
    //Metodo que guarda datos en la clase
    guardarRollo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Guardamos los datos ingresados en el body en una variable
            let rollo = req.body;
            //Inserta los datos en la base de datos
            yield db.query('insert into rollo set ?', [rollo]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('rollo guardado correctamente');
        });
    }
    //Metodo que nos permite eliminar datos 
    eliminarRollo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Realiza la eliminacion de la rollo
            yield db.query('delete from rollo where id_rollo = ?', [codigo]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('el rollo fue eliminado correctamente');
        });
    }
    //Metodo que nos permite actualizar datos
    actualizarRollo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo
            let codigo = req.params.codigo;
            //Nuevo datos de rollo
            let rollo_actualizado = req.body;
            //Realiza la actualizacion
            yield db.query('update rollo set ? where id_prollo = ?', [rollo_actualizado, codigo]);
            //Retorno un mensaje despues de realizarse todo correctamente
            return res.json('se actualizo correctamente');
        });
    }
    //Motodo que lista un rollo en especifico
    obtenerRollo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibimos el codigo de la consola
            let codigo = req.params.codigo;
            //Realiza la seleccion de una consola y la guarda en una variable
            let unrollo = yield db.query('select * from rollo where id_rollo = ?', [codigo]);
            //Retorna la consola selecciona
            return res.json(unrollo[0]);
        });
    }
}
exports.RolloController = RolloController;
