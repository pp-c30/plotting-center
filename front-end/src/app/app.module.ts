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
import {HttpClientModule, HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    GramajeComponent,
    ProfesionComponent,
    ClienteComponent,
    UsuarioComponent,
    ImpresionComponent,
    RolloComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
