import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GramajeComponent } from './componentes/gramaje/gramaje.component';
import { ProfesionComponent } from './componentes/profesion/profesion.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ImpresionComponent } from './componentes/impresion/impresion.component';
import { RolloComponent } from './componentes/rollo/rollo.component';
import {HttpClient, HttpClientModule  } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
<<<<<<< HEAD
=======
import { Ng2SearchPipeModule} from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { RegistroComponent } from './componentes/registro/registro.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
>>>>>>> b08b86578c1a5df0d132d229afe7de2b588886b2

@NgModule({
  declarations: [
    AppComponent,
    GramajeComponent,
    ProfesionComponent,
    ClienteComponent,
    UsuarioComponent,
    ImpresionComponent,
    RolloComponent,
    RegistroComponent,
    IngresoComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
