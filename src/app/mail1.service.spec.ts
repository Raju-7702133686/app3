import { TestBed } from '@angular/core/testing';

import { Mail1Service } from './mail1.service';

describe('Mail1Service', () => {
  let service: Mail1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mail1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
