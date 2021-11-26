import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeBean } from '../bean/EmloyeeBean';

@Injectable({
  providedIn: 'root'
})

export class postService {
  /*properties declaration are here*/
  baseUrl: string = "http://localhost:6010/employees/";
  /**constructor declartions are here */
  constructor(private http: HttpClient) { }
  /*methods declarations are here */
  getEmployees(): Observable<Response> {
      return this.http.get<Response>(this.baseUrl);
  }
  createEmployee(employee: EmployeeBean): Observable<Response> {
      const body = JSON.stringify(employee);
      console.log(body)
      return this.http.post<Response>(this.baseUrl, body);
  }
}
