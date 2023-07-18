import { Component } from '@angular/core';
import { __setFunctionName } from 'tslib';

@Component({
  selector: 'app-attributes-directives',
  templateUrl: './attributes-directives.component.html',
  styleUrls: ['./attributes-directives.component.scss']
})
export class AttributesDirectivesComponent {

public term:string=""

  public students:any =[
    {name:'saipogu Raju',science:90,math:100},
    {name:'saipogu Vijay',science:10,math:15},
    {name:'Prasad',science:80,math:50},
    {name:'murali',science:20,math:20},
    {name:'Rajesh',science:40,math:49},
    {name:'Ram',science:22,math:49}
  ]
  public today:any = new Date();

  search(){
    this.students=this.students.filter((student:any)=>student.name.includes(this.term));
  }
  add(){
    this.students=this.students.map((student:any)=>{
      student.science=student.science+2;
      return student;
    });
  }
  sort(){
    this.students=this.students.sort((a:any,b:any)=>b.science-a.science);
  }
  total(){
    var total=this.students.reduce((sum:any,a:any)=>sum+a.science,0)
    alert( total );
  }



  }


