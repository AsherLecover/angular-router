import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  ajaxGet(url:string):Observable<any>{
    return this.http.get(url)
  }
}
