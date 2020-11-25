import { Injectable } from '@angular/core';
//modulo de angular para hacer peticiones http//
import { HttpClient } from "@angular/common/http";
//me importo el archivo de models para tener acceso a la Interfaz//
import { IProfesion } from "../models/profesion";

@Injectable({
  providedIn: 'root'
})
export class ProfesionService {

  constructor(private http:HttpClient) { }
  
  getProfesion()
  {
    return this.http.get<IProfesion[]>('htpp://localhost:3000/profesion');
    
  }

}
