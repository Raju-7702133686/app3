import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flipcart1Component } from './flipcart1.component';

describe('Flipcart1Component', () => {
  let component: Flipcart1Component;
  let fixture: ComponentFixture<Flipcart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Flipcart1Component]
    });
    fixture = TestBed.createComponent(Flipcart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
