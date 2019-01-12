import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Imports
import {
  MatCardModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
