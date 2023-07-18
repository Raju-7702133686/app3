import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor(private httpClent: HttpClient) { }

  getstudents():Observable<any>{
    return this.httpClent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  getfilterstudents(term:any):Observable<any>{
    return this.httpClent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }

  getsortedstudents(column:any,order:any):Observable<any>{
    return this.httpClent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
  }

  getpaginationtudents(limit:any,page:any):Observable<any>{
    return this.httpClent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
  }

  deletestudents(id:any){
    return this.httpClent.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }
}
