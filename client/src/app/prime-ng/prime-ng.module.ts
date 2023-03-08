import { NgModule } from '@angular/core';


//Prime NG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  exports: [ButtonModule, CardModule, InputTextModule, SidebarModule],
  declarations: [],
  imports: [
    
  ]
})
export class PrimeNgModule { }
