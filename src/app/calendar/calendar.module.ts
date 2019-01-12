import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material';

import {
    CalendarComponent
} from './components/calendar.component';

@NgModule({
    declarations: [ CalendarComponent ],
    imports: [
        CommonModule,
        MatTooltipModule
    ],
    exports: [ CalendarComponent ],
    providers: [],
})
export class CalendarModule {}
