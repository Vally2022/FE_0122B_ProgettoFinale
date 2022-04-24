import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData, AuthService } from 'src/app/auth/service/auth.service';
import { ClientiService } from 'src/app/auth/service/clienti.service';
import { Admin } from 'src/app/models/admin';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {
clienti!: Cliente
utenteLoggato!:any
public LOGO = ("./assets/LOGO.png");
imgAlt = 'logo'
  constructor(public authSrv: AuthService, private router: Router, private clienteSrv: ClientiService) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user)=>{
      this.utenteLoggato = user
    })
  }


  navigaListaUtenti() {
    if (localStorage.getItem('utenteLoggato')) {
      this.router.navigate(['/lista-utenti'])
    }
  }

  navigaListaClienti() {
    if (localStorage.getItem('utenteLoggato')) {
      this.router.navigate(['/lista-clienti'])
    }
  }

  navigaFatture() {
    if (localStorage.getItem('utenteLoggato')) {
      this.router.navigate(['/fattura'])
    }
  }
  logOut() {
    this.authSrv.logout();
    this.router.navigate([''])
  }
  navigaHome(){
    if (localStorage.getItem('utenteLoggato')) {
      this.router.navigate(['/homepage'])
      
    }
  }
  addCollaboratore() {
    if (localStorage.getItem('utenteLoggato')) {
      this.router.navigate(['/homepage'])
    }
  }
  
}
