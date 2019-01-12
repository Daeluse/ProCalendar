import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    CalendarComponent
} from './components/calendar.component';

@NgModule({
    declarations: [ CalendarComponent ],
    imports: [ CommonModule ],
    exports: [ CalendarComponent ],
    providers: [],
})
export class CalendarModule {}