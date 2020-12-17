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

<<<<<<< HEAD
=======
   updateGramajes(ungramaje:Igramaje)
   {
      let id:number = ungramaje.id_gramaje;
      return  this.http.put('http://localhost:3000/gramaje/'+id,ungramaje);

   }

   deletegramaje(id:number){

      
     return  this.http.delete('http://localhost:3000/gramaje/'+id);
   }
>>>>>>> b08b86578c1a5df0d132d229afe7de2b588886b2
}
