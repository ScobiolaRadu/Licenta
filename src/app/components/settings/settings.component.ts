import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable, concatMap, map, take } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';
import { StorageService } from 'src/app/services/storageservice.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  user$ = this.authService.currentUser$;
  newNativeLanguage: string = '';
  newLanguageToLearn: string = '';
  photoURL: string = '';
  selectedFile: File | null = null;
  points: number = 0;

  profileForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    photoURL: new FormControl(''),
    points: new FormControl(''),
  });

  constructor(
    private authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private storageService: StorageService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.storageService
      .getUserPointsByEmail(this.authService.getCurrentUser()?.email || '')
      .subscribe((points) => {
        this.points = points || 0;
      });
    this.storageService
      .getUserNativeLanguageByEmail(
        this.authService.getCurrentUser()?.email || ''
      )
      .subscribe((nativeLanguage) => {
        switch (nativeLanguage) {
          case 'en':
            this.newNativeLanguage = 'English';
            break;
          case 'fr':
            this.newNativeLanguage = 'French';
            break;
          case 'ro':
            this.newNativeLanguage = 'Romanian';
            break;
        }
      });

    this.storageService
      .getUserLanguageToLearnByEmail(
        this.authService.getCurrentUser()?.email || ''
      )
      .subscribe((languageToLearn) => {
        switch (languageToLearn) {
          case 'en':
            this.newLanguageToLearn = 'English';
            break;
          case 'fr':
            this.newLanguageToLearn = 'French';
            break;
          case 'ro':
            this.newLanguageToLearn = 'Romanian';
            break;
        }
      });
  }

  selectImage(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUploadButtonClick() {
    this.user$.pipe(take(1)).subscribe((user) => {
      if (user) this.uploadImage(user);
    });
  }

  uploadImage(user: User) {
    if (user && this.selectedFile) {
      const imagePath = `images/profile/${user.uid}/${this.selectedFile.name}`;
      this.imageUploadService
        .uploadImage(this.selectedFile, imagePath)
        .pipe(
          this.toast.observe({
            loading: 'Uploading image...',
            success: 'Image uploaded successfully.',
            error: 'Failed to upload image.',
          }),
          concatMap((photoURL) =>
            this.authService.updateProfileData({ photoURL })
          )
        )
        .subscribe(() => {
          this.photoURL = this.photoURL; // Update the photoURL property
          console.log('Profile image URL updated successfully.');
        });
    }
  }

  changePassword() {
    const user = this.authService.getCurrentUser();

    if (user) {
      const email = user.email;

      if (email) {
        this.authService.forgotPassword(email).subscribe(
          () => {
            console.log('Reset password email sent successfully.');
          },
          (error) => {
            console.error('Failed to send reset password email:', error);
          }
        );
      } else {
        console.error('Email is null.');
      }
    } else {
      console.error('User not authenticated.');
    }
  }

  changeNativeLanguage() {
    const languageMap: { [key: string]: string } = {
      English: 'en',
      French: 'fr',
      Romanian: 'ro',
    };

    const selectedLanguageCode = languageMap[this.newNativeLanguage];
    if (selectedLanguageCode) {
      this.translationService.changeLanguage(selectedLanguageCode);
    } else {
      console.error('Invalid language selection');
    }

    this.storageService.updateUserNativeLanguageByEmail(
      this.authService.getCurrentUser()?.email || '',
      languageMap[this.newNativeLanguage]
    );
  }

  changeLanguageToLearn() {
    const languageMap: { [key: string]: string } = {
      English: 'en',
      French: 'fr',
      Romanian: 'ro',
    };

    const selectedLanguageCode = languageMap[this.newLanguageToLearn];

    this.storageService.updateUserLanguageToLearnByEmail(
      this.authService.getCurrentUser()?.email || '',
      languageMap[this.newLanguageToLearn]
    );
  }
}
