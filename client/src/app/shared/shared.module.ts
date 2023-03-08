import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [NavbarComponent],
  imports: [SidebarModule.forRoot(),
    CommonModule
  ]
})
export class SharedModule { }
