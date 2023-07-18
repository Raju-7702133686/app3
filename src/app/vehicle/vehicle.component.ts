import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  public vehicles: any = [];
  public term: string = "";

  public column:any="";
  public order:any="";

  public limit:any="";
  public page:any="";

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (error: any) => {
        alert("Internal server error");

      }
    )
  }

  getfilterVehicles(){
  this.vehicleService.getfilterVehicles(this.term).subscribe(
    (data: any) => {
      this.vehicles = data;
    },
    (error: any) => {
      alert("Internal server error");

    }
  )

}
getsortedVehicles(){
this.vehicleService.getsortedVehicles(this.column,this.order).subscribe(
  (data: any) => {
    this.vehicles = data;
  },
  (error: any) => {
    alert("Internal server error");

  }
)
}

getpaginationVehicles(){
  this.vehicleService.getpaginationVehicles(this.limit,this.page).subscribe(
    (data: any) => {
      this.vehicles = data;
    },
    (error: any) => {
      alert("Internal server error");
  
    }
  )
  }

  deleteVehicles(id:any){
    this.vehicleService.deleteVehicles(id).subscribe(
      (data: any) => {
        alert("Deleted succesfully");
        location.reload();
      },
      (error: any) => {
        alert("Internal server error");
    
      }
    )
    }

}
