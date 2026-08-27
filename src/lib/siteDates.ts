function parseDateOnly(dateString: string): Date | null {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return null;
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
}

function startOfToday(): Date {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
}

export function isFutureDate(dateString: string): boolean {
    const date = parseDateOnly(dateString);
    if (!date) return false;
    return date.getTime() >= startOfToday().getTime();
}

export function getFutureDates(dates: string[]): string[] {
    return dates.filter(isFutureDate);
}
