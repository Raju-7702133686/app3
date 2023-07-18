import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBankaccountsComponent } from './create-bankaccounts.component';

describe('CreateBankaccountsComponent', () => {
  let component: CreateBankaccountsComponent;
  let fixture: ComponentFixture<CreateBankaccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBankaccountsComponent]
    });
    fixture = TestBed.createComponent(CreateBankaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
