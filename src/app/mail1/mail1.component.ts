import { Component } from '@angular/core';
import { Mail1Service } from '../mail1.service';

@Component({
  selector: 'app-mail1',
  templateUrl: './mail1.component.html',
  styleUrls: ['./mail1.component.scss']
})
export class Mail1Component {

  public messages:any=[];

  constructor(private mail1Service: Mail1Service){
    this.mail1Service.getmessages().subscribe(
      (data:any)=>{
        this.mail1Service=data;
      },
      (error:any)=>{
        alert("internal error");
      }
    )
  }

  

}
