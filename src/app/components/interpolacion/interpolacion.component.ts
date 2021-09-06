import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent implements OnInit {

  dt:string;
  dtf: string;
  ht: string;
  htf: string;
  registros: any[];
  registroSelected: string;


  constructor() { }

  ngOnInit(): void {

    this.dt = "2019-10-01";
    this.dtf = "2019-11-01";
    this.ht = "05:00";
    this.htf = "11:00";

    this.registros= [
      {id: "1", nombre: "Mostrar un Registro"},
      {id: "10", nombre: "Mostrar 10 Registros"},
      {id: "20", nombre: "Mostrar 20 Registros"},
    ]

    this.registroSelected = "10";
  }

}
