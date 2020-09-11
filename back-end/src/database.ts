//importamos la herramiento promise mysql y usamos el metodo create pool ´para poder conectarnos

import { createPool } from "promise-mysql";

//cramos la funcion conexion encargada de conectarse y luego la exportamos
export async function conexion()
{
    //creamos la const q va a guardar los parametro,es decir, la conexion 
    const connect = await createPool({
        host:'localhost',
        user:'root',
        password:'',
        database:'plotting_center'
    })
    return connect; 
}
