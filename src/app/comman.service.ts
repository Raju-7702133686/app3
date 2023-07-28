import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {


  public count: number=0;
  public countsub: BehaviorSubject <any>= new BehaviorSubject(0);

  setValue(){
    this.countsub.next(this.count++);
  }

  getValue(){
    return this.countsub.asObservable();
  }
  constructor() { }
}
