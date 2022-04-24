import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DettaglioClienteComponent } from './components/dettaglio-cliente/dettaglio-cliente.component';
import { DettaglioFatturaComponent } from './components/dettaglio-fattura/dettaglio-fattura.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListaClientiComponent } from './components/lista-clienti/lista-clienti.component';
import { ListaUtentiComponent } from './components/lista-utenti/lista-utenti.component';
import { ModificaFatturaComponent } from './components/modifica-fattura/modifica-fattura.component';
import { NuovaFatturaComponent } from './components/nuova-fattura/nuova-fattura.component';
import { NuovoClienteComponent } from './components/nuovo-cliente/nuovo-cliente.component';
import { NuovoCollaboratoreComponent } from './components/nuovo-collaboratore/nuovo-collaboratore.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lista-utenti',
    component: ListaUtentiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lista-clienti',
    component: ListaClientiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fattura/cliente/:id',
    component: DettaglioFatturaComponent,
    canActivate: [AuthGuard],

  },

  {
    path: 'clienti/:id',
    component: DettaglioClienteComponent,
    canActivate: [AuthGuard],

  },
  {
    path: 'nuovo-cliente',
    component: NuovoClienteComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'fattura',
    component: FattureComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fatture/cliente/:id',
    component: NuovaFatturaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fatture/:id',
    component: ModificaFatturaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nuovo-collaboratore',
    component: NuovoCollaboratoreComponent,
    canActivate: [AuthGuard],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
