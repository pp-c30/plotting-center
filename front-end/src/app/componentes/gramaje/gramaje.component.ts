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
      id_gramaje: [null]

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

    if(this.Formgramaje.value.id_gramaje){

      this.Formgramaje.updateGramaje(this.Formgramaje.value)

    }
    else{

      this.gramajeserv.savegramaje(this.Formgramaje.value).subscribe(
        resultado => {
  
            console.log(resultado);
            this.listargramajes();
            this.Formgramaje.reset();
  
        }
      );

    }
    

   
    }

    Editargramaje(gramajes:Igramaje){

      this.Formgramaje.setValue(gramajes);

    }
  }


