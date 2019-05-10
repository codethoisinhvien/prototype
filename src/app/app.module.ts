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
import { ProfileComponent} from './profile/profile.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { ListExamsComponent } from './list-exams/list-exams.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { HistoryComponent } from './history/history.component';
import { InformationTaskComponent } from './information-task/information-task.component';
import { CreatExamComponent } from './creat-exam/creat-exam.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionComponent } from './question/question.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { NotificationComponent } from './notification/notification.component';
import { AuthGuardService } from './service/auth-guard.service';
import { LoginServiceService } from './service/login-service.service';
import { ShareServiceService } from './service/share-service.service';
import { AdminServiceService } from './service/admin-service.service';
import { ExamService } from './service/exam.service';
import { UserService } from './service/user.service';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
  
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
    ListUserComponent,
    ListRoleComponent,
    NotificationComponent,
    FooterComponent,
    DetailComponent
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    ScrollModule,

  ],
  exports: [ScrollModule],
  providers: [
      { provide: LocationStrategy, useClass: PathLocationStrategy },
      AuthGuardService,
      LoginServiceService,
      ShareServiceService,
      AdminServiceService,
      ExamService,
      UserService,
      
  ],
  bootstrap: [AppComponent],
  entryComponents:[CreatExamComponent,QuestionComponent,ListQuestionComponent,NotificationComponent, DetailComponent]
})
export class AppModule {}
