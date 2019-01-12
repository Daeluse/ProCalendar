import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { combineLatest, Observable, of } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

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
        let identifier;
        while (startYear <= endYear) {
            identifier = `${countryCode}/${startYear}`;
            if (this._requestCache[identifier] != null) {
                requests.push(of(this._requestCache[identifier]));
            } else {
                /* tslint:disable */
                requests.push(
                  combineLatest(
                    of(identifier),
                    this._httpClient.get(
                      `https://www.calendarindex.com/api/v1/holidays?api_key=${environment.holidayApiKey}&country=${countryCode}&year=${startYear}`
                    )
                  ).pipe(
                    map((res) => {
                      this._requestCache[res[0]] = res[1];
                      return res[1];
                    })
                  )
                );
                /* tslint:enable */
            }
            startYear += 1;
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
