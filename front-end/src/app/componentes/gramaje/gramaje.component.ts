import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { GramajeService } from "../../services/gramaje.service";
import { Igramaje } from "src/app/models/gramaje";

@Component({
  selector: 'app-gramaje',
  templateUrl: './gramaje.component.html',
  styleUrls: ['./gramaje.component.css']
})
export class GramajeComponent implements OnInit {

  listgramajes=[];

  Formgramaje: FormGroup;

  constructor(private gramajeserv:GramajeService, private fb: FormBuilder) {

    this.Formgramaje= this.fb.group({

      gramaje: [''],
      id_gramaje: ['']

      })

   }

  ngOnInit(): void {
    this.listargramajes();
  }

  listargramajes(){

    this.gramajeserv.getgramaje().subscribe(
      resultado => this.listgramajes = resultado,
      error=> console.log(error)
    )

  }

  guardargramajes(){

    

    this.gramajeserv.savegramaje(this.Formgramaje.value).subscribe(
      resultado => {

          console.log(resultado);
        
          this.Formgramaje.reset();

      }
    )
  }

}
