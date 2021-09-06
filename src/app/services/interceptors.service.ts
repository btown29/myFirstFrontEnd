import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { HistoricidadHistogramService } from './historicidad-histogram.service';
import { finalize} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor{

  constructor(private spinnerService:NgxSpinnerService, private input2:HistoricidadHistogramService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    this.input2.llamarSpinner();
   //console.log("funciona");
    return next.handle(req).pipe(
      finalize(()=> this.input2.detenerSpinner())


    );

  }
}
