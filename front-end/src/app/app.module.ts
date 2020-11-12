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
<<<<<<< HEAD
=======

>>>>>>> e8ff4a1a9f0528805fa7eba1840565d8d3c50412
import { ReactiveFormsModule } from "@angular/forms";

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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
