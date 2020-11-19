import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Iimpresion } from "../models/impresion";

@Injectable({
  providedIn: 'root'
})
export class ImpresionService {

  constructor(private http:HttpClient) { }
  getImpresion()
  {
   return this.http.get<Iimpresion[]>('http://localhost:3000/impresion')
  }

  saveImpresion(unaImpresion:Iimpresion)
  {
     return this.http.post('http://localhost:3000/impresion',unaImpresion);
    
  }

  updateImpresion(unaImpresion:Iimpresion)
  {
     let id:number = unaImpresion.id_impresion;
     return this.http.put('http://localhost:3000/impresion/'+id,unaImpresion);
  }

  deleteImpresion(id:number)
  {
   return this.http.delete('http://localhost:3000/impresion/'+id);
  }
}


