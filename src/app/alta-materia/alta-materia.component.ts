import { Component, OnInit } from '@angular/core';
import { Materia } from '../model/materia';
import { ServiceMateriaService } from '../service-materia.service';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  materia: Materia=new Materia();
  message:any;

  constructor(private service:ServiceMateriaService) { }

  ngOnInit() {
  }
  

  public registerNow(){
    let resp=this.service.doRegistration(this.materia);
    resp.subscribe((data)=>this.message=data);
  }

}
