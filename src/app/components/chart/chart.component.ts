import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
Chart.register(...registerables);


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit{

  @ViewChild('canvas') canvas: ElementRef;
 // @Input() labels: any [];
  @Input() data: any;
  @Input() title: any;


  chart: Chart;
  etiquetas: any;
  maximos: any;
  minimos: any;
  promedios: any;
  dato: any;


  //labels: any = [];



  constructor(public activeModal: NgbActiveModal) {
  }



labels(data:any){

    var Datos = [];
    var b = [];
    var cantidad = (data.fecha).length;
    var i = 0;
    while(i != cantidad){
        b = data.fecha[i];
        Datos.push(b);
        i++;
    }
    console.log(Datos.length);

    return Datos;
}

Maximo(data:any){

    var Datos = [];
    var b = [];
    var cantidad = (data.maximos).length;
    var i = 0;
    while(i != cantidad){
        b = data.maximos[i];
        Datos.push(b);
        i++;
    }

    return Datos;
}

Minimo(data: any){

    var Datos = [];
    var b = [];
    var cantidad = (data.minimos).length;
    var i = 0;
    while(i != cantidad){
        b = data.minimos[i];
        Datos.push(b);
        i++;
    }

    return Datos;
}

Promedio(data: any){

    var Datos = [];
    var b = [];
    var cantidad = (data.promedios).length;
    var i = 0;
    while(i != cantidad){
        b = data.promedios[i];
        Datos.push(b);
        i++;
    }
    //Datos = [17.74444, 18.9, 17.0, 14.2, 18.8, 17.3, 19.8, 18.1];
    return Datos;
}








 ngOnInit(){

  console.log("GraficoAntes", this.data);

 }

ngAfterViewInit(){


  console.log("GraficoDespues", this.data);
  this.etiquetas = this.labels(this.data);
  // Podemos tener varios conjuntos de datos

  this.maximos = {
    label: "Maximos",
    data: this.Maximo(this.data), // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'transparent',// Color de fondo
    borderColor: 'rgba(211,93,110, 1)',// Color del borde
    borderWidth: 2,// Ancho del borde
};
this.minimos = {
    label: "Minimos",
    data: this.Minimo(this.data), // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'transparent',// Color de fondo
    borderColor: 'rgba(209,234,163,1)',// Color del borde
    borderWidth: 2,// Ancho del borde
};
this.promedios = {
    label: "Promedios",
    data: this.Promedio(this.data), // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'transparent', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 2,// Ancho del borde
};

this.dato = {
  type: 'line',// Tipo de gráfica
  data: {
      labels: this.etiquetas,
      datasets: [
          this.maximos,
          this.minimos,
          this.promedios,
          // Aquí más datos...
      ]
  },
  options: {
      scales: {
          y: {
              beginAtZero: false,
              scaleLabel: {
                  display: true,
                  labelString: "TEMPERATURA"
            }
          },

          x: {
              scaleLabel: {
                  display: true,
                  labelString: "FECHA"

            }
          }
      }
  }
};




  this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), this.dato);

}


}
