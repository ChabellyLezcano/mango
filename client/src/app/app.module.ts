import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { SidebarModule } from 'ng-sidebar';
import { DialogModule } from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TreeSelectModule} from 'primeng/treeselect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    SharedModule,
    SidebarModule.forRoot(),
    DialogModule,
    BrowserAnimationsModule,
    TreeSelectModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
