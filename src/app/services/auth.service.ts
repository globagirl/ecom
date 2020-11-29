import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginUserAPI = 'http://127.0.0.1:8088/api/v1/auth/login'; //URL POSTman
  public registerUserAPI = 'http://127.0.0.1:8088/api/v1/auth/register'; //URL POSTman
  

  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(this.loginUserAPI, user);
  }

  registerUser(user) {
    return this.http.post<any>(this.registerUserAPI, user);
  }

  isLogedIn() {
    let token = localStorage.getItem('mytoken');

    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
