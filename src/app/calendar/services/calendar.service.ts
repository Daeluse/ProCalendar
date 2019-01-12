import { Injectable } from '@angular/core';

import {
    Calendar,
    Month,
    Day
} from '../models/calendar';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    public generateCalendar(
        startDate: Date,
        endDate: Date
    ): Calendar {
        // Ensure our date range is valid
        if (
            !this._isValidDate(startDate)
            || !this._isValidDate(endDate)
            || startDate.getTime() > endDate.getTime()) {
            return [];
        }
        const dateRange = this._generateRange(startDate, endDate);
        return dateRange;
    }

    private _generateRange(
        startDate: Date,
        endDate: Date
    ): Calendar {
        const calendar = [];
        // Instantiate a new Month object utilizing our start date to generate the month and the year of the object
        let month = new Month(startDate);
        let week = [];
        // Re-Initialize the currentDay object to prevent mutation of the passed reference
        let currentDay = new Date(startDate);
        let activeMonth;
        // Perform left-hand padding to ensure proper day alignment in calendar
        let padL = startDate.getDay();
        if (padL > 0) {
            week.push(...new Array(padL));
        }
        // Perform a loop through the date range
        while (currentDay <= endDate) {
            // Store the current month/year relation for checking later
            activeMonth = `${currentDay.getMonth()}/${currentDay.getFullYear()}`;
            // Add the current day to our running week array
            week.push(new Day(currentDay));
            // Check if our day is ending the week, or the selected range
            if (currentDay.getDay() === 6
                || currentDay.getTime() === endDate.getTime()) {
                // Write the week to the month
                month.weeks.push(week)
                // Clear the week for the next cycle of the loop
                week = [];
            }
            // Increment the currentDay to prepare the next loop cycle
            currentDay = this._incrementDate(currentDay, 1);
            // Check if the new current day is part of a separate month
            if (activeMonth !== `${currentDay.getMonth()}/${currentDay.getFullYear()}`) {
                // Write the month to the calendar
                calendar.push(month);
                // Clear the month for the next cycle of the loop
                month = new Month(currentDay);
            }
        }
        // Write the month to the calendar, this takes care of any case where the month was not written as part
        // of a new month being created
        calendar.push(month);
        return calendar;
    }

    private _incrementDate(
        date: Date,
        count: number
    ): Date {
        // Re-Initialize the date to prevent in-line mutation from the caller
        date = new Date(date);
        date.setDate(date.getDate() + count);
        return date;
    }

    private _isValidDate(
        date: any
    ) {
        return date instanceof Date && !isNaN(date as any);
    }

}