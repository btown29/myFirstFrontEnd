
import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
Chart.register(...registerables);

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
 // @Input() labels: any [];
  @Input() data: any;
  @Input() title: any;


  chart: Chart;
  etiquetas: any;
  maximos: any;
  minimos: any;
  promedios: any;

  datos: any[];






  //labels: any = [];



  constructor(public activeModal: NgbActiveModal) {




  }









 ngOnInit(){



 }



}

