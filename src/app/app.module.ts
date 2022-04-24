import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListaClientiComponent } from './components/lista-clienti/lista-clienti.component';
import { ListaUtentiComponent } from './components/lista-utenti/lista-utenti.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FattureComponent } from './components/fatture/fatture.component'
import { TokenInterceptor } from './auth/token.interceptor';
import { DettaglioClienteComponent } from './components/dettaglio-cliente/dettaglio-cliente.component';
import { DettaglioFatturaComponent } from './components/dettaglio-fattura/dettaglio-fattura.component';
import { NuovaFatturaComponent } from './components/nuova-fattura/nuova-fattura.component';
import { NuovoClienteComponent } from './components/nuovo-cliente/nuovo-cliente.component';
import { ModificaFatturaComponent } from './components/modifica-fattura/modifica-fattura.component';
import { NuovoCollaboratoreComponent } from './components/nuovo-collaboratore/nuovo-collaboratore.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListaClientiComponent,
    ListaUtentiComponent,
    NavbarMainComponent,
    FattureComponent,
    DettaglioClienteComponent,
    DettaglioFatturaComponent,
    NuovaFatturaComponent,
    NuovoClienteComponent,
    ModificaFatturaComponent,
    NuovoCollaboratoreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AuthRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
