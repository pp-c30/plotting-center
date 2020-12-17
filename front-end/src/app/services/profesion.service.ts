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

  saveProfesion(unaProfesion:IProfesion)
   {
     return  this.http.post('http://localhost:3000/profesion',unaProfesion);
   }

   updateProfesion(unaProfesion:IProfesion)
   {
      let id:number = unaProfesion.id_profesion;
      return  this.http.put('http://localhost:3000/profesion/'+id,unaProfesion);
   }

   deleteProfesion(id:number)
   {
     return  this.http.delete('http://localhost:3000/profesion/'+id);
   }

}
