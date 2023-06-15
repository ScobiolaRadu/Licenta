import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LessonComponent } from './components/lesson/lesson.component';
import { TestComponent } from './components/test/test.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ResendConfirmComponent } from './components/resend-confirm/resend-confirm.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'lesson/Animals',
    component: LessonComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'lesson/Colors',
    component: LessonComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'lesson/Numbers',
    component: LessonComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'lesson/People',
    component: LessonComponent,
    ...canActivate(redirectToLogin)
  },

  {
    path: 'test',
    component: TestComponent,
    ...canActivate(redirectToLogin)
  },

  {
    path: 'password-reset',
    component: PasswordResetComponent,
    ...canActivate(redirectToHome)
  },

  {
    path: 'resend-confirm',
    component: ResendConfirmComponent,
    ...canActivate(redirectToHome)
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
