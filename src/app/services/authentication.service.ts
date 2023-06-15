import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { from } from 'rxjs';
import { authState } from 'rxfire/auth';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { switchMap } from 'rxjs';
import { sendEmailVerification } from '@angular/fire/auth';
import { User, UserCredential } from 'firebase/auth';
import { Observable, of, timer } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth, private router: Router) { }

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password)).pipe(
      switchMap((userCredential: UserCredential) => {
        const user: User = userCredential.user;
        if (user.emailVerified) {
          return of(user);
        } else {
          if (user && user.metadata && user.metadata.creationTime && +user.metadata.creationTime + 60< Date.now()) {
            this.router.navigate(['/resend-confirm']);
          }
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

  private waitForEmailVerification(user: User): Observable<User> {
    return this.currentUser$.pipe(
      filter((currentUser: User | null): currentUser is User => currentUser !== null),
      switchMap((currentUser: User) => {
        if (currentUser.emailVerified) {
          return of(currentUser);
        } else {
          return timer(1000).pipe(switchMap(() => this.waitForEmailVerification(user)));
        }
      })
    );
  }

  signUp(name: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
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

  resendConfirmationEmail() {
    return this.currentUser$.pipe(
      filter((user: User | null): user is User => user !== null),
      switchMap((user: User) => {
        return from(sendEmailVerification(user));
      })
    );
  }

  logout() {
    return from(this.auth.signOut());
  }
}