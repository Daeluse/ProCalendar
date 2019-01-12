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
    public set date(date: Date) {
        if (date) {
            this._date = date;
            this._processDateObject(date);
        }
    }
    
    public get date(): Date {
        return this._date;
    }

    public isWeekend: boolean = false;

    private _date: Date;

    constructor(date: string | number | Date) {
        this.date = new Date(date);
    }

    private _processDateObject(date: Date) {
        if (date.getDay() === 0 || date.getDay() === 6) {
            this.isWeekend = true;
        }
    }
}