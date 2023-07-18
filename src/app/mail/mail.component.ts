import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {

  public messages:any=[];

  constructor(private mailService: MailService){

    this.mailService.getmessages().subscribe(
      (data:any)=>{
        this.messages=data;
      },
      (error:any)=>{
        alert("internal error");
      }

    )
  }

}
