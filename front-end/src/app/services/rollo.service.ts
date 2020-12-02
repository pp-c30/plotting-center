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


saveRollo(unRollo:IRollo)
{
 return this.http.post('http://localhost:3000/rollo', unRollo);
 
}


updateRollo(unRollo:IRollo)
{
  let id:number = unRollo.id_rollo;
  return this.http.put('http://localhost:3000/rollo'+id,unRollo);
}


deleteRollo(id:number)
{
  this.http.delete('http://localhost:3000/rollo/'+id);
}

}
