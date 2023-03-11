import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { DoctoresComponent } from './protected/doctores/doctores.component';
import { PacientesComponent } from './protected/pacientes/pacientes.component';
import { PerfilComponent } from './protected/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'doctores',
    component: DoctoresComponent,
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
