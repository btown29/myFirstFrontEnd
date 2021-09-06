import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar-fecha',
  templateUrl: './sidebar-fecha.component.html',
  styleUrls: ['./sidebar-fecha.component.scss'],
  viewProviders:[{provide: ControlContainer, useExisting:NgModelGroup}]
})
export class SidebarFechaComponent implements OnInit {

  criterio: string;
  mesSelected: string;
  meses: any [];
  category = ["Customize","Análisis por Mes","Análisis por Años"];
  dt: string;
  dtf: string;
  ht: string;
  htf: string;


  getModalFecha(){

  }
  constructor() { }

  ngOnInit(): void {

    this.criterio="Customize";
    this.dt = "2019-10-01";
    this.dtf = "2019-11-01";
    this.ht = "05:00";
    this.htf = "11:00";

    this.meses= [
      {id: "1", nombre: "Enero"},
      {id: "2", nombre: "Febrero"},
      {id: "3", nombre: "Marzo"},
      {id: "4", nombre: "Abril"},
      {id: "5", nombre: "Mayo"},
      {id: "6", nombre: "Junio"},
      {id: "7", nombre: "Julio"},
      {id: "8", nombre: "Agosto"},
      {id: "9", nombre: "Septiembre"},
      {id: "10", nombre: "Octubre"},
      {id: "11", nombre: "Noviembre"},
      {id: "12", nombre: "Diciembre"},
    ]

    this.mesSelected = "5";


  }


}
