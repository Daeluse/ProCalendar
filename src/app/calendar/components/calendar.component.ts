import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';

import { MONTHS } from '../constants/months';
import { Calendar } from '../models/calendar';
import { CalendarService } from '../services/calendar.service';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

    @Input() public set startDate(startDate: string) {
        if (startDate) { 
            this._startDate = new Date(startDate);
        }
    }
    public get startDate(): string {
        return `${this._startDate.getMonth() + 1}/${this._startDate.getDate()}/${this._startDate.getFullYear()}`;
    }

    @Input() public set endDate(endDate: string) {
        if (endDate) { 
            this._endDate = new Date(endDate);
        }
    }
    public get endDate(): string {
        return `${this._endDate.getMonth() + 1}/${this._endDate.getDate()}/${this._endDate.getFullYear()}`;
    }

    @Input() public set countryCode(countryCode: string) {
        if (countryCode) { 
            this._countryCode = countryCode;
        }
    }
    public get countryCode(): string {
        return this._countryCode;
    }

    public get calendar(): Calendar {
        return this._calendar;
    }

    public months = MONTHS;

    private _startDate: Date;
    private _endDate: Date;
    private _countryCode: string;
    private _calendar: Calendar;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _calendarService: CalendarService
    ) { }

    ngOnInit(): void { }

    public refresh() {
        this._calendar = this._calendarService.generateCalendar(this._startDate, this._endDate);
        this._changeDetectorRef.detectChanges();
        console.log(this._calendar);
    }

}
