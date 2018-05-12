import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TruckLibModule } from 'truck-lib';

import { AppComponent } from './app.component';
import { CompartmentComponent } from './compartment/compartment.component';

@NgModule({
  declarations: [
    AppComponent,
    CompartmentComponent
  ],
  imports: [
    BrowserModule,
    TruckLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
