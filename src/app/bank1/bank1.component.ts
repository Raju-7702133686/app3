import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank1',
  templateUrl: './bank1.component.html',
  styleUrls: ['./bank1.component.scss']
})
export class Bank1Component {

  public accounts:any=[];

  constructor(private bankService: BankService){
    this.bankService.getaccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (error:any)=>{
        alert("Internal error");
      }

    )
  }

}
