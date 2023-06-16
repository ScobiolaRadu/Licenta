import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Triolingo';

  constructor(public authService: AuthenticationService, private router: Router)
  {

  }

  logout()
  {
    this.authService.logout().subscribe(()=>{
        this.router.navigate(['']);
    });
  }

  settings()
  {
    this.router.navigate(['settings']);
  }
} 
    
