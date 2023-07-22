import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent {

  public id:any="";

  public vehicle:any ={};

  constructor(private activateRoute: ActivatedRoute, private vehicleService: VehicleService) {
    
    activateRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

        this.vehicleService.getVehicle(this.id).subscribe(
          (data:any)=>{
            this.vehicle=data;

          }
        )
      }

     
    )
   }

}
