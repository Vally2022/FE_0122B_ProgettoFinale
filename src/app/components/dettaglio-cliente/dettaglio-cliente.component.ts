import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/auth/service/clienti.service';
import { ComuniService } from 'src/app/auth/service/comuni.service';
import { ProvinceService } from 'src/app/auth/service/province.service';
import { Cliente } from 'src/app/models/cliente'
import { Comuni } from 'src/app/models/comuni';
import { Province } from 'src/app/models/province';
import { IndirizzoSedeOperativa } from 'src/app/models/indirizzo-sede-operativa';



@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.scss']
})
export class DettaglioClienteComponent implements OnInit {
  form!: FormGroup;
  cliente!: Cliente;
  id!: number
  comuni!: Comuni[];
  province!: Province[];
  tipiClienti!: any[]
  page = 0
  collectionSize: number = 10
  paginaCorrente = +1
  constructor(private fb: FormBuilder, private clienteSrv: ClientiService, private route: ActivatedRoute, private router: Router, private comuniSrv: ComuniService, private provinceSrv: ProvinceService) { }

  salvaDatiForm(data: { value: { indirizzoSedeOperativa: { comuni: Comuni } } }) {
    this.comuni.forEach(item => {
      if (item.id == data.value.indirizzoSedeOperativa.comuni.id) {
        data.value.indirizzoSedeOperativa.comuni = item
      }
    })

    this.clienteSrv.modifica(this.id, data.value).subscribe((res) => {
      this.form = res
      this.router.navigate(['/clienti'])
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.modifica();
      this.formInit()
    })
  }
  modifica() {
    if (this.id !== 0) {
      this.clienteSrv.cliendiId(this.id).subscribe(data => {
        this.cliente = data
        this.form.patchValue({
          ragioneSociale: this.cliente.ragioneSociale,
          partitaIva: this.cliente.partitaIva,
          tipoCliente: this.cliente.tipoCliente,
          email: this.cliente.email,
          pec: this.cliente.pec,
          telefono: this.cliente.telefono,
          nomeContatto: this.cliente.nomeContatto,
          cognomeContatto: this.cliente.cognomeContatto,
          telefonoContatto: this.cliente.telefonoContatto,          
          emailContatto: this.cliente.emailContatto,
          indirizzoSedeOperativa: {
            via: this.cliente.indirizzoSedeOperativa.via,
            civico: this.cliente.indirizzoSedeOperativa.civico,
            cap: this.cliente.indirizzoSedeOperativa.cap,
            localita: this.cliente.indirizzoSedeOperativa.localita
          }
        })
      })
    }
    

  }
  formInit() {
    this.form = this.fb.group({
      ragioneSociale: new FormControl('', Validators.required),
      partitaIva: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tipoCliente: new FormControl('', Validators.required),
      nomeContatto: new FormControl('', [Validators.required]),
      cognomeContatto: new FormControl('', [Validators.required]),
      pec: new FormControl(''),
      telefonoContatto: new FormControl(''),
      emailContatto: new FormControl(''),
      telefono: new FormControl(''),
      indirizzoSedeOperativa: this.fb.group({

        via: new FormControl(''),
        civico: new FormControl(''),
        cap: new FormControl(''),
        comune: this.fb.group({

          id: new FormControl('', Validators.required),
          nome: '',
          provicia: {}
        })
      })
    })
    this.provinceSrv.allProvince(0).subscribe(res => this.province = res.content)
    this.comuniSrv.allComuni(0).subscribe(res => this.comuni = res.content)
    this.clienteSrv.getTipoCliente().subscribe(res => this.tipiClienti = res)
  }

  
}
