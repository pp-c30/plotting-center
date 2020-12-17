import { Injectable } from '@angular/core';
//importamos un modulo de angular dentro de la carpeta coomon para utilizar el protocolo http 
import { HttpClient } from "@angular/common/http";
<<<<<<< HEAD

import { ICliente } from "../models/cliente";
=======
import { ICliente } from '../models/cliente';
>>>>>>> b08b86578c1a5df0d132d229afe7de2b588886b2

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //creamos una intancia http privado para poder accerder a tpdas herramientas de httpclient
  constructor(private http:HttpClient) {

   }
   getCliente()
   {
     //retorna lo quer hay en la ruta
   return this.http.get<ICliente[]>('http://localhost:3000/cliente')
<<<<<<< HEAD
   }

=======
  }


  //recibe datos de unCliente (respetando las propiedades del objeto, es decir, cliente.ts) de tipo ICliente
  saveCliente(unCliente:ICliente)
  {
    //a traves de una peticon http, especificamente del metodo post nos vamos a comunicar con la API 
    return this.http.post('http://localhost:3000/cliente',unCliente);
  }
  //recibimos un cliente de tpo ICliente
  updateCliente(unCliente:ICliente)
  {
    //creamso una variable de tipo number para obtener el id_cliente 
     let id:number = unCliente.id_cliente;
     //a traves de una peticon http, especificamente del metodo post nos vamos a comunicar con la API 
     return this.http.put('http://localhost:3000/cliente/'+id,unCliente);
  }

  //creamos el metedo (que se comunica con la api como todos) deleteCliente y solicitamos el id para poder elminar un cliente
  deleteCliente(id:number)
  {
   return this.http.delete('http://localhost:3000/cliente/'+id);
  }
>>>>>>> b08b86578c1a5df0d132d229afe7de2b588886b2
}
