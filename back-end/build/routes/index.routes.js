"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importamos la funcion "mensaje" desde index.controllers para que se puedan comunicar 
const index_controllers_1 = require("../controllers/index.controllers");
let enrutadorIndex = express_1.Router();
//enrutador crea la ruta '/' a traves del metedo get y esta va a mostar lo q tenga la funcion "mensaje"
enrutadorIndex.route('/').get(index_controllers_1.mensaje);
exports.default = enrutadorIndex;
