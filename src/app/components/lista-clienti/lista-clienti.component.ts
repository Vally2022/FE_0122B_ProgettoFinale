import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientiService } from 'src/app/auth/service/clienti.service';
import { Cliente } from 'src/app/models/cliente';
import { ComuniService } from 'src/app/auth/service/comuni.service';
import { ProvinceService } from 'src/app/auth/service/province.service';
import { FattureService } from 'src/app/auth/service/fatture.service';
import { Fattura } from 'src/app/models/fattura';

@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.scss']
})
export class ListaClientiComponent implements OnInit {
  form!: any;
  pagina: number = 1
  pageSize = 10
  data!: Cliente[]
  id!: number;
  response:any
  fatture!: Fattura[]
  constructor(private fb: FormBuilder, private clientiSrv: ClientiService, private router: Router, private comuniSrv: ComuniService, private provinceSrv: ProvinceService, private fattureSrv: FattureService) { }

  ngOnInit(): void {
    this.recuperaClienti()
    this.comuniSrv.allComuni(this.id).subscribe(c=>  this.form = c )
    this.provinceSrv.allProvince(0).subscribe(p => this.form = p)
  }

  recuperaClienti() {
    this.clientiSrv.Allclienti(0).subscribe(res => {
      this.response = res
      this.data = res.content
      console.log(this.data)
    })
  }

  cancellaUtente(id: number) {
    if(confirm('sei sicuro di voler eliminare il cliente ')){
      this.clientiSrv.cancella(id).subscribe(() => {
        this.recuperaClienti()
      })
    }else{
      return
    }
  }


  modificaCliente(id: number) {
    this.clientiSrv.modifica(id, this.data).subscribe(res => {
      this.data = res.content
      console.log(this.form)
      this.router.navigate(['dettaglio-cliente/' + id])
    })

  }
  fatturaCliente(id:number){
    this.fattureSrv.fatturaCliente(id).subscribe((res)=>{
      this.fatture = res.content
      this.router.navigate(['fattura/cliente/'+ id])
    })
  }

  aggiungiCliente(id: number) {
    this.clientiSrv.salva(id).subscribe(() => {
      this.form
      this.router.navigate(['dettaglio-cliente/'])
    })
  }
  cambiaPagina(pagina: number) {
    this.clientiSrv.Allclienti(pagina).subscribe(res=>{
      this.response = res
      this.data = res.content
    })
  }
  counter(i:number){
    return new Array(i)
  }
}
