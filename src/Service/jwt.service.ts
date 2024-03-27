import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private jwt_url = 'http://localhost:48190/api/Account';

  constructor(private myclient: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.myclient.post<any>(this.jwt_url+'/login', credentials);
  }

  
  
// //////////////////////////////////////////////////
 
  register(userDetails: any): Observable<any> {
    return this.myclient.post<any>(this.jwt_url + '/register', userDetails);
  }
// //////////


}
