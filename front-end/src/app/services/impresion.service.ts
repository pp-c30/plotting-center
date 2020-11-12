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
}


