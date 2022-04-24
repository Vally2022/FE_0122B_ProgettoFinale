import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FattureService } from 'src/app/auth/service/fatture.service';
import { Fattura } from 'src/app/models/fattura';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {
fatture!: Fattura[]
p:number = 0
stati!:any[]
pagina:any

  constructor(private fattureSrv: FattureService, private router: Router) { }

  ngOnInit(): void {
    this.recuperaFatture()
  }
  
recuperaFatture(){
  this.fattureSrv.stampaFatture(0).subscribe(res=>{
    this.pagina = res
    this.fatture = res.content
  })
}
eliminaFattura(id:number){
  if(confirm('Sei sicuro di voler eliminare la fattura?')){

    this.fattureSrv.rimuoviFattura(id).subscribe(()=>{
      
      this.recuperaFatture()
    })
  }else{
    return
  }
}
fatturaCliente(id:number){
  this.fattureSrv.fatturaCliente(id).subscribe((res)=>{
    this.fatture = res.content
    this.router.navigate(['cliente/',id])
  })
}

modificaFattura(id:number){
  this.fattureSrv.modificaFattura(this.fatture, id).subscribe((res)=>{
    this.fatture = res
    this.router.navigate(['fatture/', res.id])
  })
}
cambiaPagina(p: number) {
  this.fattureSrv.stampaFatture(p).subscribe(res=>{
    this.pagina = res
    this.fatture = res.content
  })
}

counter(i:number){
  return new Array(i)
}

}
