import { NgModule } from '@angular/core';


//Prime NG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TreeSelectModule} from 'primeng/treeselect';



@NgModule({
  exports: [ButtonModule, CardModule, InputTextModule,
     SidebarModule, ConfirmDialogModule, MessageModule, MessagesModule, TreeSelectModule],
  declarations: [],
  imports: [
    
  ]
})
export class PrimeNgModule { }
