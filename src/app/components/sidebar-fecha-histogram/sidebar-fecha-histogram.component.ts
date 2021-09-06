import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar-fecha-histogram',
  templateUrl: './sidebar-fecha-histogram.component.html',
  styleUrls: ['./sidebar-fecha-histogram.component.scss'],
  viewProviders:[{provide: ControlContainer, useExisting:NgModelGroup}]
})
export class SidebarFechaHistogramComponent implements OnInit {

  criterio: string;
  category = ["Customize","Análisis por Mes", "Análisis en un año","Análisis por Años"];
  anios: any[];
  mesSelected: string;
  meses: any [];
  dt: string;
  dtf: string;
  ht: string;
  htf: string;
  anioSelected: string;


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
      {id: "12", nombre: "Diciembre"}
    ]

    this.anios= [
    {id: "2003", nombre: "2003"},
    {id: "2004", nombre: "2004"},
    {id: "2005", nombre: "2005"},
    {id: "2006", nombre: "2006"},
    {id: "2007", nombre: "2007"},
    {id: "2008", nombre: "2008"},
    {id: "2009", nombre: "2009"},
      {id: "2010", nombre: "2010"},
      {id: "2011", nombre: "2011"},
      {id: "2012", nombre: "2012"},
      {id: "2013", nombre: "2013"},
      {id: "2014", nombre: "2014"},
      {id: "2015", nombre: "2015"},
      {id: "2016", nombre: "2016"},
      {id: "2017", nombre: "2017"},
      {id: "2018", nombre: "2018"},
      {id: "2019", nombre: "2019"},
      {id: "2020", nombre: "2020"},
      {id: "2021", nombre: "2021"}
    ]

    this.mesSelected = "5";
    this.anioSelected = "2015";


  }



}
