import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  registrationForm: any;
  constructor(){

  }
  ngOnInit(): void {
   
    this.registrationForm = new FormGroup({
      "lastName": new FormControl(null),

    })
  }
  submitData(){
    console.log(this.registrationForm.value);
  }

  
}
   