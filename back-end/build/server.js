"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const gramaje_routes_1 = __importDefault(require("./routes/gramaje.routes"));
class Server {
    constructor() {
        //hace uso de express//
        this.app = express_1.default();
        //se ejecuta el metodo de configuracion//
        this.configuracion();
        //se ejecuta el metodo routes//
        this.routes();
        this.middleware();
    }
    configuracion() {
        //se seteo el puerto//
        this.app.set('port', process.env.port || 3000);
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use(gramaje_routes_1.default);
    }
    //configuraciones extras//
    middleware() {
        this.app.use(express_1.default.json());
    }
    //le da arranque al servidor//
    listen() {
        this.app.listen(this.app.get('port'));
        console.log('Servidor corriendo en el puerto 3000');
    }
}
exports.Server = Server;
