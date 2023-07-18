import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
public products:any =[
  {name:'pen',price:10,rating:3,freedelivery:true},
  {name:'phone',price:100,rating:2,freedelivery:false},
  {name:'shirt',price:400,rating:4,freedelivery:true},
  {name:'cap',price:200,rating:5,freedelivery:false},
  {name:'mobile case',price:200,rating:2,freedelivery:true},
  {name:'Remote',price:400,rating:2.5,freedelivery:false},
]
public term:number=0;

search(){
  this.products=this.products.filter((product:any)=>product.name.includes(this.term));
}
free(){
  this.products=this.products.filter((product:any)=>product.freedelivery==true);
}
low(){
  this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
}
high(){
  this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
}
low1(){
  this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);
}
high1(){
  this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);
}
discount(){
  this.products=this.products.map((product:any)=>{
    product.price=product.price/2;
    return product;
  });
}
delivery(){
  this.products=this.products.map((product:any)=>{
    if(product.freedelivery==false){
      product.price=product.price+30;
  }
    else{
      return product;
    }
  });
}
delete(i:any){
  this.products.splice(i,1);
}
}