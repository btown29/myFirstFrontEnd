
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ControlContainer, NgModelGroup } from '@angular/forms';

interface variable{
  id:number;
  variable:string;
}

interface altura{
id:number;
altura:string;
}



@Component({
  selector: 'app-sidebar-estacion',
  templateUrl: './sidebar-estacion.component.html',
  styleUrls: ['./sidebar-estacion.component.scss'],
  viewProviders:[{provide: ControlContainer, useExisting:NgModelGroup}]
})
export class SidebarEstacionComponent implements OnInit {


  variablesObject : variable[];
  selectedObjectVariable : variable;
  alturasObject: altura[];
  selectedObjectAltura: altura;
  alturas: any[];
  alturaSelected: any;
  tipos: any[];
  tipoSelected: any;

  temperaturas = "temperatura_de_suelo";
  constructor() {
  }
/*
  static addEstacionForm(): FormGroup{
    return new FormGroup(controls: {
      estaciones: new FormArray('');
    }
  }
*/
  getModalGeneral(){
    console.log("Prueba");
  }

  getModalTemperatura(){

  }
  getModalAltura(){

  }

  ngOnInit(): void {
    this.tipos = [
      {id: "temperatura_de_suelo", nombre: "Temperatura de suelo"},
      {id: "temperatura_del_aire", nombre: "Temperatura de aire"},
      {id: "temperatura_sensor", nombre: "Temperatura de sensor"},
      {id: "temperatura_del_agua", nombre: "Temperatura del agua"},
      {id: "temperatura_de_superficie_de_suelo", nombre: "Temperatura de superficie de suelo"}
    ]

    this.tipoSelected = "temperatura_de_suelo";

    this.alturas= [
      {id: "-1m", nombre: "-1 m"},
      {id: "-0.5m", nombre: "-0.5 m"},
      {id: "-0.2m", nombre: "-0.2 m"},
      {id: "-0.1m", nombre: "-0.1 m"},
      {id: "0m", nombre: "0 m"},
      {id: "1.5m", nombre: "1.5 m"},
      {id: "2m", nombre: "2 m"},
      {id: "3m", nombre: "3 m"},
      {id: "10m", nombre: "10 m"},

    ]

    this.alturaSelected = "-0.1m";



  }

  onVariableSelected(val:any){
    console.log(val);

  }


}
