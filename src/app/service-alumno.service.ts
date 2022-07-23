
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceAlumnoService {

  constructor(private http:HttpClient) { }

  URL_SERVER:string="https://app-escuela1.herokuapp.com";
  //URL_SERVER:string="http://localhost:5000";

  public doRegistration(user: User){
    return this.http.post(this.URL_SERVER+"/api/altaAlumnos1",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.URL_SERVER+"/api/alumnos");
  }

  
}
