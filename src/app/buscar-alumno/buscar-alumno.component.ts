import { Component, OnInit } from '@angular/core';
import { ServiceAlumnoService } from '../service-alumno.service';

@Component({
  selector: 'app-buscar-alumno',
  templateUrl: './buscar-alumno.component.html',
  styleUrls: ['./buscar-alumno.component.css']
})
export class BuscarAlumnoComponent implements OnInit {

  users:any;
 
  
  constructor(private service:ServiceAlumnoService) { }

  alumno:string | undefined;

 public findAllUsers(){
  let resp= this.service.getUsers();
  resp.subscribe((data)=>this.users=data);
 }

  ngOnInit() {
    this.findAllUsers();
  }


}
