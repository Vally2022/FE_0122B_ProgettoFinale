import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
token = environment.adminToken
tenant = environment.adminTenant
  constructor(private authSrv: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authSrv.user$.pipe(take(1),switchMap(user=>{

      let authReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.token).set('X-TENANT-ID', this.tenant)
      });
        return next.handle(authReq);
    }))
    
  }
}
