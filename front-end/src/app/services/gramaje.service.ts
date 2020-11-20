import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient} from "@angular/common/http";

import { Igramaje } from "../models/gramaje";

@Injectable({
  providedIn: 'root'
})
export class GramajeService {

  constructor(private http:HttpClient) {
    
   }

   getgramaje()
   {
     return this.http.get<Igramaje[]>('http://locahotst:3000/gramaje')
   }

}
