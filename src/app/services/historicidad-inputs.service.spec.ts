import { TestBed } from '@angular/core/testing';

import { HistoricidadInputsService } from './historicidad-inputs.service';

describe('HistoricidadInputsService', () => {
  let service: HistoricidadInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricidadInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
