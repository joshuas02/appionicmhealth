import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Idthree } from '../models/idthree';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  // API path
  base_path = 'http://a19fea82.ngrok.io/api/desicion';
  
 
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
 
 
  // Create a new item
  // createItem(item): Observable<Idthree> {
  //   return this.http
  //     .post<Idthree>(this.base_path, JSON.stringify(item), this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
      
  // }
  createItem(item): Observable<Idthree> {
    return this.http
      .post<Idthree>(this.base_path, JSON.parse(JSON.stringify(item)), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
      
  }

  // createItem(item): Observable<Idthree> {
  //   return this.http
  //     .post<Idthree>(this.base_path, JSON.parse(JSON.stringify(item)), this.httpOptions)
  //     .subscribe(data => {
  //         console.log(data);
  //     })
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
      
  // }

  getItem(item): Observable<Idthree> {
    return this.http
      .get<Idthree>(this.base_path + '/' + item)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}