import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { AltaCalificacionComponent } from './alta-calificacion/alta-calificacion.component';
import { AltaMateriaComponent } from './alta-materia/alta-materia.component';
import { BuscarAlumnoComponent } from './buscar-alumno/buscar-alumno.component';
import { BuscarCalificacionComponent } from './buscar-calificacion/buscar-calificacion.component';
import { BuscarMateriaComponent } from './buscar-materia/buscar-materia.component';

const routes: Routes = [
  {path:"",redirectTo:"altaAlumno",pathMatch:"full"},
  {path:"altaAlumno",component:AltaAlumnoComponent},
  {path:"buscarAlumno",component:BuscarAlumnoComponent},
  {path:"buscarMateria",component:BuscarMateriaComponent},
  {path:"altaMateria",component:AltaMateriaComponent}, 
  {path:"altaCalificacion",component:AltaCalificacionComponent}, 
  {path:"buscarCalificacion",component:BuscarCalificacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
