import { RouterModule,Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { ProductComponent } from './product/product.component';


import { ExamCreateComponent } from './exam/exam-create/exam-create.component';
import { NgModule } from '@angular/core';
 
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseViewComponent } from './course/course-view/course-view.component';
import { ExamResultComponent } from './exam/exam-result/exam-result.component';

import { ExamViewComponent } from './exam/exam-view/exam-view.component';

import { TraineeCreateComponent } from './trainee/trainee-create/trainee-create.component';
import { TraineeEditComponent } from './trainee/trainee-edit/trainee-edit.component';
import { TraineeViewComponent } from './trainee/trainee-view/trainee-view.component';
import { ExamEditComponent } from './exam/exam-edit/exam-edit.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
 {component:ProductComponent,path:'product',canActivate:[AuthGuard]},

 {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'courses', component:CourseViewComponent},
  {path:'course-create', component:CourseCreateComponent},
  {path:'course-edit/:id', component:CourseEditComponent},

  {path:'exams', component:ExamViewComponent},
  {path:'exam-results/:id', component:ExamResultComponent},
  {path:'exam-create', component:ExamCreateComponent},
  {path:'exam-edit/:id', component:ExamEditComponent},

  {path:'trainees', component:TraineeViewComponent},
  {path:'trainee-create', component:TraineeCreateComponent},
  {path:'trainee-edit/:id', component:TraineeEditComponent}

    ]
  }
];
