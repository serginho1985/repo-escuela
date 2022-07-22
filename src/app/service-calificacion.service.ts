import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calificacion } from './model/calificacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceCalificacionService {

  constructor(private http:HttpClient) { }

  server="https://app-escuela1.herokuapp.com/api/altaCalificacion"
  local="http://localhost:5000/api/calificaciones/2"

  public doRegistration(calif: Calificacion){
    return this.http.post("https://app-escuela1.herokuapp.com/api/altaCalificacion",calif,{responseType:'text' as 'json'});
  }

  public getCalificaciones(id: number){
    return this.http.get("https://app-escuela1.herokuapp.com/api/calificaciones/"+id);
  }

  public getAlumnos(){
    return this.http.get("https://app-escuela1.herokuapp.com/api/alumnos");
  }

  public getMaterias(){
    return this.http.get("https://app-escuela1.herokuapp.com/api/materias");
  }

  public deleteCalif(id: number){
    return this.http.get("https://app-escuela1.herokuapp.com/api/borrarCalificacion/"+id);
  }


}
