import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent {

  public memes:any=[];

  constructor(private memesService: MemesService){
    this.memesService.getmemes().subscribe(
      (data:any)=>{
        this.memes=data.data.memes;
      },
      (errror:any)=>{
        alert("Internal error");
      }

      
    )
  }
  

}
