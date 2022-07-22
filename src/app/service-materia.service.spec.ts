import { TestBed } from '@angular/core/testing';

import { ServiceMateriaService } from './service-materia.service';

describe('ServiceMateriaService', () => {
  let service: ServiceMateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
