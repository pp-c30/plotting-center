import { Component, OnInit } from '@angular/core';
import { ImpresionService } from "../../services/impresion.service";
import { GramajeService} from "../../services/gramaje.service";
import { RolloService } from "../../services/rollo.service";
import { ClienteService } from "../../services/cliente.service";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { IImpresion } from 'src/app/models/impresion';
@Component({
  selector: 'app-impresion',
  templateUrl: './impresion.component.html',
  styleUrls: ['./impresion.component.css']
})
export class ImpresionComponent implements OnInit {

  listaImpresion = [];

  listaGramaje = [];

  listaRollo = [];

  formImpresion: FormGroup;

  displayCorrecion : string = 'display:none';

  listaCliente = [];



  constructor(private ImpresionServi:ImpresionService, private clienteServ:ClienteService, private fb:FormBuilder, private gramajeServ:GramajeService, private rolloServ:RolloService) {

    this.formImpresion = this.fb.group({
      id_impresion:[],
      tipo_color: [''],
      tamanio_area:[''],
      ancho: [''],
      largo:[''],
      gramaje : [''],
      rollo : [''],
      cantidad: ['',[Validators.required]],
      correcciones: [''],
      tiempo_co: [''],
      precio_x_hora : [''],
      precio_total: [''],
      cliente : ['',[Validators.required, Validators.minLength(1)]]
    })
   }

  ngOnInit(): void {
    this.obtenerImpresiones();
    this.obtenerGramajes();
    this.obtenerRollo();
    this.obtenerCliente();
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
    if(this.formImpresion.value.id_impresion)
    {
      this.ImpresionServi.updateImpresion(this.formImpresion.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerImpresiones();
          this.formImpresion.reset();
        },
        error => console.log(error)
      )
    }
    else
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

  editarImpresion(impresion:IImpresion)
  {
   this.formImpresion.setValue(impresion);
  }

  eliminarImpresion(id:number)
  {
    if(confirm('Esta seguro que desea eliminar?')){
    this.ImpresionServi.deleteImpresion(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerImpresiones();
      },
      error => console.log(error)
      );
       
    }

  }

  obtenerGramajes()
  {
    this.gramajeServ.getgramaje().subscribe(
      respuesta => {
        this.listaGramaje = respuesta;

      }
    )
  }

obtenerRollo()
{
  this.rolloServ.getRollo().subscribe(
    respuesta => {
      this.listaRollo = respuesta;
    }
  )
}


mostrarOcultarCorrecion(valor:number)
{
  if(valor == 1){
    this.displayCorrecion ="display:block";
  }
  else {
    this.displayCorrecion ="display:none";
  }
}



obtenerCliente()
{
  this.clienteServ.getCliente().subscribe(
    respuesta => {
      this.listaCliente = respuesta;
    }
  )
}





}
