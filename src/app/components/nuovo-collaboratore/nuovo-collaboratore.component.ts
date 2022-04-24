import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-nuovo-collaboratore',
  templateUrl: './nuovo-collaboratore.component.html',
  styleUrls: ['./nuovo-collaboratore.component.scss']
})
export class NuovoCollaboratoreComponent implements OnInit {
  form!: FormGroup
  user = {username:'', password: '', email: '', roles:['']}
    constructor(private fb: FormBuilder, private authSrv: AuthService, private router: Router) { }
  registraUtente(data: {value:{username:string;email:string;password:string;roles:any}}){
    this.user.username = this.form.value.username;
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.user.roles.splice(0,1)
    this.user.roles.push(data.value.roles)
    this.authSrv.signUp(this.user).subscribe(res=>{
      console.log(res)
      alert('Utente registrato correttamente')
      this.router.navigate(['homepage'])
  
    })
    console.log(data)
  }
    ngOnInit(): void {
  this.formInit()
    }
  
    formInit(){
      this.form = this.fb.group({
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        roles: new FormControl('', [Validators.required]),
      })
  
      this.form.controls['username'].setValue('');
      this.form.controls['password'].setValue('')
    }

}
