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
  static createEmployee: any;
  /**constructor declartions are here */
  constructor(private http: HttpClient) { }
  /*methods declarations are here */
  getEmployees(): Observable<any> {
      return this.http.get<any>(this.baseUrl);
  }
  createEmployee(employee: EmployeeBean): Observable<Response> {
      const body = JSON.stringify(employee);
      console.log(body)
      return this.http.post<Response>(this.baseUrl, body);
  }
  getEmployeesByDept():Observable<any>{
    return this.http.get<any>("http://localhost:6010/employees/getEmployeeByDepartmentId/60")
  }

}
