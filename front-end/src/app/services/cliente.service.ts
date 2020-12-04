import { Injectable } from '@angular/core';
//importamos un modulo de angular dentro de la carpeta coomon para utilizar el protocolo http 
import { HttpClient } from "@angular/common/http";

import { ICliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //creamos una intancia http privado para poder accerder a tpdas herramientas de httpclient
  constructor(private http:HttpClient) {

   }
   getCliente()
   {
     //hacemos una pèticon get y nos retorna lo quer hay en la ruta(o sea en la BD)
   return this.http.get<ICliente[]>('http://localhost:3000/cliente')
  }


  //recibe datos de unCliente (respetando las propiedades del objeto, es decir, cliente.ts) de tipo ICliente
  saveCliente(unCliente:ICliente)
  {
    //a traves de una peticon http, especificamente del metodo post nos vamos a comunicar con la API 
    this.http.post('http://localhost:3000/cliente',unCliente);
  }

  updateCliente(unCliente:ICliente)
  {
     let id:number = unCliente.id_cliente;
     return this.http.put('http://localhost:3000/cliente/'+id,unCliente);
  }

  deleteCliente(id:number)
  {
   return this.http.delete('http://localhost:3000/cliente/'+id);
  }
}


