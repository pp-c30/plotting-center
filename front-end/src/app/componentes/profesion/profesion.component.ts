import { Component, OnInit } from '@angular/core';
//me traigo el servicio
import { ProfesionService } from "../../services/profesion.service";
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { IProfesion } from "src/app/models/profesion";

@Component({
  selector: 'app-profesion',
  templateUrl: './profesion.component.html',
  styleUrls: ['./profesion.component.css']
})
export class ProfesionComponent implements OnInit {

  //creo un arreglo para llenarlo con la respuestas
  lisProfesion =[];

  FormProfesion: FormGroup;

  buscarProfesion:any;

  p:number = 1;

  //creo una instancia en el constructor para acceder a los metodos dentro de la clase
  constructor(private profesionServi:ProfesionService, private fb: FormBuilder) { 
    this.FormProfesion= this.fb.group({

      profesion: ['',[Validators.required,Validators.minLength(2)] ],
      id_profesion: [null]

      })
  }

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
  
  guardarProfesion(){

    if(this.FormProfesion.value.id_profesion)
    {

      this.profesionServi.updateProfesion(this.FormProfesion.value).subscribe(
          respuesta =>{
                      console.log(respuesta)
                      this.listaProfesion();
                      this.FormProfesion.reset();
                      },

          error => console.log(error)
          );
     }

    else
    {
      this.profesionServi.saveProfesion(this.FormProfesion.value).subscribe(
           resultado => 
           {
            console.log(resultado);
            this.listaProfesion();
            this.FormProfesion.reset();
          }
       );

    }

   }

    editarProfesion(profesiones:IProfesion){

      this.FormProfesion.setValue(profesiones);
    }


    eliminarProfesion(id:number){

        if(confirm('esta seguro que quiere ejecutar esta accion?'))
        {
          this.profesionServi.deleteProfesion(id).subscribe(
            respuesta  => {
              console.log(respuesta);
              this.listaProfesion();
  
            },
            error => console.log(error)
  
            );
        }
      }
    }

