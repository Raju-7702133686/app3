import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  public productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    color: new FormControl(),
    features: new FormGroup({
      ram: new FormControl(),
      battery: new FormControl(),
      processor: new FormControl()
    })
  });

  submit(){
    console.log(this.productForm);
  }

}
