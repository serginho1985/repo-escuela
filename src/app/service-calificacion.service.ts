import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calificacion } from './model/calificacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceCalificacionService {

  constructor(private http:HttpClient) { }

  URL_SERVER:string="https://app-escuela1.herokuapp.com";
  //URL_SERVER:string="http://localhost:5000";

  public doRegistration(calif: Calificacion){
    return this.http.post(this.URL_SERVER+"/api/altaCalificacion",calif,{responseType:'text' as 'json'});
  }

  public getCalificaciones(id: number){
    return this.http.get(this.URL_SERVER+"/api/calificaciones/"+id);
  }

  public getAlumnos(){
    return this.http.get(this.URL_SERVER+"/api/alumnos");
  }

  public getMaterias(){
    return this.http.get(this.URL_SERVER+"/api/materias");
  }

  public deleteCalif(id: number){
    return this.http.delete(this.URL_SERVER+"/api/borrarCalificacion/"+id);
  }

  public updateCalif(id: number, calif: Calificacion){
    return this.http.put(this.URL_SERVER+"/api/actualizarCalificacion/"+id,calif,{responseType:'text' as 'json'});
  }

  public getCalificacion(id: number){
    return this.http.get(this.URL_SERVER+"/api/calificacion/"+id);
  }


}
