import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginRequest } from 'src/app/model/UserLoginRequest';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  signUpForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as UserLoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
        },
        complete: () => {
          console.info("complete");
        }
      });
      this.router.navigateByUrl('/home');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  signUp() {
    if (this.signUpForm.valid) {
      console.log("PASO - products");
      this.router.navigateByUrl('/products');
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}