import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankaccountsService {

  constructor(private httpClient: HttpClient) { }

  getaccounts():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }

  getfilteraccounts(term:any):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  getsortedaccounts(column:any,order:any):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }

  getpaginationaccounts(limit:any,page:any):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
  }

  createaccounts(data:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
  }

  deleteaccounts(id:any):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
}
