import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {
  urlBase = environment.pathApi
  constructor(private http: HttpClient) { 
  
  }

  Allclienti(page:number){
    return this.http.get<any>(this.urlBase + '/api/clienti?page=' + page)
  }

  cliendiId(id:number){
    return this.http.get<any>(this.urlBase + '/api/clienti/' + id)
  }

  

  modifica(id:number, item:any){
    return this.http.put<any>(this.urlBase + '/api/clienti?id=' + id, item)
  }

  salva(item:any){
    return this.http.post<any>(this.urlBase + '/api/clienti', item)
  }

  cancella(id:number){
    return this.http.delete<boolean>(this.urlBase + '/api/clienti/' + id)
  }

  getTipoCliente(){
    return this.http.get<any>(this.urlBase + '/api/clienti/tipicliente')
  }
  


}
