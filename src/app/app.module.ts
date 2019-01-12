import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Imports
import {
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

import { CalendarModule } from './calendar/calendar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
