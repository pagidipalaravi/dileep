import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  myForm: FormGroup | any;
    submitted = false;
    constructor(private formBuilder: FormBuilder) {}
    ngOnInit() {
      this.myForm = this.formBuilder.group({
        employeeId: ['',[Validators.required, Validators.pattern(new RegExp("[0-9]{4}"))]],
        firstName: ['',[Validators.required, Validators.pattern(new RegExp("[a-z]"))]],
        lastName: ['',[Validators.required, Validators.pattern(new RegExp("[a-z]"))]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['',[Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]],
        salary: ['',[Validators.required, Validators.pattern(new RegExp("[0-9]{6}"))]]
    })
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
 
  
}
   