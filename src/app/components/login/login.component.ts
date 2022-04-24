import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Admin } from 'src/app/models/admin';
import { Utente } from 'src/app/models/utente';
import { environment } from 'src/environments/environment';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  item:any
  form!: FormGroup
  utente!: Admin
  isLoading = false
  showMenu = false
  constructor(private fb: FormBuilder, private authSrv: AuthService, private router: Router, private http: HttpClient, private modalService: NgbModal) { }
  
  accedi(datiForm: {value:any}) {
    console.log(0);
    console.log(datiForm.value);
    this.item = datiForm.value;
    this.authSrv.login(this.item).subscribe(res=>{
      console.log(res);
      this.utente = res
      this.isLoading = true
      localStorage.setItem('utenteLoggato',JSON.stringify(this.utente))
      this.router.navigate(['homepage'])
    })
    alert('utente loggato')
  }
ngOnInit(): void {
    this.formInit()
    
  }

  formInit(){
    this.form = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }
}
