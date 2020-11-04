import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GramajeComponent } from './componentes/gramaje/gramaje.component';
<<<<<<< HEAD
import { ProfesionComponent } from './componentes/profesion/profesion.component';
=======
import { ClienteComponent } from './cliente/cliente.component';
>>>>>>> 1e2d7d4b07605bf62e6101370d69ff65b7846142

@NgModule({
  declarations: [
    AppComponent,
    GramajeComponent,
<<<<<<< HEAD
    ProfesionComponent
=======
    ClienteComponent
>>>>>>> 1e2d7d4b07605bf62e6101370d69ff65b7846142
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
