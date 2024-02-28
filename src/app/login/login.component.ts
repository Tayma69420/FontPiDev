import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { StorageService } from "../services/storage.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private storageService: StorageService, private router: Router) { }
  isLoggedIn = false;
  roles: string[] = [];
  form: any = {
    username: null,
    password: null
  };
  test = true;
  isLoginFailed = false;
  errorMessage = '';
  password: any;
  showForgotPassword = false;
  forgotPasswordEmail = '';

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;

    }
  }
  showForgotPasswordForm(): void {
    this.showForgotPassword = true;
  }
  resetPassword(email: string): void {
    this.userService.resetPassword(email).subscribe({
      next: data => {
        // Handle successful reset password response
        console.log('Password reset email sent successfully');
      },
      error: err => {
        // Handle error
        console.error('Error sending reset password email', err);
      }
    });
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.userService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.userService.handleLoginResponse(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  onClick(): void {
    this.test = !this.test;
  }


}
