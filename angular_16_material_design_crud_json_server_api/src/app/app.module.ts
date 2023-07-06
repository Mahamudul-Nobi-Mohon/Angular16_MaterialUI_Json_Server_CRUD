
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { GuardComponent } from './guard/guard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { UserComponent } from './user/user.component';
import { ToastrModule } from 'ngx-toastr';
 
 import { MatImportModule } from '../app/modules/mat-import/mat-import.module';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CourseViewComponent } from './course/course-view/course-view.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { ExamViewComponent } from './exam/exam-view/exam-view.component';
import { ExamCreateComponent } from './exam/exam-create/exam-create.component';
import { ExamEditComponent } from './exam/exam-edit/exam-edit.component';
import { ExamResultComponent } from './exam/exam-result/exam-result.component';
import { TraineeViewComponent } from './trainee/trainee-view/trainee-view.component';
import { TraineeCreateComponent } from './trainee/trainee-create/trainee-create.component';
import { TraineeEditComponent } from './trainee/trainee-edit/trainee-edit.component';
import { ConfirmDialogComponent } from './common/confirm-dialog/confirm-dialog.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
//import {MaterialModule} from 'src/material.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { CascadingDropdownComponent } from './components/cascading-dropdown/cascading-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    LoginComponent,
    CustomerComponent,
    GuardComponent,
    HomeComponent,
    RegisterComponent,
    UpdatepopupComponent,
    UserComponent,
    ProductComponent,
    CourseViewComponent,
    CourseCreateComponent,
    CourseEditComponent,
    ExamViewComponent,
    ExamCreateComponent,
    ExamEditComponent,
    ExamResultComponent,
    TraineeViewComponent,
    TraineeCreateComponent,
    TraineeEditComponent,
    ConfirmDialogComponent,
    NavBarComponent,
    CascadingDropdownComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MatImportModule,
    MaterialFileInputModule,
    RouterModule.forRoot(AppRoutes),
    AppSidebarComponent,    
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
