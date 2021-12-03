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
  
  today: any = new Date();
  currentUTCDate = new Date().getUTCFullYear() + "-" + (new Date().getUTCMonth() + 1) + "-" + new Date().getUTCDate();
  myForm: FormGroup | any;
    submitted = false;
  departmentService: any;
  departments: any;
  postService: any;
  employees:any;
  error: boolean | undefined;
  message: any;
    constructor(private formBuilder: FormBuilder) {
    }
    ngOnInit(): void {
      this.myForm = this.formBuilder.group({
        employeeId: ['',[Validators.required, Validators.pattern(new RegExp("[0-9]{3}"))]],
        firstName: ['',[Validators.required, Validators.pattern(new RegExp("[a-z]"))]],
        lastName: ['',[Validators.required, Validators.pattern(new RegExp("[a-z]"))]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['',[Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]],
        salary: ['',[Validators.required, Validators.pattern(new RegExp("[0-9]{6}"))]],
        curDate: [this.currentUTCDate,[Validators.required]],
        commisionPct: ['',[ Validators.pattern(new RegExp("[0-9]{2}"))]]
       
    })
    console.log(this.currentUTCDate);
  }    
  get formControls() {
    return this.myForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    console.log(this.myForm.value);
    alert(
      'Employee detailes successfully shown\n' + JSON.stringify(this.myForm.value)
    );
  } 
  onSubnmit() {
    postService.createEmployee(EmployeeBean).subscribe((data: any) => {
      if (data.status === 200) {
        this.error = false;  
        this.message = data.message;
      }
      else {
        console.log(data);
      }
    });
  }
}


