import { Component, OnInit } from '@angular/core';
import { ServiceMateriaService } from '../service-materia.service';

@Component({
  selector: 'app-buscar-materia',
  templateUrl: './buscar-materia.component.html',
  styleUrls: ['./buscar-materia.component.css']
})
export class BuscarMateriaComponent implements OnInit {

  materias:any;
 
  
  constructor(private service:ServiceMateriaService) { }

  materia:string | undefined;

  public findAllMaterias(){
    let resp= this.service.getMaterias();
    resp.subscribe((data)=>this.materias=data);
  }

  ngOnInit() {
    
  }

}
