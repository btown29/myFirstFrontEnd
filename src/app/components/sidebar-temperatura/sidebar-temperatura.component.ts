import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgModelGroup } from '@angular/forms';


@Component({
  selector: 'app-sidebar-temperatura',
  templateUrl: './sidebar-temperatura.component.html',
  styleUrls: ['./sidebar-temperatura.component.scss'],
  viewProviders:[{provide: ControlContainer, useExisting:NgModelGroup}]
})


export class SidebarTemperaturaComponent implements OnInit {


  alturas: any[];
  alturaSelected: any;
  tipos: any[];
  tipoSelected: any;
  datos: any[];
  datoSelected: any;
  criterios: any[];
  criterioSelected: any;
  temperatura: string;


  constructor() { }

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

    this.datos= [
      {id: "valor_min", nombre: "Valor Mínimo por hora"},
      {id: "valor_prom", nombre: "Valor Promedio por hora"},
      {id: "valor_max", nombre: "Valor Máximo por hora"},

    ]

    this.datoSelected = "valor_min";

    this.criterios= [
      {id: "Heladas", nombre: "Heladas"},
      {id: "Máximas", nombre: "Máximas"},
    ]

    this.criterioSelected = "Heladas";
    this.temperatura = "15";

  }



}
