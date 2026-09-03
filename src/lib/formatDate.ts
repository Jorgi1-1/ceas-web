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

/**
 * Fecha larga con año y sin día de la semana: "3 de septiembre de 2026".
 * Se usa para las marcas de "Actualizado" visibles, donde el año es justo el
 * dato que importa — una fecha sin año no comunica vigencia.
 */
export function formatLongDate(dateString: string): string {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return dateString;
    const [year, month, day] = dateString.split("-").map(Number);
    return new Intl.DateTimeFormat("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(year, month - 1, day));
}
