import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { LessonComponent } from './components/lesson/lesson.component';
import { TestComponent } from './components/test/test.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LessonlistComponent } from './components/lessonlist/lessonlist.component';
import { TestlistComponent } from './components/testlist/testlist.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'settings',
    component: SettingsComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lessons',
    component: LessonlistComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'tests',
    component: TestlistComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'tests/begginer',
    component: TestComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'tests/intermediate',
    component: TestComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'tests/advanced',
    component: TestComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Greetings',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Numbers',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/People',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Common Phrases',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Foods and Drinks',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Simple Present Tense',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Shopping and Money',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Grammar Rules',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Expanded Vocabulary',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Intermediate Verb Tenses',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Conditional Sentences',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Advanced Vocabulary',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Complex Grammar',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'lesson/Advanced Verb Forms',
    component: LessonComponent,
    ...canActivate(redirectToLogin),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
