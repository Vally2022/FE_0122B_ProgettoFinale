import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authSrv.logout();
    this.router.navigate([''])
  }
  navigaHomepage(){
    if(localStorage.getItem('utenteLoggato')){
      this.router.navigate(['homepage'])
    }
  }

  navigaListaUtenti(){
    if(localStorage.getItem('utenteLoggato')){
      this.router.navigate(['/lista-utenti'])
    }
  }

  navigaListaClienti(){
    if(localStorage.getItem('utenteLoggato')){
      this.router.navigate(['/lista-clienti'])
    }
  }

  navigaFatture(){
    if(localStorage.getItem('utenteLoggato')){
      this.router.navigate(['/fatture'])
    }
  }

}
