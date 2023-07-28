import { Component } from '@angular/core';
import { Comman1Service } from '../comman1.service';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.scss']
})
export class Nav1Component {
  public cartCount:number=0;

  constructor(private comman1Service: Comman1Service){

    comman1Service.getValue().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }
}


