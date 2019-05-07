import { Routes } from '@angular/router';
import {NgModule} from '@angular/core';

import { WithSocialComponent } from './login/with-social/with-social.component';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component:WithSocialComponent,
        data: {
          breadcrumb: 'Login'
        }
      },{
        path: 'register',
        component:WithSocialComponent,
        data: {
          breadcrumb: 'Login'
        }
      },
      
    ]
  }
];
