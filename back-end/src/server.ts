import express, { Application } from "express";
import enrutadorIndex from "./routes/index.routes";
import enrutadorGramaje from "./routes/gramaje.routes";
import enrutadorProfesion from "./routes/profesion.routes";
import morgan from "morgan";

export class Server {

    app:Application;

    constructor()
    {
        //hace uso de express//
      this.app = express();
      //se ejecuta el metodo de configuracion//
      this.configuracion();

      this.middleware();
      //se ejecuta el metodo routes//
      this.routes();
      
     

     }

    configuracion()
    {
        //se seteo el puerto//
        this.app.set('port', process.env.port || 3000)
    }

    routes(){
      this.app.use(enrutadorIndex);
      this.app.use(enrutadorGramaje);
      this.app.use(enrutadorProfesion);
    }

    //configuraciones extras//
    middleware()
    {
      this.app.use(morgan('dev'));
      this.app.use(express.json());
     
    }

    //le da arranque al servidor//
    listen()
    {
         this.app.listen(this.app.get('port'));
         console.log('Servidor corriendo en el puerto 3000');
    }
    

}