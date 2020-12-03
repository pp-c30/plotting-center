import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Igramaje } from "../models/gramaje";

@Injectable({
  providedIn: 'root'
})
export class GramajeService {

  constructor(private http:HttpClient) { }

   getgramaje()
   {
     return this.http.get<Igramaje[]>('http://localhost:3000/gramaje')
   }

   savegramaje(ungramaje:Igramaje)
   {

     return  this.http.post('http://localhost:3000/gramaje',ungramaje);
      
   }

   updateGramajes(ungramaje:Igramaje)
   {
      let id:Number = ungramaje.id_gramaje;
      return  this.http.put('http://localhost:3000/gramaje/'+id,ungramaje);

   }

   deletegramaje(id:number){

      
     return  this.http.delete('http://localhost:3000/gramaje/'+id);
   }
}
