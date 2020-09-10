import express, { Application } from "express";

export class Server {

    app:Application;

    constructor()
    {
        //hace uso de express//
      this.app = express();
      //se ejecuta el metodo de configuracion//
      this.configuracion();
      //se ejecuta el metodo listen//
      this.listen();
    }

    configuracion()
    {
        //se seteo el puerto//
        this.app.set('port', process.env.port || 3000)
    }

    

     //le da arranque al servidor//
    listen()
    {
         this.app.listen(this.app.get('port'));
         console.log('Servidor corriendo en el puerto 3000');
    }

}