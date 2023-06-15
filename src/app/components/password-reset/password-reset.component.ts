import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  resetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    private authService: AuthenticationService,
    private toast: HotToastService
  ) { }

  ngOnInit(): void { }

  get email() {
    return this.resetForm.get('email');
  }

  submit() {
    const email = this.resetForm.value.email;
    if (email) {
      this.authService.forgotPassword(email).subscribe(
        () => {
          this.toast.success('Password reset email sent. Please check your inbox.');
          this.resetForm.reset();
        },
        (error) => {
          this.toast.error(`Failed to send password reset email: ${error.message}`);
        }
      );
    }
  }
}
