import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { NavbarPreComponent } from '../components/navbar-pre/navbar-pre.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ContattiComponent } from '../components/contatti/contatti.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    NavbarPreComponent,
    ContattiComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbCollapseModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ]
})
export class AuthModule { }
