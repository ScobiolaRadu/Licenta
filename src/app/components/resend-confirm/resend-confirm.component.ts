import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resend-confirm',
  templateUrl: './resend-confirm.component.html',
  styleUrls: ['./resend-confirm.component.css']
})
export class ResendConfirmComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  // resendEmail() {
  //   // Call the method to resend the confirmation email
  //   this.authService.resendConfirmationEmail().subscribe(() => {
  //     // Handle success, e.g., show a success message
  //     console.log('Confirmation email resent successfully.');
  //   });
  // }

  // goToHomePage() {
  //   this.router.navigate(['/home']);
  // }
}
