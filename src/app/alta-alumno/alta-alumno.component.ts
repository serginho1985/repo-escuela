import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ServiceAlumnoService } from '../service-alumno.service';

@Component({
	selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {


  user: User=new User();
  message:any;

  constructor(private service:ServiceAlumnoService) { }

  ngOnInit() {
  }
  

  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }

}