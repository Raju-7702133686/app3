import { Component } from '@angular/core';
import { Flipcart1Service } from '../flipcart1.service';

@Component({
  selector: 'app-flipcart1',
  templateUrl: './flipcart1.component.html',
  styleUrls: ['./flipcart1.component.scss']
})
export class Flipcart1Component {

  public products:any=[];

  constructor(private flipcart1Service: Flipcart1Service){
    this.flipcart1Service.getproducts().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (error:any)=>{
        alert("Internal error");
      }
    )
  }

}
