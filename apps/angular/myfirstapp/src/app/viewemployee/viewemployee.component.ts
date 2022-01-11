import { Component, OnInit } from '@angular/core';
import { postService } from '../service/post.service';
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
 findEmployee:any; 
  post: any;
  message: any;  
  employees: any;
  tempEmployees :any;
  data: any;
  result:any;
  empId: any;
  constructor(private postService: postService) { }

  ngOnInit(): void {
    this.postService.getEmployees().subscribe((data): any => {
      if (data.status === 200) {
        this.employees = data.result;
        this.tempEmployees = data.result;
        console.log(this.employees);
      }
      else {
        console.log(data);
      }
    });
  }
 find(){
   console.log("find");
     for(let employee of this.employees){
       if(employee.employeeId == this.empId){
         this.employees = [];
         this.employees.push(employee);
       }
     }   
 }
 changeEmpId(){
   if(this.empId ==="")
   this.employees = this.tempEmployees;
 }
}



