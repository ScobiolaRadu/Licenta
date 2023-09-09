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

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  user$ = this.authService.currentUser$;
  newNativeLanguage: string = 'English';
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
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.storageService
      .getUserPointsByEmail(this.authService.getCurrentUser()?.email || '')
      .subscribe((points) => {
        this.points = points || 0;
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

  changeNativeLanguage() {}

  changeLanguageToLearn() {}
}
