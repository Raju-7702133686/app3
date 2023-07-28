import { TestBed } from '@angular/core/testing';

import { Comman1Service } from './comman1.service';

describe('Comman1Service', () => {
  let service: Comman1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comman1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
