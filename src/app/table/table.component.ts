import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public products:any =[
    {name:'Pen',price:10,rating:3,freedelivery:true},
    {name:'Phone',price:100,rating:2,freedelivery:false},
    {name:'Shirt',price:400,rating:4,freedelivery:true},
    {name:'Cap',price:200,rating:5,freedelivery:false},
    {name:'Mobile case',price:300,rating:2,freedelivery:true},
    {name:'Remote',price:400,rating:2.5,freedelivery:false}

  ];

  public term:number =0;
  search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term));
  }
  free(){
    this.products=this.products.filter((product:any)=>product.freedelivery==true);
  }
  sort(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  high(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  rate(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  rating(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price/2;
      return product;
    });
  }
  price(){
    var total=this.products.reduce((sum:any,a:any)=>sum+a.price,0);
    alert( total );
  }
  charges(){
    this.products=this.products.map((product:any)=>{
      if(product.freedelivery==false){
        product.price=product.price+20;
        return product;
      }
      else{
        return product;
      }
    });
  }

  cart(){
      alert(this.products.length);
  }
  delete(i:any){
    this.products.splice(i,1);
  }



}

