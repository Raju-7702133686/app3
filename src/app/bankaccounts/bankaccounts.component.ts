import { Component } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.scss']
})
export class BankaccountsComponent {

  public bankaccounts: any = [];
  public term:string="";

  public column:any="";
  public order:any="";

  public limit:any="";
  public page:any="";

  constructor(private bankaccountServie: BankaccountsService) {

    this.bankaccountServie.getaccounts().subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (error: any) => {
        alert("Internal sever error");
      }
    )

  }
  getfilteraccounts() {
    this.bankaccountServie.getfilteraccounts(this.term).subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (error: any) => {
        alert("Internal sever error");
      }
    )
  }

  getsortedaccounts(){
    this.bankaccountServie.getsortedaccounts(this.column,this.order).subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (error: any) => {
        alert("Internal sever error");
      }
    )
  }

  getpaginationaccounts(){
    this.bankaccountServie.getpaginationaccounts(this.limit,this.page).subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (error: any) => {
        alert("Internal sever error");
      }
    )
  }
  deleteaccounts(id:any) {
    this.bankaccountServie.deleteaccounts(id).subscribe(
      (data: any) => {
      alert("Deleted successfully");
      location.reload();
      },
      (error: any) => {
        alert("Internal sever error");
      }
    )
  }

}
