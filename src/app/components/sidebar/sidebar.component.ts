import { Component, Output, EventEmitter, NgModule, OnInit, ViewChild } from '@angular/core';
import { HistoricidadService } from 'src/app/services/historicidad.service';
import { TableComponent } from '../table/table.component';
import { Custom} from 'src/app/classes/custom'
import { Router} from '@angular/router'
import { HistoricidadInputsService } from 'src/app/services/historicidad-inputs.service';
import { MapComponent } from '../map/map.component';
import { Subscription} from 'rxjs';
import { Mes } from 'src/app/classes/mes';
import { Periodo } from 'src/app/classes/periodo';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AlertSuccessComponent } from '../alert-success/alert-success.component';




declare var $: any;




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
  //providers:[TableComponent, MapComponent, HistoricidadInputsService]

})
export class SidebarComponent implements OnInit {

  constructor(private modalService: NgbModal, private _historicidadService: HistoricidadService, private _inputs: HistoricidadInputsService) { }

  private getSubscription: Subscription;

  promedioCustomModel = new Custom('An', 'temperatura_del_cielo', '-0.1m', '05:00', '11:00', '2019-10-01', '2019-11-01' );
  mesModel = new Mes('An', 'temperatura_del_cielo', '-0.1m', '5');
  periodoModel = new Periodo('An', 'temperatura_del_cielo', '-0.1m');
  modalRef: any;



  onSubmit(value: any){


    let variable = value.variables.temperaturas;
    let altura = value.variables.alturas;
    let fecha_inicio = value.fechas.fecha_inicio;
    let fecha_final = value.fechas.fecha_final;


    let hora_inicio = value.fechas.hora_inicio;
    let hora_final = value.fechas.hora_final;



    let estacion = "Andacollo [Collowara]";
    let mes = value.fechas.mes;
    let criterio = value.fechas.criterio;

    this._inputs.sendTab(("Serie"));
    this._inputs.sendCriterio((criterio));

    if(criterio == 'Customize'){
      hora_inicio = hora_inicio.substring(0,2);
      hora_final = hora_final.substring(0,2);
      this.promedioCustomModel = new Custom(estacion, variable, altura, hora_inicio, hora_final, fecha_inicio, fecha_final);
      this._inputs.sendCustom((this.promedioCustomModel));

    }
    if(criterio == 'Análisis por Mes'){
      this.mesModel = new Mes(estacion, variable, altura, mes);
      this._inputs.sendMes((this.mesModel));
    }
    if(criterio == 'Análisis Verano' || 'Análisis Otoño' || 'Análisis Invierno' || "Análisis Primavera" ||"Análisis por Años"){
      this.periodoModel = new Periodo(estacion, variable, altura);
      this._inputs.sendPeriodo((this.periodoModel));
    }

      this.modalRef = this.modalService.open(AlertSuccessComponent);










    /* this._historicidadService.getData(value).subscribe(
      data => this.promedios = data);

    //console.log(this.promedios)
    */
   }


  //constructor(private _historicidadService: HistoricidadService, private router: Routes) { }

   tab: string;
  ngOnInit(): void {

    this.tab = "Series de Tiempo";

  }





}
