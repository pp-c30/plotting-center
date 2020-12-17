import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GramajeComponent } from './componentes/gramaje/gramaje.component';
import { ProfesionComponent } from './componentes/profesion/profesion.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ImpresionComponent } from './componentes/impresion/impresion.component';
import { RolloComponent } from './componentes/rollo/rollo.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import {RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes = [
  {
    path:"gramaje",component:GramajeComponent
  },
  {
    path:"profesion",component:ProfesionComponent
  },
  {
    path:"cliente",component:ClienteComponent
  },
  {
    path:"usuario",component:UsuarioComponent
  },
  {
    path:"impresion",component:ImpresionComponent
  },
  {
    path:"rollo",component:RolloComponent
  },
  {
    path:"ingreso",component:IngresoComponent
  },
  {
    path:"Rgistro",component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
