import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-example',
  templateUrl: './create-example.component.html',
  styleUrls: ['./create-example.component.scss']
})
export class CreateExampleComponent {

  public exampleForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pin: new FormControl()

    }),
    type: new FormControl(),
    busfee: new FormControl(),
    hostelfee: new FormControl(),
    cards: new FormArray([])
  });

  get cardsFormArray(){
    return this.exampleForm.get('cards') as FormArray;

  }

  addcard(){
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        exp: new FormControl(),
        cvv: new FormControl()
      }),
    )
  }

  submit(){
    console.log(this.exampleForm);
  }

}
