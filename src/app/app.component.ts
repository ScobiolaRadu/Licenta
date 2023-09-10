import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Triolingo';

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private translate: TranslateService,
    private storageService: StorageService
  ) {
    authService.currentUser$.subscribe((user) => {
      if (user) {
        // User is authenticated, retrieve native language
        storageService
          .getUserNativeLanguageByEmail(user.email || '')
          .subscribe((nativeLanguage) => {
            translate.setDefaultLang(nativeLanguage || 'en');
            translate.use(nativeLanguage || 'en');
          });
      } else {
        console.log('User not authenticated.');
      }
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }

  settings() {
    this.router.navigate(['settings']);
  }
}
