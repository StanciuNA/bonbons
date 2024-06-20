import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(12)]),
  });

  constructor(private auth : LoginService){}

  @ViewChild('myInput') myInput: any;
  email_valide = true;
  valid = true;
  email_error = "We'll never share your email with anyone else. I swer man";
  ErrorStyle = "color: #e31920";
  EmailStyle = "";
  PasswordStyle = "";
  
  submitLogin(){
    if(!this.loginForm.controls.email.valid){
      this.EmailStyle = "border: 1px solid #e31920";
      this.valid = false;
    }

    else{
      this.EmailStyle = "";
    }

    if (!this.loginForm.controls.password.valid){
      this.PasswordStyle = "border: 1px solid #e31920";
      this.valid = false;
    }

    if (this.valid){
      const email = this.loginForm.controls.email.value || ""
      const password = this.loginForm.controls.password.value || ""
      this.auth.login(email,password).subscribe(response=>{
        console.log(response);
      })
    }
  }
  
  checkEmail(){

    
  }

  checkPassword(){

  }

  getAuthUser(){

  }
}
