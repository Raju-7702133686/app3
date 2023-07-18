import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirectories',
  templateUrl: './structuraldirectories.component.html',
  styleUrls: ['./structuraldirectories.component.scss']
})
export class StructuraldirectoriesComponent {
  public names:string[] = ['raju','gracy','chinni'];
  public states:string[] =["andra prades","telangana","tamilanadu","karnataka","keral","maharastra"]
  public products:any =[
    {name:"pen",price:20},
    {name:"mobile",price:10000},
    {name:"watch",price:5000}
  ]
  public users:any = [
    {name:'a',phone:'7702133686',class:'10',marks:'100'},
    {name:'b',phone:'7702133686',class:'8',marks:'80'},
    {name:'c',phone:'7702133686',class:'9',marks:'90'}

  ]
  public num:number=0;
  

}
