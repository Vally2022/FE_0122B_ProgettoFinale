import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from '../components/contatti/contatti.component';
import { LoginComponent } from '../components/login/login.component';
import { NavbarPreComponent } from '../components/navbar-pre/navbar-pre.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'navbar',
    pathMatch: 'full'
  },
  {
    path: 'navbar',
    component: NavbarPreComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AuthRoutingModule { }
