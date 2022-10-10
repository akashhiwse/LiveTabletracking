import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

private baseurl="http://localhost:9999/login";

  constructor(private httpClient:HttpClient) { }

  loginUser(user : User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseurl}`,user);
  }
}
