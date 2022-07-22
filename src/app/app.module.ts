import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { BuscarAlumnoComponent } from './buscar-alumno/buscar-alumno.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AltaMateriaComponent } from './alta-materia/alta-materia.component';
import { BuscarMateriaComponent } from './buscar-materia/buscar-materia.component';
import { AltaCalificacionComponent } from './alta-calificacion/alta-calificacion.component';
import { BuscarCalificacionComponent } from './buscar-calificacion/buscar-calificacion.component';
import { EditarCalificacionComponent } from './editar-calificacion/editar-calificacion.component';
import { BorrarCalificacionComponent } from './borrar-calificacion/borrar-calificacion.component'

@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnoComponent,
    BuscarAlumnoComponent,
    AltaMateriaComponent,
    BuscarMateriaComponent,
    AltaCalificacionComponent,
    BuscarCalificacionComponent,
    EditarCalificacionComponent,
    BorrarCalificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
