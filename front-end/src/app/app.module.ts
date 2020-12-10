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
import { Ng2SearchPipeModule } from "ng2-search-filter";

=======
import { Ng2SearchPipeModule} from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './component/ingreso/ingreso.component';
>>>>>>> 2b9120e95ffa57b08426804101474a34d6378102

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
    FormsModule,
<<<<<<< HEAD
    Ng2SearchPipeModule
    
=======
    Ng2SearchPipeModule,
    NgxPaginationModule
>>>>>>> 2b9120e95ffa57b08426804101474a34d6378102
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
