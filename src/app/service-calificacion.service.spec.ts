import { TestBed } from '@angular/core/testing';

import { ServiceCalificacionService } from './service-calificacion.service';

describe('ServiceCalificacionService', () => {
  let service: ServiceCalificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCalificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
