import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calificacion } from '../model/calificacion';
import { ServiceCalificacionService } from '../service-calificacion.service';

@Component({
  selector: 'app-editar-calificacion',
  templateUrl: './editar-calificacion.component.html',
  styleUrls: ['./editar-calificacion.component.css']
})
export class EditarCalificacionComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private service:ServiceCalificacionService) { }

  id:any;
  sub:any;
  cal:any;
  calificacion: Calificacion=new Calificacion(); 
  alumnos:any;
  message:any;
  materias:any;

  ngOnInit(): void {

    let resp=this.service.getAlumnos();
    resp.subscribe((data)=>this.alumnos=data);

    let resp1=this.service.getMaterias();
    resp1.subscribe((data1)=>this.materias=data1);
    
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    
    let calif=this.service.getCalificacion(this.id);
    calif.subscribe((data0) =>{this.cal=data0; console.log(JSON.stringify(this.cal))});  
    
  }

  public udateNow(){
    console.log(JSON.stringify(this.cal))
    let resp=this.service.updateCalif(this.id,this.cal);
    resp.subscribe((data)=>this.message=data);
  }

}
