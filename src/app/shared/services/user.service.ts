import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = `${environment.apiURL}/user`;

  constructor(private httpClient: HttpClient) {}

  createUserAndSendEmail(user: any) {
    return this.httpClient.post(this.url, user);
  }
}
