import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';

import { HolidayService } from './holiday.service';

describe('HolidayService', () => {
    let service: HolidayService;
    let httpClient: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                HolidayService
            ]
        });

        service = TestBed.get(HolidayService);
        httpClient = TestBed.get(HttpTestingController);
    });

    it('should perform an HTTP request based on a provided month and year', fakeAsync(() => {
        service.requestHolidays('US', 2000, 2000).subscribe((res) => {
            expect(res[0]['name']).toBe('New Year\'s Day');
        });
        const mockReq = httpClient.expectOne(
            `https://www.calendarindex.com/api/v1/holidays?api_key=${environment.holidayApiKey}&country=US&year=2000`
        );
        mockReq.flush({
            meta: {
                code: 200
            },
            response: {
                holidays: [
                    {
                        date: '2019-01-01 00:00:00',
                        end: '2019-01-02T05:00:00.000Z',
                        name: 'New Year\'s Day',
                        start: '2019-01-01T05:00:00.000Z',
                        type: 'public'
                    }
                ]
            }
        });
        tick();
    }));

});
