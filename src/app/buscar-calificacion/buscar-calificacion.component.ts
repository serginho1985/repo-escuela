import { Component, OnInit } from '@angular/core';
import { ServiceCalificacionService } from '../service-calificacion.service';

@Component({
  selector: 'app-buscar-calificacion',
  templateUrl: './buscar-calificacion.component.html',
  styleUrls: ['./buscar-calificacion.component.css']
})
export class BuscarCalificacionComponent implements OnInit {

  
  calificaciones:any;
 
  
  constructor(private service:ServiceCalificacionService) { }

  idalumno:any;
  message:any

 public findAllCalificaciones(){
  let resp= this.service.getCalificaciones(this.idalumno);
  resp.subscribe((data)=>this.calificaciones=data);
 }

 public deleteCalificacion(id:number){
  let resp1= this.service.deleteCalif(id);
  resp1.subscribe((data)=>this.message=data);
 }

  ngOnInit() {
    
  }

}
