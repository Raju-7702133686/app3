import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcitivityComponent } from './acitivity.component';

describe('AcitivityComponent', () => {
  let component: AcitivityComponent;
  let fixture: ComponentFixture<AcitivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcitivityComponent]
    });
    fixture = TestBed.createComponent(AcitivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
