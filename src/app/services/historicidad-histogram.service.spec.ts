import { TestBed } from '@angular/core/testing';

import { HistoricidadHistogramService } from './historicidad-histogram.service';

describe('HistoricidadHistogramService', () => {
  let service: HistoricidadHistogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricidadHistogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
