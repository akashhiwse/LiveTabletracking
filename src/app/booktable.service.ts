import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BookTable } from './book-table';

@Injectable({
  providedIn: 'root'
})
export class BooktableService {

  url="http://localhost:9999/booktable"

  constructor(private httpclient:HttpClient) { }

  booktable(booktable:BookTable) : Observable<object>{
    
    console.log(booktable);
    return this.httpclient.post(`${this.url}`, booktable);
  }
}
