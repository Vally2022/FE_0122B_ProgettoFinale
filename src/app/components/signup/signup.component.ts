import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  onSubmit = false
  showMenu = false
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
    this.onSubmit = true      
    alert('Utente registrato correttamente')
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
    this.form.controls['password'].setValue('')
  }

}
