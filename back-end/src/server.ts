import express, { Application } from "express";

export class Server {

    app:Application;

    constructor()
    {
        //hace uso de express//
      this.app = express();
      //se ejecuta el metodo listen//
      this.listen();
    }

     //le da arranque al servidor//
    listen()
    {
         this.app.listen(3000);
         console.log('Servidor corriendo en el puerto 3000');
    }

}