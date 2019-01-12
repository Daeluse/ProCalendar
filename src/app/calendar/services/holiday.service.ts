import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { combineLatest, Observable, of } from 'rxjs';
import { map, tap, timeout } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HolidayService {

    private _requestCache = {};

    constructor( private _httpClient: HttpClient ) { }

    public requestHolidays(
        countryCode: string,
        startYear: number,
        endYear: number
    ): Observable<any> {
        const requests = [];
        let year = startYear;
        let request;
        while (year <= endYear) {
            request = `https://www.calendarindex.com/api/v1/holidays?api_key=${environment.holidayApiKey}&country=${countryCode}&year=${year}`;
            if (this._requestCache[request] != null) {
                requests.push(of(this._requestCache[request]));
            } else {
                requests.push(this._httpClient.get(request).pipe(
                    tap((res) => {
                        this._requestCache[request] = res;
                    })
                ));
            }
            year += 1;
        }
        return combineLatest(requests).pipe(
            timeout(10000),
            map((holidays) => {
                holidays = holidays.reduce((acc, holidayResponse) => {
                    acc.push(...holidayResponse.response.holidays);
                    return acc;
                }, []);
                return holidays.map((holiday) => {
                    holiday.date = new Date(holiday.date);
                    holiday.start = new Date(holiday.start);
                    holiday.end = new Date(holiday.end);
                    return holiday;
                });
            })
        );
    }

}