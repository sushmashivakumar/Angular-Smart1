import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module/material-module.module';
import { AggrementsComponent } from './aggrements/aggrements.component';
import { HomeComponent } from './home/home.component';
import { AffidivitComponent } from './affidivit/affidivit.component';


@NgModule({
  declarations: [
    AppComponent,
    AggrementsComponent,
    HomeComponent,
    AffidivitComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
