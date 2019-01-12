export interface Holiday {
    date: Date;
    end: Date;
    name: string;
    start: Date;
    type: string;
}

export interface HolidayResponse {
    meta: { [key: string]: any };
    response: {
        holidays: Holiday[];
    };
}
