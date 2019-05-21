import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BackendCommunicationModule } from 'backend-communication';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BackendCommunicationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
