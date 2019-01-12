import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material';

import {
    CalendarComponent
} from './components/calendar.component';

@NgModule({
    declarations: [ CalendarComponent ],
    imports: [
        CommonModule,
        ScrollingModule,
        MatTooltipModule
    ],
    exports: [ CalendarComponent ],
    providers: [],
})
export class CalendarModule {}
