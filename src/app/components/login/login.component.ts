import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Auth, signOut } from '@angular/fire/auth';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,
    private auth: Auth
  ) { }

  ngOnInit(): void { }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;
    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authService.login(email, password).pipe(
      catchError((error) => {
        this.toast.error(`Login failed: ${error.message}`);
        throw error; // Re-throw the error to propagate it to the next error handler
      })
    ).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.loginForm.reset();

        // Clear the authentication state
        signOut(this.auth).catch((signOutError) => {
          console.error('Error occurred while signing out:', signOutError);
        });
      }
    );
  }
}
