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
import { Register } from './register/register';
import { FoundList } from './found-list/found-list';
import { AuthGuard } from './auth-guard';
import { AdminPanel } from './admin-panel/admin-panel';
import { UserPanel } from './user-panel/user-panel';
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
    path: 'admin-panel',
    component: AdminPanel
  },
  {
    path: 'user-panel',
    component: UserPanel
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
    component: LostList, 
    canActivate: [AuthGuard]
  },
  {
    path: 'found-list',
    component: FoundList,
    canActivate: [AuthGuard]
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
    path: 'register',
    component: Register
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
