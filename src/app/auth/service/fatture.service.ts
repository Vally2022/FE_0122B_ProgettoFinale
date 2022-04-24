import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FattureService {
  baseUrl = environment.pathApi

  constructor(private http: HttpClient) { }

  stampaFatture(p:number){
    return this.http.get<any>(this.baseUrl + '/api/fatture?page=' + p)
  }
  rimuoviFattura(id:number){
    return this.http.delete(this.baseUrl + '/api/fatture/' + id)
  }

  fatturaCliente(id:number,p:number = 0, n:number = 20){
    return this.http.get<any>(this.baseUrl + '/api/fatture/cliente/' + id + '?page=' + p + '&size=' + n + '&sort=id,ASC' )
  }

  dettaglioFattura(id:number){
    return this.http.get<any>(this.baseUrl + 'api/fatture/cliente/'+ id) 
  }

  modificaFattura(data: any, id:number){
    return this.http.put<any>(this.baseUrl + '/api/fatture/' + id, data)
  }

  fatturaId(id:number){
    return this.http.get<any>(this.baseUrl + '/api/fatture/' + id)
  }

  statoFattura(){
    return this.http.get<any>(this.baseUrl + '/api/statifattura?page=&size=20&sort=id,ASC')
  }
  nuovaFattura(cliente:any){
    return this.http.post(this.baseUrl + '/api/fatture',cliente)
  }
}
