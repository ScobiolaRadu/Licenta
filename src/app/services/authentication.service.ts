import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  UserInfo,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { authState } from 'rxfire/auth';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { switchMap } from 'rxjs';
import { sendEmailVerification } from '@angular/fire/auth';
import { User, UserCredential } from 'firebase/auth';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth, private router: Router) {}

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password)).pipe(
      switchMap((userCredential: UserCredential) => {
        const user: User = userCredential.user;
        if (user.emailVerified) {
          return of(user);
        } else {
          throw new Error('Please verify your email address to log in.');
        }
      })
    );
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      switchMap((userCredential: UserCredential) => {
        const user: User = userCredential.user;
        return of(user);
      }),
      tap(() => {
        this.router.navigate(['/home']);
      })
    );
  }

  forgotPassword(email: string) {
    return from(sendPasswordResetEmail(this.auth, email));
  }

  signUp(name: string, email: string, password: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(({ user }) => {
        return from(updateProfile(user, { displayName: name })).pipe(
          switchMap(() => sendEmailVerification(user)),
          tap(() => {
            this.logout();
            this.router.navigate(['/login']);
          })
        );
      })
    );
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable<any>{
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
          if(!user) throw new Error('Not Authenticated');

          return updateProfile(user, profileData);
      }))
  }

  logout() {
    return from(this.auth.signOut());
  }
}
