import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string = `${environment.apiURL}/employee`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  getEmployeeList() {
    return this.httpClient.get(this.url);
  }

  getEmployeeListByFilter(filter: any) {
    return this.httpClient.post(`${this.url}/filter`, filter);
  }

  getEmployeeById(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  createEmployee(employee: any) {
    return this.httpClient.post(this.url, employee);
  }

  updateEmployee(employee: any) {
    return this.httpClient.put(this.url, employee);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
