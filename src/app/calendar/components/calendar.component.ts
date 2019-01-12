import {
    Component,
    Input,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';

import { MONTHS } from '../constants/months';
import { Calendar, Day } from '../models/calendar';
import { CalendarService } from '../services/calendar.service';
import { HolidayService } from '../services/holiday.service';
import { DateUtil } from '../utils/date';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {

    @Input() public set startDate(startDate: string) {
        if (startDate) {
            this._startDate = new Date(startDate);
        }
    }
    public get startDate(): string {
        return `${this._startDate.getMonth() + 1}/${this._startDate.getDate()}/${this._startDate.getFullYear()}`;
    }

    @Input() public set range(range: string | number) {
        if (range) {
            this._range = +range;
        }
    }
    public get range(): string | number {
        return this._range;
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
    private _range: number;
    private _countryCode: string;
    private _calendar: Calendar;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _calendarService: CalendarService,
        private _holidayService: HolidayService
    ) { }

    public refresh() {
        const endDate = DateUtil.incrementDate(this._startDate, this._range);
        this._holidayService.requestHolidays('US', this._startDate.getFullYear(), endDate.getFullYear()).subscribe((res) => {
            this._calendar = this._calendarService.generateCalendar(this._startDate, endDate, res);
            this._changeDetectorRef.detectChanges();
        }, () => {
            console.warn('We were unable to load holidays for the range requested, the will not be displayed.');
            this._calendar = this._calendarService.generateCalendar(this._startDate, endDate);
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
