import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from './model/materia';

@Injectable({
  providedIn: 'root'
})
export class ServiceMateriaService {

  constructor(private http:HttpClient) { }

  URL_SERVER:string="https://app-escuela1.herokuapp.com";
  //URL_SERVER:string="http://localhost:5000";

  public doRegistration(user: Materia){
    return this.http.post(this.URL_SERVER+"/api/altaMateria",user,{responseType:'text' as 'json'});
  }

  public getMaterias(){
    return this.http.get(this.URL_SERVER+"/api/materias");
  }
}
