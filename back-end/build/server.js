"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const gramaje_routes_1 = __importDefault(require("./routes/gramaje.routes"));
const profesion_routes_1 = __importDefault(require("./routes/profesion.routes"));
const impresion_routes_1 = __importDefault(require("./routes/impresion.routes"));
const cliente_routes_1 = __importDefault(require("./routes/cliente.routes"));
const rollo_routes_1 = __importDefault(require("./routes/rollo.routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        //hace uso de express//
        this.app = express_1.default();
        //se ejecuta el metodo de configuracion//
        this.configuracion();
        this.middleware();
        //se ejecuta el metodo routes//
        this.routes();
    }
    configuracion() {
        //se seteo el puerto//
        this.app.set('port', process.env.port || 3000);
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use(gramaje_routes_1.default);
        this.app.use(profesion_routes_1.default);
        this.app.use(impresion_routes_1.default);
        this.app.use(cliente_routes_1.default);
        this.app.use(rollo_routes_1.default);
    }
    //configuraciones extras//
    middleware() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    //le da arranque al servidor//
    listen() {
        this.app.listen(this.app.get('port'));
        console.log('Servidor corriendo en el puerto 3000');
    }
}
exports.Server = Server;
