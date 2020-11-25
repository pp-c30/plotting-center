import { Component, OnInit } from '@angular/core';
//me traigo el servicio
import { ProfesionService } from "../../services/profesion.service";

@Component({
  selector: 'app-profesion',
  templateUrl: './profesion.component.html',
  styleUrls: ['./profesion.component.css']
})
export class ProfesionComponent implements OnInit {

  //creo un arreglo para llenarlo con la respuestas
  lisProfesion =[];

  //creo una instancia en el constructor para acceder a los metodos dentro de la clase
  constructor(private profesionServi:ProfesionService) { }

  ngOnInit(): void {
    //apenas inicie hacer uso de este metodo
    this.listaProfesion();
  }

  listaProfesion()
  {
    this.profesionServi.getProfesion().subscribe(
      resultado => this.lisProfesion = resultado,
      error => console.log(error)
    )
  }

}
