export function formatDate(dateString: string, includeWeekday: boolean = true): string {
    if (!dateString) return "";
    // Fallback for legacy strings like "Sábado 6 de junio"
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return dateString;
    
    const [year, month, day] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    if (includeWeekday) {
        options.weekday = 'long';
    }
    
    let formatted = new Intl.DateTimeFormat('es-MX', options).format(date);
    // Capitalize first letter and remove comma that Intl sometimes adds after weekday
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1).replace(/,/g, '');
    
    return formatted;
}
