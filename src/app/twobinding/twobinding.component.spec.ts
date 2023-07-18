import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobindingComponent } from './twobinding.component';

describe('TwobindingComponent', () => {
  let component: TwobindingComponent;
  let fixture: ComponentFixture<TwobindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwobindingComponent]
    });
    fixture = TestBed.createComponent(TwobindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
