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
//importo la funcion conexcion desde el archivo database
const database_1 = require("../database");
//se crea (y exporta) la clase "Clientecontroller" para alojar metodos publicos porque son accedidos desde otros archivos
class Clientecontroller {
    //creo el metodo "listaCliente" para listar los clientes 
    listaCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
            const db = yield database_1.conexion();
            //se crea la varible cliente para realizar una consulta y mostrar los datos que contiene la tabla cliente
            let cliente = yield db.query('select * from cliente');
            //hacemos que el metodo cliente retorne una rta de tipo json, es decir todos los datos de los clientes
            return res.json(cliente);
        });
    }
    //creo el metodo "guardarCliente" para guardar datos en la clase listacliente
    guardarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //guardamos la funcion "conexion" en las constante "db" para lograr la conexion con la base de datos
            const db = yield database_1.conexion();
            //creamos la variable cliente y guardamos los datos que ingresamos en el body 
            let cliente = req.body;
            //se crea la varible cliente para poder insertar datos en la BD, mas especificamente en la tabla cliente 
            yield db.query('insert into cliente set ?', [cliente]);
            //retorna una respuesta de tipo json con el mensaje
            return res.json('el cliente fue guardado exitosamente');
        });
    }
    eliminarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            //recibimos un parametro denominado id en una variable de tipo let 
            let id = req.params.id;
            //ejecutamos una query la cual va a eliminar a un cliente a travez de la variable id
            yield db.query('delete from cliente where id_cliente = ?', [id]);
            return res.json('el cliente fue eliminado exitosamente');
        });
    }
    actulizarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            //recibimos un parametro denominado id en una variable de tipo let 
            let id = req.params.id;
            //recibimos nuevos datos para poder actulizarlos 
            let nuevos_datos_cliente = req.body;
            //ejecutamos una query la cual va a actualizar los datos de un cliente mediante la variable de tipo let que creamos anteriormente para con los datos que contiene id 
            yield db.query('update cliente set ? where id_cliente = ?', [nuevos_datos_cliente, id]);
            return res.json('el cliente fue actualizado exitosamente');
        });
    }
    obtenerUnCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            //hacemos una consulta para que mediante la varible id me muestre un cliente determinado
            let unCliente = yield db.query('select * from cliente where id_cliente = ?', [id]);
            //hacemos que el metodo Uncliente retorne una rta de tipo json, pero esta vez de un objeto en particular 
            return res.json(unCliente[0]);
        });
    }
}
exports.Clientecontroller = Clientecontroller;
