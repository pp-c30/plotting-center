"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        //hace uso de express//
        this.app = express_1.default();
        //se ejecuta el metodo listen//
        this.listen();
    }
    //le da arranque al servidor//
    listen() {
        this.app.listen(3000);
        console.log('Servidor corriendo en el puerto 3000');
    }
}
exports.Server = Server;
