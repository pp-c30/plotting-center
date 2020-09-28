"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exportamos la clase porque la vamos a utilizar desde cliente.route
class ClienteController {
    //alojamos metodos, en este caso publicos para que puedam ser accedidos desde otros archivos
    listaCliente(req, res) {
        //el metedo va a retornar una rta de tipo json  
        return res.json("aca se listaron los pagos");
    }
}
exports.ClienteController = ClienteController;
