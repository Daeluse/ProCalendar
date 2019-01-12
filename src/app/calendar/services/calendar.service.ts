import { Injectable } from '@angular/core';

import {
    Calendar,
    Month,
    Day
} from '../models/calendar';
import { Holiday } from '../models/holiday';
import { DateUtil } from '../utils/date';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    public generateCalendar(
        startDate: Date,
        endDate: Date,
        holidays?: Holiday[]
    ): Calendar {
        // Ensure our date range is valid
        if (
            !DateUtil.isValidDate(startDate)
            || !DateUtil.isValidDate(endDate)
            || startDate.getTime() > endDate.getTime()) {
            return [];
        }
        const calendar = this._generateRange(startDate, endDate, holidays);
        return calendar;
    }

    private _generateRange(
        startDate: Date,
        endDate: Date,
        holidays?: Holiday[]
    ): Calendar {
        // Backing Data Stores for use in the loop
        const calendar = [];
        let activeDate = new Date(startDate);
        let activeWeek = [];
        let activeMonth = new Month(activeDate);
        // Loop through each day between the start and end dates
        while (activeDate <= endDate) {
            // Check if we need to perform left-hand padding to ensure proper position of the start date
            if (activeWeek.length < activeDate.getDay()) {
                activeWeek.push(...new Array(activeDate.getDay()));
            }
            // Create a new Day object to store relevant information for rendering
            const day = new Day(activeDate);
            // Append relevant holidays to the Day
            if (holidays != null) {
                day.holidays = this._getActiveHolidays(day, holidays);
            }
            // Append the Day to the Week
            activeWeek.push(day);
            // Check if the Day will be at the end of the week, or the end of the range
            if (activeDate.getDay() === 6
                || activeDate.getTime() === endDate.getTime()) {
                // Perform right-hand padding where applicable
                if (activeWeek.length < 7) {
                    activeWeek.push(...new Array(7 - activeWeek.length));
                }
                // Append the Week to the Month
                activeMonth.weeks.push(activeWeek);
                activeWeek = [];
            }
            // Move to the next Day in the loop
            activeDate = DateUtil.incrementDate(activeDate, 1);
            // Check if the Month or the Year needs to be incremented
            if (activeDate.getMonth() !== activeMonth.month
                || activeDate.getFullYear() !== activeMonth.year) {
                if (activeWeek.length > 0) {
                    // Perform right-hand padding where applicable
                    if (activeWeek.length < 7) {
                        activeWeek.push(...new Array(7 - activeWeek.length));
                    }
                    // Append the Week to the Month
                    activeMonth.weeks.push(activeWeek);
                    activeWeek = [];
                }
                // Append the Month to the Calendar
                calendar.push(activeMonth);
                activeMonth = new Month(activeDate);
            }
        }
        if (activeMonth.weeks.length > 0) {
            // Append the Month to the Calendar
            calendar.push(activeMonth);
        }
        return calendar;
    }

    private _getActiveHolidays(
        day: Day,
        holidays: Holiday[]
    ) {
        holidays = holidays.reduce((acc, holiday) => {
            if (holiday.start.getTime() <= day.date.getTime()
                && holiday.end.getTime() > day.date.getTime()
                && holiday.date.getFullYear() === day.date.getFullYear()) {
                   acc.push(holiday);
            }
            return acc;
        }, []);
        return holidays;
    }

}
