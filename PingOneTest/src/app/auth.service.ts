import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:5115/api/account/login';
  private logoutUrl = 'http://localhost:5115/api/account/logout';

  constructor(private http: HttpClient) { }

  login() {
    window.location.href = this.loginUrl;
  }

  logout() {
    window.location.href = this.logoutUrl;
  }
}