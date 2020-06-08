import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudianteDetalleComponent } from './estudiante-detalle/estudiante-detalle.component';
import { EstudianteService } from './estudiante.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EstudiantesComponent, EstudianteDetalleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EstudianteService]
})
export class AppModule { }

