import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
urlBase = environment.pathApi
  constructor(private http: HttpClient) { }
getUsers(p:number){
return this.http.get<any>(this.urlBase + '/api/users?page=' + p)
}

}
