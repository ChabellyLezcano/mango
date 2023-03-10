import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';


import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { PacientesComponent } from './pacientes/pacientes.component';
import { DialogModule } from 'primeng/dialog';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule, 
    PrimeNgModule,
    SharedModule,
    ButtonModule,
    DialogModule, TableModule
  ]
})
export class ProtectedModule { }