import { Holiday } from './holiday';

export type Calendar = Month[];

export class Month {
    public month: number;
    public year: number;
    public weeks: Week[] = [];

    constructor(date: Date) {
        this.month = date.getMonth();
        this.year = date.getFullYear();
    }
}

export type Week = Day[];

export class Day {
    public get date(): Date {
        return this._date;
    }

    public holidays: Holiday[] = [];
    public isWeekend = false;

    private _date: Date;

    constructor(date: string | number | Date) {
        this._date = new Date(date);
        this._processDateObject(this._date);
    }

    private _processDateObject(date: Date) {
        if (date.getDay() === 0 || date.getDay() === 6) {
            this.isWeekend = true;
        }
    }
}
