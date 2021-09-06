import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
Chart.register(...registerables);


@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit, AfterViewInit{

  @ViewChild('canvas') canvas: ElementRef;
 // @Input() labels: any [];
  @Input() data: any;
  @Input() title: any;


  chart: Chart;
  etiquetas: any;
  heladas: any;
  dato: any;


  //labels: any = [];



  constructor(public activeModal: NgbActiveModal) {
  }

  titulo(data:any){
    var nombres = Object.keys(data);
    return nombres[1].toUpperCase();;

}

 Heladas(data:any){

    var Datos = [];
    var nombres = Object.keys(data);
    for (const [key, value] of Object.entries(data)) {
        if(nombres[1] == key){
            var str = value+"";
            Datos = str.split(",");
        }
    }

    console.log(Datos);
    return Datos;
}

labels(data:any){

    var Datos = [];
    var nombres = Object.keys(data);
    for (const [key, value] of Object.entries(data)) {
        if(nombres[0] == key){
            var str = value+"";
            Datos = str.split(",");
        }
    }

    console.log(Datos);
    return Datos;
}

 ngOnInit(){

  console.log("GraficoAntes", this.data);

 }

ngAfterViewInit(){


  console.log("GraficoDespues", this.data);
  this.etiquetas = this.labels(this.data);
  // Podemos tener varios conjuntos de datos

  this.heladas = {
    label: this.titulo(this.data),
    data: this.Heladas(this.data), //
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

  this.dato = {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: this.etiquetas,
        datasets: [
            this.heladas,
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                scaleLabel: {
                    display: true,
                    labelString: Object.keys(this.data)[1].toUpperCase(),
                    fontColor: "black"
                },
            },

            x: {
                scaleLabel: {
                    display: true,
                    labelString: Object.keys(this.data)[0].toUpperCase(),
                    fontColor: "black"
                },
            }
        },
    }
};






  this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), this.dato);

}


}
