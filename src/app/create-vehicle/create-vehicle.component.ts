import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {

  public vehicleForm: FormGroup = new FormGroup(
    {
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  }
  );

  constructor(private vehicleService: VehicleService){}

  submit(){
    console.log(this.vehicleForm);

  this.vehicleService.createvechile(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("vehicle created successfully");
    },
    (error:any)=>{
      alert("vehicle creation failed");
    }
  )

  }

}