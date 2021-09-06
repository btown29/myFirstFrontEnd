import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Custom} from 'src/app/classes/custom';
import { Mes} from 'src/app/classes/mes';
import { Periodo} from 'src/app/classes/periodo';
import { PeriodoHistogram } from 'src/app/classes/periodo-histogram';
import { AnioHistogram } from 'src/app/classes/anio-histogram';
import { MesHistogram } from 'src/app/classes/mes-histogram';
import { CustomHistogram } from 'src/app/classes/custom-histogram';
import { HistoricidadInputsService } from 'src/app/services/historicidad-inputs.service';
import { HistoricidadHistogramService } from 'src/app/services/historicidad-histogram.service';
import { CustomRegistro } from 'src/app/classes/custom-registro';
import { HistoricidadService } from 'src/app/services/historicidad.service';
import { Subscription} from 'rxjs';
import { HistoricidadRegistroService } from 'src/app/services/historicidad-registro.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from 'src/app/components/chart/chart.component';
import { ChartTableComponent} from 'src/app/components/chart-table/chart-table.component';
import { ChartBarComponent} from 'src/app/components/chart-bar/chart-bar.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertComponent} from 'src/app/components/alert/alert.component';


declare var $: any;
declare var lat: number;
declare var lon: number;
declare var zoom: number;
declare const icon: any;
//declare var custom: PromedioCustom;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  //providers:[HistoricidadInputsService]
})
export class MapComponent implements OnInit {


  //@ViewChild('content') content: any;

  endpoints = '#';



  customSerie = new Custom('Andacollo [Collowara]', 'temperatura_del_suelo', '-0.1m', '05:00', '11:00', '2019-10-01', '2019-11-01' );
  customMes = new Mes('Andacollo [Collowara]', 'temperatura_del_suelo', '-0.1m', '5' );
  customPeriodo = new Periodo('Andacollo [Collowara]', 'temperatura_del_suelo', '-0.1m');
  customHistogram =new CustomHistogram('Andacollo [Collowara]', 'temperatura_del_cielo', '-0.1m','val_min','heladas','0', '05:00', '11:00', '2019-10-01', '2019-11-01' );
  customMesHistogram = new MesHistogram('Andacollo [Collowara]', 'temperatura_del_cielo', '-0.1m','val_min','heladas','0', '5' );
  customAnioHistogram = new AnioHistogram('Andacollo [Collowara]', 'temperatura_del_cielo', '-0.1m','val_min','heladas','0', '2015');
  customPeriodoHistogram = new PeriodoHistogram('Andacollo [Collowara]','temperatura_del_cielo', '-0.1m','val_min','heladas','0');
  customRegistro =  new CustomRegistro('Andacollo [Collowara]', 'temperatura_del_cielo', '-0.1m', 'val_min','10','0','05:00', '11:00', '2019-10-01', '2019-11-01' );

  // RESULTADOS

  promedioCustom: any;
  cuentasCustom:any;
  datos: any;
  modalRef: any;
  tabSeleccionado: string;
  criterioSeleccionado: string;
  tipoCriterioSeleccionado: string;





  private getSubscription: Subscription;

  //let icons: google.maps.Icon();
  lat: -30.0314094;
  lon: -70.7315968;
  zoom: 8;
  url: string='./assets/img/ceazamet.jpeg';
  title: string='Punta de Choros';
  icon = {
    url:this.url, scaledSize: new google.maps.Size(30,30)
  };
  mylocations = [
    { title:'Algarrobal', lat: -29.9988307, lng:-70.587333},
    { title:'Andacollo [Collowara]', lat: -30.248749, lng: -71.065259},
    { title:'Coquimbo [El Panul]', lat: -29.998736, lng: -71.39852},
    { title:'El Jote', lat: -30.405266, lng: -70.279483},
    { title:'El Tapado', lat: -30.1583, lng: -69.908179},
    { title:'Estero Derecho', lat: -30.38407, lng: -70.412858},
    { title:'Gabriela Mistral', lat: -29.97852, lng: -71.080386},
    { title:'La Laguna [Elqui]', lat: -30.203112, lng: -70.037224},
    { title:'La Serena [CEAZA]', lat: -29.915015, lng: -71.242214},
    { title:'La Serena [Cerro Grande]', lat: -29.938475, lng: -71.223505},
    { title:'La Serena [El Romeral]', lat: -29.754064, lng: -71.257442},
    { title:'Las Cardas', lat: -30.251452, lng: -71.256903},
    { title:'Llano de Las Liebres', lat: -30.257406, lng: -69.936986},
    { title:'Llanos de Huanta', lat: -29.827418, lng: -70.354471},
    { title:'Los Corrales', lat: -30.161408, lng: -69.875994},
    { title:'Pan de Azucar', lat: -30.074646, lng: -71.238945},
    { title:'Paso Agua Negra', lat: -30.190704, lng: -69.82553},
    { title:'Pisco Elqui', lat: -30.129028, lng: -70.494712},
    { title:'Punta Colorada', lat: -29.3541129, lng: -71.0328595},
    { title:'Punta de Choros', lat: -29.24724, lng: -71.467969},
    { title:'Rivadavia', lat: -29.96173, lng: -70.539081},
    { title:'UCN Guayacan', lat: -29.96663, lng: -71.352844},
    { title:'Vicuna', lat: -30.038318, lng: -70.696553}];

    /*
    setValue(){

      this.custom.variable = this._inputs.getCustom()[0];
      this.custom.altura = this._inputs.getCustom()[1];
      this.custom.fecha_inicio = this._inputs.getCustom()[2];
      this.custom.fecha_final = this._inputs.getCustom()[3];
      this.custom.hora_inicio = this._inputs.getCustom()[4];
      this.custom.hora_final = this._inputs.getCustom()[5];
     // console.log(this.custom);

    }
    */

    labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Naranjo']

    clickedMarker(label: string) {
      //Aparece el grafico;

      console.log("Criterio Seleccionado",this.criterioSeleccionado);
      console.log("Tab Seleccionado",this.tabSeleccionado);
      console.log("TipoCriterioSeleccionad", this.tipoCriterioSeleccionado);

      if(this.tabSeleccionado!= "Serie" && this.tabSeleccionado!= "Histograma" && this.tabSeleccionado!= "Registro"){


      }
      else{

        this.customSerie.estacion =label;
        this.customMes.estacion=label;
        this.customPeriodo.estacion=label;
        this.customHistogram.estacion =label;
        this.customMesHistogram.estacion=label;
        this.customAnioHistogram.estacion=label;
        this.customPeriodoHistogram.estacion=label;
        this.customRegistro.estacion=label;

              // ENDPOINT 1

          // this.customSerie.estacion = label

        if(this.tabSeleccionado == "Serie" && this.criterioSeleccionado == "Customize"){
          this._historicidadService.get_promedio_custom(this.customSerie).subscribe(
          data4=>
          {

            this.promedioCustom = data4;
            if(Object.keys(this.promedioCustom).length > 0){
              console.log("Resultado",this.promedioCustom);
              this.modalRef = this.modalService.open(ChartComponent, { size: 'xl' });
              this.modalRef.componentInstance.data = data4;
              this.modalRef.componentInstance.title = label;
            }
            else{
              this.modalRef = this.modalService.open(AlertComponent);
              this.modalRef.componentInstance.title = label;
              this.modalRef.componentInstance.info = true;
            }
          }
        );
        }




            // ENDPOINT 2
      // this.customMes.estacion = label
      if(this.tabSeleccionado == "Serie" && this.criterioSeleccionado == "Análisis por Mes"){
      this._historicidadService.get_promedios_mes_anios(this.customMes).subscribe(
        data4=>
        {
          this.promedioCustom = data4;
          if(Object.keys(this.promedioCustom).length > 0){
            console.log("Resultado",this.promedioCustom);
            this.modalRef = this.modalService.open(ChartComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;
          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }

        }

      );
      }


            // ENDPOINT 4
      // this.customPeriodo.estacion = label
      if(this.tabSeleccionado == "Serie" && this.criterioSeleccionado == "Análisis por Años"){
      this._historicidadService.get_promedio_anios(this.customPeriodo).subscribe(
        data4=>
        {
          this.promedioCustom = data4;
          if(Object.keys(this.promedioCustom).length > 0){
            console.log("Resultado",this.promedioCustom);
            this.modalRef = this.modalService.open(ChartComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;
          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }

        }

      );
      }


            // ENDPOINT 5
      // this.customSerie = label
      //this._inputs2.llamarSpinner();
      //this.customPeriodoHistogram.altura='323232';
      if(this.tabSeleccionado == "Histograma" && this.tipoCriterioSeleccionado == "Heladas" && this.criterioSeleccionado == "Análisis por Años"){
      this._historicidadService.get_heladas_anios(this.customPeriodoHistogram).subscribe(
        data4=>
        {
          //this._inputs2.detenerSpinner();
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);
            this.modalRef = this.modalService.open(ChartBarComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;

          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;

          }

        }

      );

      }



            // ENDPOINT 6
      // this.customSerie = label
      if(this.tabSeleccionado == "Histograma" && this.tipoCriterioSeleccionado == "Heladas" && this.criterioSeleccionado == "Análisis por Mes"){
      this._historicidadService.get_heladas_mes_anios(this.customMesHistogram).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);
            this.modalRef = this.modalService.open(ChartBarComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;
          }

          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }
        }

      );

      }

            // ENDPOINT 7
      // this.customSerie = label
      if(this.tabSeleccionado == "Histograma" && this.tipoCriterioSeleccionado == "Heladas" && this.criterioSeleccionado == "Análisis en un año"){
      this._historicidadService.get_heladas_meses_anio(this.customAnioHistogram).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);
            this.modalRef = this.modalService.open(ChartBarComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;

          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }

        }

      );
      }

            // ENDPOINT 8
      // this.customSerie = label
      if(this.tabSeleccionado == "Histograma" && this.tipoCriterioSeleccionado == "Heladas"  && this.criterioSeleccionado == "Customize"){
      this._historicidadService.get_heladas_custom(this.customHistogram).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);
            this.modalRef = this.modalService.open(ChartBarComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;

          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }

        }

      );

      }



                  // ENDPOINT 9
      // this.customSerie = label
      if(this.tabSeleccionado == "Histograma" && this.tipoCriterioSeleccionado == "Máximas" && this.criterioSeleccionado == "Análisis por Años"){
      this._historicidadService.get_maximas_anios(this.customPeriodoHistogram).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);
            this.modalRef = this.modalService.open(ChartBarComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;

          }

        }

      );
      }
            // ENDPOINT 10
      // this.customSerie = label
      if(this.tabSeleccionado == "Histograma" && this.tipoCriterioSeleccionado == "Máximas" && this.criterioSeleccionado == "Análisis por Mes"){
      this._historicidadService.get_maximas_mes_anios(this.customMesHistogram).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);
            this.modalRef = this.modalService.open(ChartBarComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;

          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }

        }

      );
      }
            // ENDPOINT 11
      // this.customSerie = label
      if(this.tabSeleccionado == "Histograma" && this.tipoCriterioSeleccionado == "Máximas" && this.criterioSeleccionado == "Análisis en un año"){
      this._historicidadService.get_maximas_meses_anio(this.customAnioHistogram).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);
            this.modalRef = this.modalService.open(ChartBarComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;

          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }

        }

      );
      }
            // ENDPOINT 8
      // this.customSerie = label
      if(this.tabSeleccionado == "Histograma" && this.tipoCriterioSeleccionado == "Máximas" && this.criterioSeleccionado == "Customize"){
      this._historicidadService.get_maximas_custom(this.customHistogram).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);
            this.modalRef = this.modalService.open(ChartBarComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = data4;
            this.modalRef.componentInstance.title = label;

          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }

        }

      );
      }


            // ENDPOINT 13
      // this.customSerie = label
      if(this.tabSeleccionado == "Registro" && this.tipoCriterioSeleccionado == "Heladas"){
      this._historicidadService.get_busqueda_heladas(this.customRegistro).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);

            var objetos= [];

            for(let i = 0; i < this.cuentasCustom.fecha.length;i++){
              var object = {};
              object['fecha'] = this.cuentasCustom.fecha[i];
              object['registro'] = this.cuentasCustom.valor[i];

              objetos.push(object);
            }

            this.modalRef = this.modalService.open(ChartTableComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = objetos;
            this.modalRef.componentInstance.title = label;


          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }
        }

      );
      }

            // ENDPOINT 14
      // this.customSerie = label
      if(this.tabSeleccionado == "Registro" && this.tipoCriterioSeleccionado == "Máximas"){
      this._historicidadService.get_busqueda_maximas(this.customRegistro).subscribe(
        data4=>
        {
          this.cuentasCustom = data4;
          console.log(this.cuentasCustom)
          if(Object.keys(this.cuentasCustom).length > 0){
            console.log("typeof Funciona",this.cuentasCustom);

            var objetos= [];

            for(let i = 0; i < this.cuentasCustom.fecha.length;i++){
              var object = {};
              object['fecha'] = this.cuentasCustom.fecha[i];
              object['registro'] = this.cuentasCustom.valor[i];

              objetos.push(object);
              console.log("largo",this.cuentasCustom.fecha.length);
            }

            this.modalRef = this.modalService.open(ChartTableComponent, { size: 'xl' });
            this.modalRef.componentInstance.data = objetos;
            this.modalRef.componentInstance.title = label;


          }
          else{
            this.modalRef = this.modalService.open(AlertComponent);
            this.modalRef.componentInstance.title = label;
            this.modalRef.componentInstance.info = true;
          }


        }


      );

      }



    }


  }

constructor(private spinnerService: NgxSpinnerService, private modalService: NgbModal, private _historicidadService: HistoricidadService, private _inputs: HistoricidadInputsService, private _inputs2: HistoricidadHistogramService, private _inputs3: HistoricidadRegistroService){


}
//constructor(){}



ngOnInit(){


  this._inputs.receiveCustom().subscribe(data =>{
    this.customSerie = data;
    console.log("Ingresando", this.customSerie);
  }
  );

  this._inputs.receiveMes().subscribe(data =>{
    this.customMes = data;
    console.log("Ingresando", this.customMes);
  }
  );

  this._inputs.receivePeriodo().subscribe(data =>{
    this.customPeriodo = data;
    console.log("Ingresando", this.customPeriodo);
  }
  );

  this._inputs2.receiveCustomHistogram().subscribe(data2 =>{
    this.customHistogram = data2;
    console.log("Ingresando", this.customHistogram);
  }
  );

  this._inputs2.receiveMesHistogram().subscribe(data2 =>{
    this.customMesHistogram = data2;
    console.log("Ingresando", this.customMesHistogram);
  }
  );

  this._inputs2.receiveAnioHistogram().subscribe(data2 =>{
    this.customAnioHistogram = data2;
    console.log("Ingresando", this.customAnioHistogram);
  }
  );

  this._inputs2.receivePeriodoHistogram().subscribe(data2 =>{
    this.customPeriodoHistogram = data2;
    console.log("Ingresando", this.customPeriodoHistogram);
  }
  );

  this._inputs3.receiveCustomRegistro().subscribe(data3 =>{
    this.customRegistro = data3;
    console.log("Ingresando", this.customRegistro);
  }
  );

// Criterios de búsqueda

  this._inputs.receiveTab().subscribe(data5 =>{
    this.tabSeleccionado = data5;
    console.log("Ingresando sidebar", this.tabSeleccionado);
  }
  );

  this._inputs2.receiveTab().subscribe(data5 =>{
    this.tabSeleccionado = data5;
    console.log("Ingresando histo", this.tabSeleccionado);
  }
  );

  this._inputs3.receiveTab().subscribe(data5 =>{
    this.tabSeleccionado = data5;
    console.log("Ingresando registr", this.tabSeleccionado);
  }
  );

  this._inputs.receiveCriterio().subscribe(data6 =>{
    this.criterioSeleccionado = data6;
    console.log("Ingresando", this.criterioSeleccionado);
  }
  );



  this._inputs2.receiveCriterio().subscribe(data6 =>{
    this.criterioSeleccionado = data6;
    console.log("Ingresando", this.criterioSeleccionado);
  }
  );

  this._inputs3.receiveCriterio().subscribe(data6 =>{
    this.tipoCriterioSeleccionado = data6;
    console.log("Ingresando", this.tipoCriterioSeleccionado);
  }
  );

  this._inputs2.receiveTipoCriterio().subscribe(data7 =>{
    this.tipoCriterioSeleccionado = data7;
    console.log("Ingresando", this.tipoCriterioSeleccionado);
  }
  );

}
}
