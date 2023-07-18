import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-acitivity',
  templateUrl: './acitivity.component.html',
  styleUrls: ['./acitivity.component.scss']
})
export class AcitivityComponent {

  public Activities:any={};


  constructor(private activityService: ActivityService){

    this.activityService.getActivities().subscribe(
      (data:any)=>{
        this.Activities=data;
      },
      (error:any)=>{
        alert("Internal error");
      }

    )

  }
  reload(){
    this.activityService.getActivities().subscribe(
      (data:any)=>{
        this.Activities=data;
      },
      (error:any)=>{
        alert("Internal error");
      }

    )


  }

}
