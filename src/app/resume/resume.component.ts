import { Component } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public details:any=[];

  constructor(private resumeService: ResumeService){
    this.resumeService.getdetails().subscribe(
      (data:any)=>{
        this.details=data;
      },
      (error:any)=>{
        alert("Internal error");
      }
      
    )
  }

}
