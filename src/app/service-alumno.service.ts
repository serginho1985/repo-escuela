
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceAlumnoService {

  constructor(private http:HttpClient) { }

  server="https://app-escuela1.herokuapp.com/api/altaAlumnos1"
  local="http://localhost:5000/api/alumnos"

  public doRegistration(user: User){
    return this.http.post("https://app-escuela1.herokuapp.com/api/altaAlumnos1",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("https://app-escuela1.herokuapp.com/api/alumnos");
  }

  
}
