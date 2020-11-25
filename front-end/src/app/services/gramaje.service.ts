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

}
