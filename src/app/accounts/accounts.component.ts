import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {

  public Accounts: any = [];
  public term:string="";

  constructor(private accountsService: AccountsService) {

    this.accountsService.getAccounts().subscribe(
      (data: any) => {
        this.Accounts = data;
      },
      (error: any) => {
        alert("Internal error");
      }
    )

  }


}
