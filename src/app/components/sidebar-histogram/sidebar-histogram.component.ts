import { Component, Output, EventEmitter, NgModule, OnInit, ViewChild } from '@angular/core';
import { HistoricidadService } from 'src/app/services/historicidad.service';
import { TableComponent } from '../table/table.component';

import { Router} from '@angular/router'
import { HistoricidadInputsService } from 'src/app/services/historicidad-inputs.service';
import { HistoricidadHistogramService } from 'src/app/services/historicidad-histogram.service';
import { MapComponent } from '../map/map.component';
import { Subscription} from 'rxjs';
import { Mes } from 'src/app/classes/mes';
import { Periodo } from 'src/app/classes/periodo';
import { PeriodoHistogram } from 'src/app/classes/periodo-histogram';
import { AnioHistogram } from 'src/app/classes/anio-histogram';
import { MesHistogram } from 'src/app/classes/mes-histogram';
import { CustomHistogram } from 'src/app/classes/custom-histogram';
import { MessageBundle } from '@angular/compiler';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AlertSuccessComponent} from 'src/app/components/alert-success/alert-success.component';


declare var $: any;



@Component({
  selector: 'app-sidebar-histogram',
  templateUrl: './sidebar-histogram.component.html',
  styleUrls: ['./sidebar-histogram.component.scss']
})
export class SidebarHistogramComponent implements OnInit {

  constructor(private modalService:NgbModal, private _historicidadService: HistoricidadService, private _inputs: HistoricidadHistogramService) { }

  private getSubscription: Subscription;

  customHistogramModel = new CustomHistogram('An', 'temperatura_del_cielo', '-0.1m','val_min','heladas',0, '05:00', '11:00', '2019-10-01', '2019-11-01' );
  mesHistogramModel = new MesHistogram('An', 'temperatura_del_cielo', '-0.1m','val_min','heladas',0, '5' );
  anioHistogramModel = new AnioHistogram('An', 'temperatura_del_cielo', '-0.1m','val_min','heladas',0, '2015' );
  periodoHistogramModel = new PeriodoHistogram('An', 'temperatura_del_cielo', '-0.1m','val_min','heladas',0);



  onSubmit(value: any){


    let variable = value.variables.temperaturas;
    let altura = value.variables.alturas;
    let tipo = value.variables.dato;
    let tipo_criterio = value.variables.criterio;
    let temperatura = value.variables.Temperatura;
    let fecha_inicio = value.fechas.fecha_inicio;
    let fecha_final = value.fechas.fecha_final;
    let hora_inicio = value.fechas.hora_inicio;
    let hora_final = value.fechas.hora_final;
    let estacion = "Andacollo [Collowara]";
    let mes = value.fechas.mes;
    let anio = value.fechas.anio;
    let criterio = value.fechas.criterio;

    this._inputs.sendTab(("Histograma"));
    this._inputs.sendCriterio((criterio));
    this._inputs.sendTipoCriterio((tipo_criterio));

    if(criterio == 'Customize'){
      hora_inicio = hora_inicio.substring(0,2);
      hora_final = hora_final.substring(0,2);
      this.customHistogramModel = new CustomHistogram(estacion, variable, altura, tipo,tipo_criterio,temperatura,hora_inicio, hora_final, fecha_inicio, fecha_final);
      this._inputs.sendCustomHistogram((this.customHistogramModel));
    }
    if(criterio == 'Análisis por Mes'){
      this.mesHistogramModel = new MesHistogram(estacion, variable, altura, tipo,tipo_criterio,temperatura,mes);
      this._inputs.sendMesHistogram((this.mesHistogramModel));
    }
    if(criterio == 'Análisis en un año'){
      this.anioHistogramModel = new AnioHistogram(estacion, variable, altura,tipo,tipo_criterio,temperatura,anio);
      this._inputs.sendAnioHistogram((this.anioHistogramModel));
    }
    if(criterio == "Análisis por Años"){
      this.periodoHistogramModel = new PeriodoHistogram(estacion, variable, altura,tipo,tipo_criterio,temperatura);
      this._inputs.sendPeriodoHistogram((this.periodoHistogramModel));
    }

    this.modalService.open(AlertSuccessComponent);



    /* this._historicidadService.getData(value).subscribe(
      data => this.promedios = data);

    //console.log(this.promedios)
    */
   }


  //constructor(private _historicidadService: HistoricidadService, private router: Routes) { }


  tab: string;
  ngOnInit(): void {

    this.tab = "Histograma";

  }




}
