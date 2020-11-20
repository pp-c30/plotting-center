import { Injectable } from '@angular/core';
//importamos un modulo de angular dentro de la carpeta coomon para utilizar el protocolo http 
import { HttpClient } from "@angular/common/http";

import { ICliente } from "../models/cliente";

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
   }

}
