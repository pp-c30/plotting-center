import { Response, Request } from 'express';

//exportamos la funcion para que sea usada 
export function mensaje(req:Request, res:Response)
{
    res.json('ruta principal de la web');
}