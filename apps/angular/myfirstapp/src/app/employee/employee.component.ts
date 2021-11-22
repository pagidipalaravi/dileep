import { Component, OnInit } from "@angular/core";
import { Validators,FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
   styleUrls: ['./employee.component.css']
   
})

export class EmployeeComponent implements OnInit {
    myForm: FormGroup | any;
    submitted = false;
    constructor(private formBuilder: FormBuilder) {}
    ngOnInit() {
      this.myForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, Validators.minLength(6), Validators.maxLength(20)]
        ]
      });
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
        'New user successfully registered \n' + JSON.stringify(this.myForm.value)
      );
    } 
    
    
}