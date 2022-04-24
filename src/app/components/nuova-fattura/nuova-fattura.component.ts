import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgModel, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/auth/service/clienti.service';
import { FattureService } from 'src/app/auth/service/fatture.service';
import { Fattura } from 'src/app/models/fattura';
import { Cliente } from 'src/app/models/cliente';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nuova-fattura',
  templateUrl: './nuova-fattura.component.html',
  styleUrls: ['./nuova-fattura.component.scss']
})
export class NuovaFatturaComponent implements OnInit {
  form!: FormGroup;
  fattura!: Fattura;
  fatturaNuova!:any[]
  stato!: any[]
  id: any
  cliente!: Cliente

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private fattureSrv: FattureService, private router: Router, private clienteSrv: ClientiService) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.clienteSrv.cliendiId(id).subscribe(res => {
        this.cliente = res
      })
      this.getCliente()
    })
    this.formInit()
  }


  formInit() {


    this.form = this.fb.group({
      id: new FormControl(''),
      data: new FormControl(''),
      numero: new FormControl(''),
      anno: new FormControl(''),
      importo: new FormControl(''),
      stato: new FormControl(),
      cliente: new FormControl(),
      idCliente: new FormControl(),

    })
  }
  getStato() {
    this.fattureSrv.statoFattura().subscribe(stato => {
      this.stato = stato.content
    })
  }
  getCliente(){
    this.fattureSrv.dettaglioFattura(this.id).subscribe((res)=>{
      this.cliente = res
    })
  }

  salva(form:any) {
    this.fattura.id = this.form.value.id,
    this.fattura.data = this.form.value.data,
    this.fattura.numero = this.form.value.numero,
    this.fattura.anno = this.form.value.anno,
    this.fattura.importo = this.form.value.importo,
    this.fattura.stato = this.form.value.stato,
this.fattureSrv.nuovaFattura(this.fatturaNuova).subscribe((f)=>{
  alert('nuova fattura creata')
})
    this.router.navigate(['/fattura'])
}
}