import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html'
    //styleUrls: ['./employee.component.css']
   
})

export class EmployeeComponent implements OnInit {
    constructor(){

    }
    ngOnInit(): void{

    }
    employeeId: number = 101;
    firstName: string = 'dileep';
    lastName: string = 'mummidi';
    emailId: string = 'dileep@gmail.com';
  
    getFullName() {
      return this.firstName + '' + this.lastName;
    }
    
    
}