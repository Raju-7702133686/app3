import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularComponent } from './rectangular.component';

describe('RectangularComponent', () => {
  let component: RectangularComponent;
  let fixture: ComponentFixture<RectangularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectangularComponent]
    });
    fixture = TestBed.createComponent(RectangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
