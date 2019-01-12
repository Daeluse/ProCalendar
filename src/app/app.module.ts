import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
