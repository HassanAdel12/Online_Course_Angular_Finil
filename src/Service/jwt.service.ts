import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private jwt_url = 'http://localhost:48190/api/Account';

  constructor(private myclient: HttpClient) { }

  checkEmailExists(email: string): Observable<boolean> {
    return this.myclient.get<boolean>(`/api/Account/checkEmailExists?email=${email}`);
  }

  checkUsernameExists(username: string): Observable<boolean> {
    return this.myclient.get<boolean>(`/api/Account/checkUsernameExists?username=${username}`);
  }



////////////
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.myclient.post<any>(this.jwt_url+'/login', credentials);
  }

  
  
// //////////////////////////////////////////////////
 
  // register(userDetails: any): Observable<any> {
  //   return this.myclient.post<any>(this.jwt_url + '/register', userDetails);
  // }


  register(userDetails: any) {
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.myclient.post(this.jwt_url + '/register', userDetails, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errorMessage = 'An error occurred while processing your request';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status === 200 && error.error && error.error.message) {
      // Server returned a success response but not in valid JSON format
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


// //////////


}
