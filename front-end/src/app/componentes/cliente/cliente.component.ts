import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../services/cliente.service';

//el formgroup nos va permitir generar un frupo de propiedades, o sae recoger los daros de cada input  ademas nos va permitir agregarle reglas, es decir, validaciones 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICliente } from '../../models/cliente';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listCliente = [];

  formCliente:FormGroup;
  //creamso un nuevo atributo de tipo any para poder buscar cualquier parametro de busqueda (caracteres)
  buscarCliente:any;

  p:number;

  //creamos una instacia privada qeu nos permite accerder a los atributos de pagosservice //el formbuilder nos va a permitir construir nuestro formulario   
  constructor(private clienteServ:ClienteService, private fb:FormBuilder) { 
    
    //
    this.formCliente = this.fb.group({
     id_cliente: [null],
     nombre_razon_social: ['', [Validators.required]],
     dni_cuit: ['',[Validators.required] ],
     telefono_celular: [''],
     profesion: ['', [Validators.required]],
     correo_electronico: ['']

    })
  }

  ngOnInit(): void {
    this.obtenerCliente();
  }
  obtenerCliente()
  {
    //ejecutamos el getcliente y hacemos un subscribe qeu esto hace que se vuelquen los datos en la api en "resultado" 
    this.clienteServ.getCliente().subscribe(
      //si recibimos un resultado lo guardamos en litscliente sino se muestra en consola
      resultado => this.listCliente = resultado, 
      error=> console.log(error) 
    )
  }
  guardarCliente()
  {
    //metemos un if para saber si el id_cliente esta en el formulario
    if(this.formCliente.value.id_cliente)
    {
      //accedemos al metedo updateCliente y le mandamos el formulario entero con sus valores y el id.
      this.clienteServ.updateCliente(this.formCliente.value).subscribe(
        //al hacer un susbcribe vamos a obtener una rta
        respuesta => {
          //imprimimos la rta en consola
          console.log(respuesta);
          this.obtenerCliente();
          this.formCliente.reset();
        },
        //si lanza un error nos va a mostrar en consola
        error => console.log(error)
      )
    }
    else
    {
      console.log(this.formCliente.value);
    //accedemos al servicio clienteserv, y al savecliente le mando solo los valores. hacemos un subscribe para validar el resultado que vampos a obtejer 
      this.clienteServ.saveCliente(this.formCliente.value).subscribe( 
        resultado =>{
          //cuando se guarde el resultado se va a mostrar en pantalla 
          console.log(resultado);
          //ejecutamos este metedo para asi poder refrescar la grilla
          this.obtenerCliente(); 
          //utilizamos un reset para poder resetear nuestro formulario
          this.formCliente.reset();
        },
        error => console.log(error)
      );
    }
  }
  //recibimos la interfez comple de ICliente
  editarCliente(cliente:ICliente)
  {
    //seteamos los valores del objeto entero y mostramos en consola
   this.formCliente.setValue(cliente);
  }
  //creamos el metodo eliminarCliente
  eliminarCliente(id:number)
  {
    //hacemos un confirm para asegurarnos de estar seguro de elimnar un cliente de BD
    if(confirm('¿Esta seguro que desea eliminar este cliente?')){
    //accedemos al clienteServ para acceder a su metodo deleteCliente y le pasamos el id
      this.clienteServ.deleteCliente(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerCliente();
      },
      error => console.log(error)
      );
       
    }

  }

}
