import { Component, OnInit } from '@angular/core';
import { RolloService } from "../../services/rollo.service";

import { FormBuilder, FormGroup } from "@angular/forms";

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
  
  //console.log(this.formRollo.value);

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

