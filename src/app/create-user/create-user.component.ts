import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength (3),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      pin: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(666666),])
    }),
    type: new FormControl('',Validators.required,),
    busfee: new FormControl(),
    hostelfee: new FormControl(),
    cards: new FormArray([])
  });

  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;

  }

  addcard() {
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl('',Validators.required),
        exp: new FormControl(),
        cvv: new FormControl()

      })
    )
  }

  deletecard(i: number) {
    this.cardsFormArray.removeAt(i);
  }

  submit() {
    console.log(this.userForm);
  }

}
