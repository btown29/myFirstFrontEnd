import { Component, OnInit } from '@angular/core';
import { HistoricidadService } from 'src/app/services/historicidad.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {



  constructor(private _historidadService: HistoricidadService) { }


  cargarTabla(value:any){



  }
  ngOnInit(){

    this._historidadService.getHistoricidad().subscribe(
      data=>
      {

        console.log('funciona')

      }

    )



  }


}
