import { Component } from '@angular/core';
import { HomeworkService } from '../homework.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent {

  public students:any=[];
  public term:any=[];

  public column:any=[];
  public order:any=[];

  public limit:any=[];
  public page:any=[];
  

  constructor(private homeworkService: HomeworkService){
    this.homeworkService.getstudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (error:any)=>{
        alert("Internal error");
      }
    )
  }
  getfilterstudents(){
    this.homeworkService.getfilterstudents(this.term).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (error:any)=>{
        alert("Internal error");
      }
    )
  }

  getsortedstudents(){
    this.homeworkService.getsortedstudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (error:any)=>{
        alert("Internal error");
      }
    )

  }

  getpaginationtudents(){
    this.homeworkService.getpaginationtudents(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (error:any)=>{
        alert("Internal error");
      }
    )

  }

  deletestudents(id:any){
    this.homeworkService.deletestudents(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (error:any)=>{
        alert("internal error");
      }
    )

  }
 
}

