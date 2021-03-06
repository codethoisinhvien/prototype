import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';

import { ProfileComponent } from './profile/profile.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { ListExamsComponent } from './list-exams/list-exams.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { HistoryComponent } from './history/history.component';
import { InformationTaskComponent } from './information-task/information-task.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AuthGuardService } from './service/auth-guard.service';
import { LoginServiceService } from './service/login-service.service';
import { AdminServiceService } from './service/admin-service.service';
import { UserService } from './service/user.service';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  canActivateChild: [AuthGuardService],
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, 
    {
      path: 'profile',
      component:ProfileComponent
    },
    {
      path: 'topics',
      component:ListSubjectComponent
    },
    {
      path: 'topics/:id',
      component:ListExamsComponent
    },
    {
      canActivate:[UserService],
      path: 'exams/:id',
      component:StartExamComponent
    },
    {
      canActivate:[UserService],
      path: 'history',
      component:HistoryComponent
    },
    {
      path: 'history/:id',
      component:InformationTaskComponent
    },
    {
      path: 'mod/exams/:id',
      component:CreateQuestionComponent
    },
    {
      path: 'users',
      canActivate:[AdminServiceService],
      component:ListUserComponent
    },
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  canActivateChild:[LoginServiceService],
  children: [
    {
      path: '',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
    
  ]
}, 


{
  path: '**',
  redirectTo: 'error/404'
}];
