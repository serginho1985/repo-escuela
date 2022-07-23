import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditarCalificacionComponent } from '../editar-calificacion/editar-calificacion.component';
import { ServiceCalificacionService } from '../service-calificacion.service';

@Component({
  selector: 'app-buscar-calificacion',
  templateUrl: './buscar-calificacion.component.html',
  styleUrls: ['./buscar-calificacion.component.css']
})
export class BuscarCalificacionComponent implements OnInit {

  
  calificaciones:any;
 
  
  constructor(private service:ServiceCalificacionService, private router: Router) { }
  

  idalumno:any;
  message:any

 public findAllCalificaciones(){
  console.log("this.idalumno: "+this.idalumno)
  if (typeof this.idalumno === 'undefined' || this.idalumno == null) {
    
  }
  else{
    let resp= this.service.getCalificaciones(this.idalumno);
    resp.subscribe((data)=>this.calificaciones=data);
  }
 }

 public deleteCalificacion(id:number){
  let resp1= this.service.deleteCalif(id);
  resp1.subscribe((data)=>{
    this.message=data; 
    //location.reload();
    let resp= this.service.getCalificaciones(this.idalumno);
    resp.subscribe((data)=>this.calificaciones=data);
  
  });
 }

 public updateCalificacion(id:number){
  let resp= this.service.getCalificaciones(this.idalumno);
  resp.subscribe((data)=>this.calificaciones=data);
 }
 

   

  ngOnInit() {
    
  }

}
