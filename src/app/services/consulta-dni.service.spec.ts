import { TestBed } from '@angular/core/testing';

import { ConsultaDNIService } from './consulta-dni.service';

describe('ConsultaDNIService', () => {
  let service: ConsultaDNIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaDNIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
