import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { LostForm } from './lost-form/lost-form';
import { FoundForm } from './found-form/found-form';
import { AboutUs } from './about-us/about-us';
import { Reactions } from './reactions/reactions';
import { LostList } from './lost-list/lost-list';
import { SubmissionProgress } from './submission-progress/submission-progress';
import { FoundFormSubmission } from './found-form-submission/found-form-submission';
import { Login } from './login/login';

const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'lost-form',
    component: LostForm
  },
  {
    path: 'found-form',
    component: FoundForm
  },
  {
    path: 'about-us',
    component: AboutUs
  },
  {
    path: 'reactions',
    component: Reactions
  },
  {
    path: 'lost-list',
    component: LostList
  },
  {
    path: 'submission-progress',
    component: SubmissionProgress
  },
  {
    path: 'found-form-submission',
    component: FoundFormSubmission
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
