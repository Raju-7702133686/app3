import { Component } from '@angular/core';
import { Comman1Service } from '../comman1.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component {


  add(){
    this.comman1Service.setValue();
  }

  constructor(private comman1Service: Comman1Service){}
}
