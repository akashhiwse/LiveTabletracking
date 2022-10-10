import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url="http://localhost:9999/registeruser"

  constructor(private httpclient:HttpClient) { }

  registerUser(register:Register) : Observable<object>{
    
    console.log(register);
    return this.httpclient.post(`${this.url}`, register);
  }
}
