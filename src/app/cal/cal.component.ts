import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent {

  public ap:number=0;
  public bp:number=0;

  public cp:number=0;

  catch(value:any){
    this.cp=value;

  }

}
