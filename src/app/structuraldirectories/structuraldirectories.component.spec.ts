import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldirectoriesComponent } from './structuraldirectories.component';

describe('StructuraldirectoriesComponent', () => {
  let component: StructuraldirectoriesComponent;
  let fixture: ComponentFixture<StructuraldirectoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructuraldirectoriesComponent]
    });
    fixture = TestBed.createComponent(StructuraldirectoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
