import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-create-bankaccounts',
  templateUrl: './create-bankaccounts.component.html',
  styleUrls: ['./create-bankaccounts.component.scss']
})
export class CreateBankaccountsComponent {

  public accountsForm: FormGroup= new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl()
  }

  );

  constructor(private bankaccountsService: BankaccountsService){}

  submit(){
    console.log(this.accountsForm);

    this.bankaccountsService.createaccounts(this.accountsForm.value).subscribe(
      (data:any)=>{
        alert("Account crated successfully");
      },
      (error:any)=>{
        alert("Account creation failed");
      }
    )


  }

}
