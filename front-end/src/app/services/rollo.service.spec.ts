import { TestBed } from '@angular/core/testing';

import { RolloService } from './rollo.service';

describe('RolloService', () => {
  let service: RolloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
