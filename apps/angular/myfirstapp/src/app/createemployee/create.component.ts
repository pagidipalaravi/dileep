import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder,Validators} from '@angular/forms';
import { EmployeeBean } from '../bean/EmloyeeBean';
import { postService } from '../service/post.service';
@Component({
  selector: 'app-create', 
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class createComponent implements OnInit{
  EmployeeBean : any;
  postService: any;
  today: any = new Date();
  currentUTCDate = new Date().getUTCFullYear() + "-" + (new Date().getUTCMonth() + 1) + "-" + new Date().getUTCDate();
  myForm: FormGroup | any;
    submitted = false;
  departmentService: any;
  departments: any;

  employees:any;
  error: boolean | undefined;
  message: any;
    constructor(private formBuilder: FormBuilder) {
    }
    ngOnInit(): void {
      this.myForm = this.formBuilder.group({
        employeeId: ['',[Validators.required, Validators.pattern(new RegExp("[0-9]{3}"))]],
        firstName: ['',[Validators.required, Validators.pattern(new RegExp("^[a-z]{15}"))]],
        lastName: ['',[Validators.required, Validators.pattern(new RegExp("[a-z]"))]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['',[Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]],
        salary: ['',[Validators.required, Validators.pattern(new RegExp("[0-9]{6}"))]],
        curDate: [this.currentUTCDate,[Validators.required]],
        job:['',Validators.required],
        commisionPct: ['',[ Validators.pattern(new RegExp("[0-9]{2}"))]],
        manager: ['' ,[Validators.required]],
        department:['',[Validators.required]]
    })
    console.log(this.currentUTCDate);
  }    
  get formControls() {
    return this.myForm.controls;
  }
  // onSubmit() {
  //   this.submitted = true;
  //   if (this.myForm.invalid) {
  //     return;
  //   }
  //   console.log(this.myForm.value);
  //   alert(
  //     'Employee detailes successfully shown\n' + JSON.stringify(this.myForm.value)
  //   );
  // } 
  onSubmit() {
    this.submitted = true;
    this.EmployeeBean.firstName = this.myForm.value.createEmployeeData.firstName;
    this.EmployeeBean.lastName = this.myForm.value.createEmployeeData.lastName;
    this.EmployeeBean.email = this.myForm.value.createEmployeeData.email;
    this.EmployeeBean.phoneNumber = this.myForm.value.createEmployeeData.phoneNumber;
    this.EmployeeBean.hireDate = this.myForm.value.createEmployeeData.hireDate;
    this.EmployeeBean.salary = this.myForm.value.createEmployeeData.salary;
    this.EmployeeBean.jobId = this.myForm.value.createEmployeeData.job;
    this.EmployeeBean.managerId = this.myForm.value.createEmployeeData.manager;
    this.EmployeeBean.departmentId = this.myForm.value.createEmployeeData.department;
    this.postService.createEmployee(EmployeeBean).subscribe((data: any) => {
      if (data.status === 200) {
        this.error = false;  
        this.message = data.message
        alert(
             'Employee detailes successfully shown\n' + JSON.stringify(this.message)
            );
      }
    });
  }
}




