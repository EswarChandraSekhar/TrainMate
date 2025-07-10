import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { LostForm } from './lost-form/lost-form';
import { FoundForm } from './found-form/found-form';
import { AboutUs } from './about-us/about-us';
import { Reactions } from './reactions/reactions';
import { LostList } from './lost-list/lost-list';
import { HttpClientModule } from '@angular/common/http';
import { SubmissionProgress } from './submission-progress/submission-progress';
import { FoundFormSubmission } from './found-form-submission/found-form-submission';
import { Login } from './login/login';
import { Loader } from './loader/loader';
import { EditLostDialog } from './edit-lost-dialog/edit-lost-dialog';
import { Register } from './register/register';
import { FoundList } from './found-list/found-list';
import { EditFoundDialog } from './edit-found-dialog/edit-found-dialog';
import { FoundPipePipe } from './found-pipe-pipe';


@NgModule({
  declarations: [
    App,
    Home,
    LostForm,
    FoundForm,
    AboutUs,
    Reactions,
    LostList,
    SubmissionProgress,
    FoundFormSubmission,
    Login,
    Loader,
    EditLostDialog,
    Register,
    FoundList,
    EditFoundDialog,
    FoundPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
