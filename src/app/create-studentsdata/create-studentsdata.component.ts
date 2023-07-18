import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-studentsdata',
  templateUrl: './create-studentsdata.component.html',
  styleUrls: ['./create-studentsdata.component.scss']
})
export class CreateStudentsdataComponent {


  public studentsForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    fee: new FormControl()
  });

  submit(){
    console.log(this.studentsForm);
  }

}
