import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const credentials = { username, password };

    return this.http.post(`${this.apiUrl}/login`, credentials)
  }
}
