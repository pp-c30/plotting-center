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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionController = void 0;
const database_1 = require("../database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AutenticacionController {
    registrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //generamos un salt que es fragmento aleatorio, que usa la libreria bcrypt, genero un salto, o sea el fragmento aleatorio, con numeor 10 vamos a lograr tener una ciclo aletorio y no repetitivo de la ocntraseña  
            const salt = yield bcryptjs_1.default.genSalt(10);
            const password_cifrada = yield bcryptjs_1.default.hash(req.body.contrasenia, salt);
            const unUsuario = {
                usuario: req.body.usuario,
                contrasenia: password_cifrada,
            };
            const db = yield database_1.conexion();
            yield db.query('insert into usuario set?', [unUsuario]);
            res.json('probando si se guarda el usuario');
        });
    }
    ingresar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.AutenticacionController = AutenticacionController;
