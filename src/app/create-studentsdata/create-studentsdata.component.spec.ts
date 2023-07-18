import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentsdataComponent } from './create-studentsdata.component';

describe('CreateStudentsdataComponent', () => {
  let component: CreateStudentsdataComponent;
  let fixture: ComponentFixture<CreateStudentsdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStudentsdataComponent]
    });
    fixture = TestBed.createComponent(CreateStudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
