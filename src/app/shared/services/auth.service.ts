import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = `${environment.apiURL}/auth/login`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user: any) {
    return this.httpClient.post<any>(this.url, user).pipe(
      tap((token) => {
        if (token.token) this.setToken(token.token);
      })
    );
  }

  logout() {
    this.clearToken();
    this.router.navigate(['/auth']);
  }

  clearToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  decodeToken() {
    const token = localStorage.getItem('token');

    const decodedToken: any = token ? jwtDecode(token) : null;
    return decodedToken;
  }

  isAuthenticated() {
    const expiration = this.decodeToken()?.exp;

    if (!expiration) return false;

    const expirationDate = new Date(expiration * 1000);

    if (expirationDate < new Date()) {
      this.clearToken();
      return false;
    }
    return true;
  }
}
