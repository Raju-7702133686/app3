import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExampleComponent } from './create-example.component';

describe('CreateExampleComponent', () => {
  let component: CreateExampleComponent;
  let fixture: ComponentFixture<CreateExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateExampleComponent]
    });
    fixture = TestBed.createComponent(CreateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
