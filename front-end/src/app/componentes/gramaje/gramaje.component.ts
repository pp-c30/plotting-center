import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
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

      gramaje: ['',[Validators.required,Validators.minLength(2)] ],
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

      this.gramajeserv.updateGramajes(this.Formgramaje.value).subscribe(
          respuesta =>{
                      console.log(respuesta)
                      this.listargramajes();
                      this.Formgramaje.reset();

          },

          error => console.log(error)


          );
        
      
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

    eliminargramaje(id:number){

        if(confirm('esta seguro que quiere ejecutar esta accion?')){
          this.gramajeserv.deletegramaje(id).subscribe(
            respuesta  => {
              console.log(respuesta);
              this.listargramajes();
  
            },
            error => console.log(error)
  
            );
        }
      }
    }

