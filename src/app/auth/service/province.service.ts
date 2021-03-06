import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
urlBase = environment.pathApi
  constructor(private http: HttpClient) { }

  allProvince(p: number){
    return this.http.get<any>(this.urlBase + '/api/province?page=' + p + '&size=&sort=id,ASC')
  }
}
