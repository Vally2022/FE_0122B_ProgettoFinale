import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface AuthData {
  accessToken: string,
  user: {
    id: number,
    username: string,
    password: string
  }
}

  @Injectable({
    providedIn: 'root'
  })




  export class AuthService {
  urlBase = environment.pathApi
  private authSubject = new BehaviorSubject<null | AuthData>(null)
  user$ = this.authSubject.asObservable()
  //isLogged = false

  constructor(private http: HttpClient) { }

  login(item: any) {
    console.log(item)
    return this.http.post<any>(this.urlBase + '/api/auth/login', item)

  }

  signUp(data: any){
    return this.http.post(this.urlBase + '/api/auth/signup', data)
  }

  /*loggedIn(){
    if (localStorage.getItem('utenteLoggato')){
      this.isLogged = true
    }
    else{
      this.isLogged = false
    }
  }*/
  get isLogged() : boolean{
    return localStorage.getItem('utenteLoggato') !== null
  }

  logout(){
    localStorage.removeItem('utenteLoggato')
    this.authSubject.next(null)
  }

}