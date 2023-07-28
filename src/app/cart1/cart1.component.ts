import { Component } from '@angular/core';
import { Comman1Service } from '../comman1.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.scss']
})
export class Cart1Component {

  public cartCount:number=0;
  constructor(private comman1Service: Comman1Service){
    comman1Service.getValue().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }
}


