import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { ListExamsComponent } from './list-exams/list-exams.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { HistoryComponent } from './history/history.component';
import { InformationTaskComponent } from './information-task/information-task.component';
import { CreateQuestionComponent } from './create-question/create-question.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path: 'basic',
      loadChildren: './components/basic/basic.module#BasicModule'
    }, {
      path: 'advance',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    }, {
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    }, {
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    }, {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    }, {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    },
    {
      path: 'register',
      component:RegisterComponent
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
      path: 'exams/:id',
      component:StartExamComponent
    },
    {
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
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
    
  ]
}, 


{
  path: '**',
  redirectTo: 'error/404'
}];
