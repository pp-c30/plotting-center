import {Router} from "express";

let enrutadorIndex = Router();

enrutadorIndex.route('/').get();

export default enrutadorIndex;
