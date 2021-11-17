import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { customer } from 'src/shared/Model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiURL = "https://localhost:44359/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
    ) 
    { }
    getAll(): Observable<customer[]> {
      return this.httpClient.get<customer[]>(this.apiURL + 'customers') 
      .pipe( 
        catchError<customer[],Observable<customer[]>>(error => {
          console.log('Caught in CatchError. Returning 0')
          throw new Error(error)
        }) 
      )  
    }
    create(post:customer): Observable<customer> {
      return this.httpClient.post(this.apiURL + 'customers', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError<any,never>(error=>{
          console.log("Error at customer post")
          throw new Error(error)
        }) 
      )
    }
}
