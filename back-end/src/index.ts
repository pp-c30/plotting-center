import { Server } from './server';

function principal()
{
    //se crea la instancia de la clase//
    const servidor = new Server();

    servidor.listen();
}

//ejecuto la funcion//
principal();