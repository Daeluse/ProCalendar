export namespace DateUtil {
    export function incrementDate(
        date: Date,
        count: number
    ): Date {
        // Re-Initialize the date to prevent in-line mutation from the caller
        date = new Date(date);
        date.setDate(date.getDate() + count);
        return date;
    }

    export function isValidDate(
        date: any
    ) {
        return date instanceof Date && !isNaN(date as any);
    }
}
