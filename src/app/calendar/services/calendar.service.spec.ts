import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
    let service: CalendarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CalendarService
            ]
        });

        service = TestBed.get(CalendarService);
    });

    it('should be able to create a calendar for a valid date range', () => {
        const startDate = new Date('01/01/2000');
        const endDate = new Date('01/01/2001');
        const calendar = service.generateCalendar(startDate, endDate);
        // Calendar should contain 13 months
        expect(calendar.length).toEqual(13);
    });

    it('should be able to create a calendar for a non-regular date range', () => {
        const startDate = new Date('01/03/2000');
        const endDate = new Date('01/03/2000');
        const calendar = service.generateCalendar(startDate, endDate);
        expect(calendar[0].weeks.length).toEqual(1);
        // 01/03/2000 was a Monday, so we expect two days in the week (a placeholder for both Sunday and Monday)
        expect(calendar[0].weeks[0].length).toEqual(2);
    });

    it('should fail gracefully for invalid dates', () => {
        const startDate = new Date('notadate');
        const endDate = new Date('alsonotadate');
        const calendar = service.generateCalendar(startDate, endDate);
        // To gracefully fail, we're simply returning an empty calendar
        expect(calendar.length).toEqual(0);
    });

    it('should fail gracefully for negative date ranges', () => {
        const startDate = new Date('01/01/2001');
        const endDate = new Date('01/01/2000');
        const calendar = service.generateCalendar(startDate, endDate);
        // To gracefully fail, we're simply returning an empty calendar
        expect(calendar.length).toEqual(0);
    });

});
