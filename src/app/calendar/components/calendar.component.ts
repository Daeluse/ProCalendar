import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';

import { MONTHS } from '../constants/months';
import { Calendar, Day } from '../models/calendar';
import { CalendarService } from '../services/calendar.service';
import { HolidayService } from '../services/holiday.service';

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
        private _calendarService: CalendarService,
        private _holidayService: HolidayService
    ) { }

    ngOnInit(): void { }
4
    public refresh() {
        this._holidayService.requestHolidays('US', this._startDate.getFullYear(), this._endDate.getFullYear()).subscribe((res) => {
            this._calendar = this._calendarService.generateCalendar(this._startDate, this._endDate, res);
            this._changeDetectorRef.detectChanges();
        }, () => {
            console.warn('We were unable to load holidays for the range requested, the will not be displayed.');
            this._calendar = this._calendarService.generateCalendar(this._startDate, this._endDate);
            this._changeDetectorRef.detectChanges();
        });
    }

    public getHolidayList(day: Day): string {
        if (day && day.holidays && day.holidays.length > 0) {
            return day.holidays.reduce((acc, holiday) => {
                acc = holiday.name + '\n';
                return acc;
            }, '');
        }
        return null;
    }

}
