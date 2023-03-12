import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      { path: '**', redirectTo: '' },
    ]
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'pacientes',
    component: PacientesComponent
  },
  {
    path: 'doctores',
    component: PacientesComponent
  },
  {
    path: 'tratamientos',
    component: TratamientosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
