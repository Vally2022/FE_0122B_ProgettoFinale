import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private authSrv: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)  {
      let url: string = state.url            
    return this.checkLogin(url)
    
  }
  checkLogin(url:string): boolean{
    if(this.authSrv.isLogged) {
      return true
    }this.router.navigate(['/homepage'])
    return false
  }
}
