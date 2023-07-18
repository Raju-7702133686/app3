import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolutionComponent } from './interpolution.component';

describe('InterpolutionComponent', () => {
  let component: InterpolutionComponent;
  let fixture: ComponentFixture<InterpolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolutionComponent]
    });
    fixture = TestBed.createComponent(InterpolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
