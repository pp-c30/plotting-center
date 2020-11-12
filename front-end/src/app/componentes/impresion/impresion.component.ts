import { Component, OnInit } from '@angular/core';
import { ImpresionService } from "../../services/impresion.service";
import { FormBuilder,FormGroup } from "@angular/forms";
@Component({
  selector: 'app-impresion',
  templateUrl: './impresion.component.html',
  styleUrls: ['./impresion.component.css']
})
export class ImpresionComponent implements OnInit {

  listaImpresion = [];

  formImpresion: FormGroup;

  constructor(private ImpresionServi:ImpresionService, private fb:FormBuilder) {

    this.formImpresion = this.fb.group({
      tipo_color: [''],
      tamanio_area:[''],
      ancho: [''],
      largo:[''],
      gramaje : [''],
      rollo : [''],
      cantidad: [''],
      correcciones: [''],
      tiempo_co: [''],
      precio_x_hora : [''],
      precio_total: [''],
      cliente : ['']
    })
   }

  ngOnInit(): void {
    this.obtenerImpresiones();
  }

  obtenerImpresiones()
  {
    this.ImpresionServi.getImpresion().subscribe(
      resultado => this.listaImpresion = resultado,
      error => console.log(error)
    )
  }

  guardarImpresiones()
  {
    this.ImpresionServi.saveImpresion(this.formImpresion.value).subscribe(
      resultado => {
        console.log(resultado);
        this.obtenerImpresiones();
        this.formImpresion.reset();
      },
      error => console.log(error)
      
    );
  }

}
