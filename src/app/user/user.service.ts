import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { item } from 'src/shared/Model/item';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = "https://localhost:44359/api/";

  constructor(
    public httpClient:HttpClient
  ) { }
  getAll(): Observable<item[]> {
    return this.httpClient.get<item[]>(this.apiURL + 'items') 
    .pipe( 
      catchError<item[],Observable<item[]>>(this.errorHandler) 
    )  
  }
  errorHandler(error:any) {
    let errorMessage = ''; 
    if(error.error instanceof ErrorEvent) {  
      errorMessage = error.error.message; 
    } else {  
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; 
    } 
    return throwError(errorMessage);  
 }
}
