import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/auth/service/utenti.service';
import { Utente } from 'src/app/models/utente';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.scss']
})
export class ListaUtentiComponent implements OnInit {
users!: Utente[]
pagina!:any
collectionSize!: number
  constructor(private utentiSrv: UtentiService) { }

  ngOnInit(): void {
    this.utentiSrv.getUsers(0).subscribe(res =>{
      this.users = res.content
      console.log(this.users)
      
    })

    
  }
  cambiaPagina(p: number) {
    this.utentiSrv.getUsers(p).subscribe(res=>{
      this.pagina = res
      this.users = res.content
    })
  }
  counter(i:number){
    return new Array(i)
  }
}


