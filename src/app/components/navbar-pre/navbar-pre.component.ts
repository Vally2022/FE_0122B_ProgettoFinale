import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contatti } from 'src/app/models/contatti';


@Component({
  selector: 'app-navbar-pre',
  templateUrl: './navbar-pre.component.html',
  styleUrls: ['./navbar-pre.component.scss']
})
export class NavbarPreComponent implements OnInit {
form!:FormGroup
showMenu = false
isCollapsed=false;
contatti = {username:'',email:'',motivo:['']}
  constructor(private fb: FormBuilder, private http: HttpClient) { }


  toggleMenu() {
  this.showMenu = !this.showMenu;
   }
  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl(''),
      email:new FormControl(''),
      motivo:new FormControl(''),
    })
  }

  annullaForm(){
    this.showMenu = false
  }
  
  invia(data:{value:{username:string,email:string,motivo:any}}){
    {this.contatti.username = this.form.value.username,
    this.contatti.email = this.form.value.email,
    this.contatti.motivo.splice(0,1)
    this.contatti.motivo.push(data.value.motivo)
    localStorage.setItem('messaggio',JSON.stringify(this.contatti))
    alert('form inviato con successo')
    this.form.reset()
    this.showMenu = false
  }
  }
  
}
