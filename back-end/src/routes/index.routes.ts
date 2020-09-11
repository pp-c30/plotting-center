import { Router } from "express";

//importamos la funcion "mensaje" desde index.controllers para que se puedan comunicar 
import { mensaje } from "../controllers/index.controllers";

let enrutadorIndex = Router();
//enrutador crea la ruta '/' a traves del metedo get y esta va a mostar lo q tenga la funcion "mensaje"
enrutadorIndex.route('/').get(mensaje);

export default enrutadorIndex;
