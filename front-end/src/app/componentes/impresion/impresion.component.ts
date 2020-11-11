import { Component, OnInit } from '@angular/core';
import { ImpresionService } from "../../services/impresion.service";

@Component({
  selector: 'app-impresion',
  templateUrl: './impresion.component.html',
  styleUrls: ['./impresion.component.css']
})
export class ImpresionComponent implements OnInit {

  listaImpresion = [];

  constructor(private ImpresionServi:ImpresionService) { }

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

}
