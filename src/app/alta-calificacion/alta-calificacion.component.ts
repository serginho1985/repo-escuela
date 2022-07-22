import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../model/calificacion';
import { ServiceCalificacionService } from '../service-calificacion.service';

@Component({
  selector: 'app-alta-calificacion',
  templateUrl: './alta-calificacion.component.html',
  styleUrls: ['./alta-calificacion.component.css']
})
export class AltaCalificacionComponent implements OnInit {

  calif: Calificacion=new Calificacion();
  alumnos:any;
  message:any;
  materias:any;

  constructor(private service:ServiceCalificacionService) { }

  ngOnInit() {
    let resp=this.service.getAlumnos();
    resp.subscribe((data)=>this.alumnos=data);

    let resp1=this.service.getMaterias();
    resp1.subscribe((data1)=>this.materias=data1);
  }
  

  public registerNow(){
    console.log(JSON.stringify(this.calif))
    let resp=this.service.doRegistration(this.calif);
    resp.subscribe((data)=>this.message=data);
  }

}
