import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Contatti } from 'src/app/models/contatti';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {
  onSubmit = false
  showMenu = false
form!: FormGroup
user = {username:'', password: '', email: '', motivo:['']}
  constructor(private fb: FormBuilder, private authSrv: AuthService, private router: Router) { }
registraUtente(data: {value:{username:string;email:string;motivo:any}}){
  this.user.username = this.form.value.username;
  this.user.email = this.form.value.email;
  this.user.password = this.form.value.password;
  this.user.motivo.splice(0,1)
  this.user.motivo.push(data.value.motivo)

  this.authSrv.signUp(this.user).subscribe(res=>{
    this.onSubmit = true      
    alert('form inviato correttamente')
    console.log(res)
    this.router.navigate(['/login'])  
  })
  
}
annullaForm(){
  this.showMenu = false
}
  ngOnInit(): void {
this.formInit()
  }

  formInit(){
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      roles: new FormControl('', [Validators.required]),
      
    })

    this.form.controls['username'].setValue('');
    this.form.controls['email'].setValue('');
    
  }
}
