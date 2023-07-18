import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Flipcart1Service {

  constructor(private httpClient: HttpClient) { }

  getproducts():Observable<any>{
    return this.httpClient.get("https://fakestoreapi.com/products");
  }
}
