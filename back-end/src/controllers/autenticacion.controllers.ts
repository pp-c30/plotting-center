import { Response, Request } from "express";
import { conexion } from "../database";
import bcrypt from "bcryptjs";

export class AutenticacionController
{

    async registrar(req:Request,res:Response)
    {
        //generamos un salt que es fragmento aleatorio, que usa la libreria bcrypt, genero un salto, o sea el fragmento aleatorio, con numeor 10 vamos a lograr tener una ciclo aletorio y no repetitivo de la ocntraseña  
        const salt =  await bcrypt.genSalt(10);
        const password_cifrada = await bcrypt.hash(req.body.contrasenia,salt)
        const unUsuario = {
            usuario: req.body.usuario, 
            contrasenia: password_cifrada,
        }
        const db = await conexion();
        await db.query('insert into usuario set?', [unUsuario]);
       
       
        res.json('probando si se guarda el usuario');
    }
    async ingresar(req:Request,res:Response)
    {

    }    
    
}