import { Component, OnInit } from '@angular/core';
import { RolloService } from "../../services/rollo.service";

import { FormBuilder, FormGroup } from "@angular/forms";
import { IRollo } from 'src/app/models/rollo';

@Component({
  selector: 'app-rollo',
  templateUrl: './rollo.component.html',
  styleUrls: ['./rollo.component.css']
})
export class RolloComponent implements OnInit {

  listRollo = [];

  formRollo: FormGroup;

  constructor(private rolloServ:RolloService,private fb: FormBuilder) {

    this.formRollo = this.fb.group({
      id_rollo:[null],
      ancho:[''],
      largo:[''], 
      nombre:['']

    });

   }

  ngOnInit(): void {
    this.listarRollo();
  }


  listarRollo()
  {
  this.rolloServ.getRollo().subscribe(
     resultado => this.listRollo = resultado,
     error => console.log(error)
  )
  }

guardarRollo()
{
  
  if(this.formRollo.value.id_rollo)
  {
    //se actualiza
    this.rolloServ.updateRollo(this.formRollo.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.listarRollo();
        this.formRollo.reset();
      },
    error => console.log(error)
    )

  }else{
  this.rolloServ.saveRollo(this.formRollo.value).subscribe(
    resultado => {
      console.log(resultado);
      //se refresca la grilla
      this.listarRollo();
      this.formRollo.reset();
    },
    error => console.log(error)
  );
}


}
editarRollo(rollo:IRollo)
{
  this.formRollo.setValue(rollo);
}



}

