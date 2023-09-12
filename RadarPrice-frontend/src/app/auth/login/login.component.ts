import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserLoginRequest } from 'src/app/model/UserLoginRequest';
import { UserRegister } from 'src/app/model/UserRegister';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  signUpForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    userName: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private cookieService: CookieService) {

  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as UserLoginRequest).subscribe({
        next: (loginData) => {
          this.cookieService.set('token', loginData.token);
        },
        error: (errorData) => {
          console.error(errorData);
        },
        complete: () => {
          console.info("complete");
          this.router.navigateByUrl('/home');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  signUp() {
    if (this.signUpForm.valid) {
      this.loginService.signUp(this.signUpForm.value as UserRegister).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
        },
        complete: () => {
          console.info("complete");
          this.router.navigateByUrl('/home');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}