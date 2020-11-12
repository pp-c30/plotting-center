import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRollo} from "../models/rollo";


@Injectable({
  providedIn: 'root'
})
export class RolloService {

  constructor(private http:HttpClient) { }

getRollo()
{
 return this.http.get<IRollo[]>('http://localhost:3000/rollo');
}

}

