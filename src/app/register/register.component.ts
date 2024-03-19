import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../../Service/registration.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,
    HttpClientModule

  ],
  providers:[RegistrationService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private data:RegistrationService){}
  myform=new FormGroup({
  name:new FormControl("",[Validators.required,
    Validators.pattern(/^[A-Za-z]+(?:[ \-'][A-Za-z]+)*$/)]),

    username: new FormControl("", [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._-]{3,20}$')]
  
  ),
  email:new FormControl("",[Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
  ]),
  phone: new FormControl("", [
    Validators.required,
    Validators.pattern(/^\+(?:[0-9] ?){6,14}[0-9]$/)
  ]),

       password: new FormControl("", [
        Validators.required,
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*()-_=+{};:,<.>?[\\]\\\\/]{8,20}$')
      ]),

  
})
get namevalied(){
   return this.myform.controls["name"].valid ; 
}
get username(){
  return this.myform.controls["username"].valid ; 
}
get email(){
  return this.myform.controls["email"].valid ; 
}
get password(){
  return this.myform.controls["password"].valid ; 
}
get phone(){ 
  return this.myform.controls["phone"].valid ;
}
addnewuser(){ 
  
}
}
