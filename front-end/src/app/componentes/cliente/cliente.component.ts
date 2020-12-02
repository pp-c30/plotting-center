import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listCliente = [];

  //creamos una instacia privada qeu nos permite accerder a los atributos de pagosservice
  constructor(private clienteServ:ClienteService) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }
  obtenerCliente()
  {
    //ejecutamos el getcliente y hacemos un subscribe qeu esto hace que se vuelquen los datos en la api en "resultado" 
    this.clienteServ.getCliente().subscribe(
      //si recibimos un resultado lo guardamos en litscliente sino se muestra en consola
      resultado => this.listCliente = resultado, 
      error=> console.log(error) 
    )
  }

}
