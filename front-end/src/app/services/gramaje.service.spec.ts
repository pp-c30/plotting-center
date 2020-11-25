import { TestBed } from '@angular/core/testing';

import { GramajeService } from './gramaje.service';

describe('GramajeService', () => {
  let service: GramajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GramajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
