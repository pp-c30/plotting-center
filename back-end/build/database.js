"use strict";
//importamos la herramiento promise mysql y usamos el metodo create pool ´para poder conectarnos
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
exports.conexion = void 0;
const promise_mysql_1 = require("promise-mysql");
//cramos la funcion conexion encargada de conectarse y luego la exportamos
function conexion() {
    return __awaiter(this, void 0, void 0, function* () {
        //creamos la const q va a guardar los parametro,es decir, la conexion 
        const connect = yield promise_mysql_1.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'plotting_center'
        });
        return connect;
    });
}
exports.conexion = conexion;
