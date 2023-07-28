import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cal1Component } from './cal1.component';

describe('Cal1Component', () => {
  let component: Cal1Component;
  let fixture: ComponentFixture<Cal1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cal1Component]
    });
    fixture = TestBed.createComponent(Cal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
