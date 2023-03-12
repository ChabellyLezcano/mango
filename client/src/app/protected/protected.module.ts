import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DoctoresComponent } from './doctores/doctores.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { PacientesComponent } from './pacientes/pacientes.component';
import { DialogModule } from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {TreeSelectModule} from 'primeng/treeselect';
import { SelectItem } from 'primeng/api';
import { TratamientosComponent } from './tratamientos/tratamientos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    PacientesComponent,
    DoctoresComponent,
    TratamientosComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule, 
    PrimeNgModule,
    SharedModule,
    ButtonModule,
    DialogModule, TableModule,
    TreeSelectModule
  ]
})
export class ProtectedModule { }