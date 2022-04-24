import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/auth/service/clienti.service';
import { FattureService } from 'src/app/auth/service/fatture.service';
import { Cliente } from 'src/app/models/cliente';
import { Fattura } from 'src/app/models/fattura';

@Component({
  selector: 'app-dettaglio-fattura',
  templateUrl: './dettaglio-fattura.component.html',
  styleUrls: ['./dettaglio-fattura.component.scss']
})
export class DettaglioFatturaComponent implements OnInit {
  
fatturaCliente!: Fattura[]
pagina: number = 0
response:any
id!:number
data!:Cliente
  constructor(private route: ActivatedRoute, private fattureSrv: FattureService, private clienteSrv: ClientiService,private router: Router) { }

  ngOnInit(): void {
    this.recuperaFatturaCliente()
  }
recuperaFatturaCliente(){
  this.route.params.subscribe(async(params)=>{
    const id = +params ['id'];
    this.fattureSrv.fatturaCliente(id).subscribe(f=>{
      this.fatturaCliente = f.content
    
  })
  })
}
nuovaFattura(id:number){
  this.clienteSrv.modifica(id, this.data).subscribe(res => {
    this.data = res.content
    
    this.router.navigate(['fatture/cliente/' + id])
  })
}
cambiaPagina(pagina: number) {
  this.fattureSrv.stampaFatture(pagina).subscribe(res=>{
    this.response = res
  })
}
counter(i:number){
  return new Array(i)
}
}
