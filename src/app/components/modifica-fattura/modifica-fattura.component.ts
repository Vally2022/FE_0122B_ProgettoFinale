import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/auth/service/clienti.service';
import { FattureService } from 'src/app/auth/service/fatture.service';
import { Fattura } from 'src/app/models/fattura';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';



@Component({
  selector: 'app-modifica-fattura',
  templateUrl: './modifica-fattura.component.html',
  styleUrls: ['./modifica-fattura.component.scss']
})
export class ModificaFatturaComponent implements OnInit {
  form!: FormGroup;
  fattura!: Fattura;
  stato!: any[]
  id: any
  cliente!: Cliente
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private fattureSrv: FattureService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.fattureSrv.fatturaId(id).subscribe(res => {
        this.fattura = res
      })
    })
    this.modifica()
    this.formInit()    
    this.getStato()
  }
  
  getStato() {
    this.fattureSrv.statoFattura().subscribe(stato => {
      this.stato = stato.content
    })
    
  }

  modifica() {
    if (this.id !== 0) {
      this.fattureSrv.fatturaId(this.id).subscribe((f) => {
        this.fattura = f
        this.form.patchValue({
          id: this.fattura.id,
          data: this.fattura.data,
          numero: this.fattura.numero,
          anno: this.fattura.anno,
          importo: this.fattura.importo,
          stato: this.fattura.stato.nome,
          cliente: {
            nome: this.fattura.cliente.ragioneSociale
          }
        })
      })
    }
    
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

    })
    this.router.navigate(['/fattura'])
  }
}
