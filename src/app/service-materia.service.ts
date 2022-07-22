import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from './model/materia';

@Injectable({
  providedIn: 'root'
})
export class ServiceMateriaService {

  constructor(private http:HttpClient) { }

  server="https://app-escuela1.herokuapp.com/api/altaMateria"
  local="http://localhost:5000/api/alumnos"

  public doRegistration(user: Materia){
    return this.http.post("https://app-escuela1.herokuapp.com/api/altaMateria",user,{responseType:'text' as 'json'});
  }

  public getMaterias(){
    return this.http.get("https://app-escuela1.herokuapp.com/api/materias");
  }
}
