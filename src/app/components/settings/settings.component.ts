import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { concatMap, take } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { HotToastService } from '@ngneat/hot-toast';

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

  constructor(
    private authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService
  ) {}

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
    console.log('New native language:', this.newNativeLanguage);
  }

  changeLanguageToLearn() {
    console.log('New language to learn:', this.newLanguageToLearn);
  }
}
