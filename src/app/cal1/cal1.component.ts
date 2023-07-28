import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cal1',
  templateUrl: './cal1.component.html',
  styleUrls: ['./cal1.component.scss']
})
export class Cal1Component {

  @Input() public ac:number=0;
  @Input() public bc:number=0;

  @Output() public bEvent:EventEmitter<any>= new EventEmitter();

  sum(){
    this.bEvent.emit(this.ac+this.bc);
  }
  sub(){
    this.bEvent.emit(this.ac-this.bc);

  }
  mul(){
    this.bEvent.emit(this.ac*this.bc);
  }


}
