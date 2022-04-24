import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/auth/service/clienti.service';
import { ComuniService } from 'src/app/auth/service/comuni.service';
import { ProvinceService } from 'src/app/auth/service/province.service';
import { Cliente } from 'src/app/models/cliente';
import { Comuni } from 'src/app/models/comuni';
import { Province } from 'src/app/models/province';

@Component({
  selector: 'app-nuovo-cliente',
  templateUrl: './nuovo-cliente.component.html',
  styleUrls: ['./nuovo-cliente.component.scss']
})
export class NuovoClienteComponent implements OnInit {
  form!: FormGroup;
  cliente!: Cliente;
  clienti!: Cliente[]
  id!: number
  comuni!: Comuni[];
  province!: Province[];
  tipiClienti!: any[]
  constructor(private fb: FormBuilder, private clienteSrv: ClientiService, private route: ActivatedRoute, private router: Router, private comuniSrv: ComuniService, private provinceSrv: ProvinceService) { }


  salvaDatiForm(data: { value: { indirizzoSedeOperativa: { comune: Comuni } } }) {
    this.comuni.forEach(item => {
      if (item.id == data.value.indirizzoSedeOperativa.comune.id) {
        data.value.indirizzoSedeOperativa.comune = item
      }
    })

    this.clienteSrv.salva(data.value).subscribe(() => {
      this.router.navigate(['/clienti'])
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.clienteSrv.cliendiId(id).subscribe(res => {
        this.cliente = res
      })
    })
    this.formInit()
  }
  crea() {
    this.cliente.ragioneSociale = this.form.value.ragioneSociale,
      this.cliente.partitaIva = this.form.value.partitaIva,
      this.cliente.nomeContatto = this.form.value.nomeContatto,
      this.cliente.cognomeContatto = this.form.value.cognomeContatto,
      this.cliente.pec = this.form.value.pec,
      this.cliente.telefono = this.form.value.telefono,
      this.cliente.emailContatto = this.form.value.emailContatto,
      this.cliente.indirizzoSedeOperativa.via = this.form.value.indirizzoSedeOperativa.via,
      this.cliente.indirizzoSedeOperativa.civico = this.form.value.indirizzoSedeOperativa.civico,
      this.cliente.indirizzoSedeOperativa.cap = this.form.value.indirizzoSedeOperativa.cap,
      this.cliente.indirizzoSedeOperativa.localita = this.form.value.indirizzoSedeOperativa.localita,
      this.cliente.indirizzoSedeOperativa.comune.nome = this.form.value.indirizzoSedeOperativa.comune.nome,
      this.cliente.indirizzoSedeOperativa.comune.provincia.nome = this.form.value.indirizzoSedeOperativa.comune.provincia.nome
    this.clienteSrv.salva(this.cliente).toPromise();
    alert('nuovo cliente registrato correttamente')
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
          nome: (''),
          provicia: {}
        })
      })
    })
    this.provinceSrv.allProvince(0).subscribe(res => this.province = res.content)
    this.comuniSrv.allComuni(0).subscribe(res => this.comuni = res.content)
    this.clienteSrv.getTipoCliente().subscribe(res => this.tipiClienti = res)
  }
}
