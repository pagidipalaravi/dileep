import { Component, OnInit } from "@angular/core";
import { postService } from "../service/post.service";

@Component({selector:'CreateDepartment',
 templateUrl: '/CreateDepartment.component.html',

})
export class CreateDepartment implements OnInit{
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
      this.postService.getEmployeesByDept().subscribe((data): any => {
        if (data.status === 200) {
          this.employees = data.result;
         // this.tempEmployees = data.result;
          console.log(this.employees);
        }
        else {
          console.log(data);
        }
      });
    }
}