import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void { }

  isLoggin() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.loginService.logout().subscribe({
      next: () => {
        console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
      },
      error: (errorData) => {
        console.error(errorData);
      },
      complete: () => {
        console.info("complete");
        this.router.navigateByUrl('/home');
      }
    });
  }
}
