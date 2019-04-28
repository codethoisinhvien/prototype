import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import {ScrollModule} from './scroll/scroll.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { ListExamsComponent } from './list-exams/list-exams.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { HistoryComponent } from './history/history.component';
import { InformationTaskComponent } from './information-task/information-task.component';
import { CreatExamComponent } from './creat-exam/creat-exam.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionComponent } from './question/question.component';
import { ListQuestionComponent } from './list-question/list-question.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
    RegisterComponent,
    ProfileComponent,
    ListSubjectComponent,
    ListExamsComponent,
    StartExamComponent,
    HistoryComponent,
    InformationTaskComponent,
    CreatExamComponent,
    CreateQuestionComponent,
    QuestionComponent,
    ListQuestionComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    ScrollModule
  ],
  exports: [ScrollModule],
  providers: [
      { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents:[CreatExamComponent,QuestionComponent,ListQuestionComponent]
})
export class AppModule {}
