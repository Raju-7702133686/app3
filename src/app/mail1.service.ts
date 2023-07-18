import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Mail1Service {

  constructor(private httpClient: HttpClient) { }

  getmessages():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }
}
