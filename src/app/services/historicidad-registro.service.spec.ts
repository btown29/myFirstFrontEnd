import { TestBed } from '@angular/core/testing';

import { HistoricidadRegistroService } from './historicidad-registro.service';

describe('HistoricidadRegistroService', () => {
  let service: HistoricidadRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricidadRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
