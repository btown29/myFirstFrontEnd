import { Component, Output, EventEmitter, NgModule, OnInit, ViewChild } from '@angular/core';
import { HistoricidadService } from 'src/app/services/historicidad.service';
import { TableComponent } from '../table/table.component';

import { Router} from '@angular/router'
import { HistoricidadRegistroService } from 'src/app/services/historicidad-registro.service';
import { MapComponent } from '../map/map.component';
import { Subscription} from 'rxjs';
import { Mes } from 'src/app/classes/mes';
import { Periodo } from 'src/app/classes/periodo';
import { CustomRegistro } from 'src/app/classes/custom-registro';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AlertSuccessComponent } from '../alert-success/alert-success.component';



declare var $: any;



@Component({
  selector: 'app-sidebar-registro',
  templateUrl: './sidebar-registro.component.html',
  styleUrls: ['./sidebar-registro.component.scss']
})
export class SidebarRegistroComponent implements OnInit {


  constructor(private modalService:NgbModal, private _historicidadService: HistoricidadService, private _inputs: HistoricidadRegistroService) { }

  private getSubscription: Subscription;

  customRegistroModel = new CustomRegistro('An', 'temperatura_del_cielo', '-0.1m', 'val_min',10,0,'05:00', '11:00', '2019-10-01', '2019-11-01' );

  dt:string;
  dtf: string;
  ht: string;
  htf: string;
  registros: any[];
  registroSelected: string;




  onSubmit(value: any){

    let variable = value.variables.temperaturas;
    let altura = value.variables.alturas;
    let tipo = value.variables.dato;
    let temperatura = value.variables.Temperatura;
    let fecha_inicio = value.fecha_inicio;
    let fecha_final = value.fecha_final;
    let hora_inicio = value.hora_inicio;
    let hora_final = value.hora_final;
    hora_inicio = hora_inicio.substring(0,2);
    hora_final = hora_final.substring(0,2);
    let estacion = "Andacollo [Collowara]";
    let numero_registro = value.n;
    let criterio = value.variables.criterio;

    this._inputs.sendTab(("Registro"));
    this._inputs.sendCriterio((criterio));


    this.customRegistroModel = new CustomRegistro(estacion, variable, altura, tipo,numero_registro,temperatura,hora_inicio, hora_final, fecha_inicio, fecha_final);
    this._inputs.sendCustomRegistro((this.customRegistroModel));

    this.modalService.open(AlertSuccessComponent);





    /* this._historicidadService.getData(value).subscribe(
      data => this.promedios = data);

    //console.log(this.promedios)
    */
   }



  //constructor(private _historicidadService: HistoricidadService, private router: Routes) { }

  tab: string;

  ngOnInit(): void {

    this.tab = "Registros";

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

