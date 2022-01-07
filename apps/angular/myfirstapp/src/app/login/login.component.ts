import { Component, OnInit } from "@angular/core";
import { Validators,FormGroup, FormBuilder, NgForm } from "@angular/forms";
import { LoginserverService } from "../loginserver.service";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
   
})

export class loginComponent implements OnInit {
  
  registerForm: FormGroup | any;
  submitted = false;
  public show:boolean = false;
    public buttonName:any = 'Show';
  loginForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private loginserverService: LoginserverService,
    ) { }

  ngOnInit() {
      {
        this.loginForm = this.fb.group({
          email: ['',[Validators.required, Validators.email]],
          password: ['', [Validators.required,Validators.pattern(new RegExp("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/"))]],
        });
      }
    this.registerForm = this.fb.group ({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      username: ['', [Validators.required], this.loginserverService.userNameValidator.bind(this.loginserverService)],
      password: ['', Validators.compose([Validators.required, this.loginserverService.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
      
    },
      {
        validator: this.loginserverService.MatchPassword('password', 'confirmPassword'),
  });
  }

  get registerFormControl() {
    return this.registerForm.controls;
    
  }


  onSubmit() {
   // console.log(form);
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
    // if(this.loginForm.valid){
    //   alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    //   console.table(this.registerForm.value);
    // }
  }
  
  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}