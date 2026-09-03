import { SITE_URL, googleBusinessProfile } from "@/config/site";
import type { Course } from "@/data/courses";
import { getFutureDates } from "@/lib/siteDates";

/**
 * Convierte una duración escrita para humanos ("15 meses") a ISO 8601 ("P15M").
 *
 * schema.org tipa `timeRequired` y `duration` como Duration; Google descarta el
 * valor cuando llega como texto libre, que es lo que enviábamos antes. Si el
 * formato no se reconoce devolvemos null y el campo se omite, en vez de emitir
 * un valor inválido que ensucie el schema.
 */
export function toIsoDuration(duration: string): string | null {
    const m = duration.trim().match(/^(\d+)\s*(mes|meses|año|años|semana|semanas)$/i);
    if (!m) return null;
    const n = m[1];
    const unit = m[2].toLowerCase();
    if (unit.startsWith("mes")) return `P${n}M`;
    if (unit.startsWith("año")) return `P${n}Y`;
    return `P${n}W`;
}

interface UpcomingEvent {
    courseLink?: string;
    dates?: string[];
}

/**
 * Construye el JSON-LD de un diplomado.
 *
 * Genera un `CourseInstance` por cada fecha de inicio futura en lugar de uno
 * genérico: son las fechas que la gente busca ("¿cuándo empieza?") y las que
 * permiten que el programa aparezca como curso con inicios próximos.
 */
export function buildCourseJsonLd(
    course: Course,
    upcomingEvents: UpcomingEvent[] = []
) {
    const coursePath = `/oferta-academica/${course.slug}`;

    const startDates = getFutureDates(
        upcomingEvents.find((e) => e.courseLink === coursePath)?.dates ?? []
    );

    const location = {
        "@type": "Place",
        "name": "CEAS - Centro de Estudios Avanzados en Salud",
        "hasMap": googleBusinessProfile.mapsUrl,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Privada 5 B Sur #4718, Col. Huexotitla",
            "addressLocality": "Puebla",
            "addressRegion": "Puebla",
            "postalCode": "72534",
            "addressCountry": "MX",
        },
    };

    // Clases presenciales un día por semana: se expresa como Schedule con
    // frecuencia semanal, no como `courseWorkload`, que espera una Duration ISO.
    const courseSchedule = {
        "@type": "Schedule",
        "repeatFrequency": "P1W",
        "repeatCount": 1,
    };

    const instances = startDates.length
        ? startDates.map((startDate) => ({
              "@type": "CourseInstance",
              "courseMode": "Onsite",
              "startDate": startDate,
              "location": location,
              "courseSchedule": courseSchedule,
          }))
        : [
              {
                  "@type": "CourseInstance",
                  "courseMode": "Onsite",
                  "location": location,
                  "courseSchedule": courseSchedule,
              },
          ];

    const isoDuration = toIsoDuration(course.duration);

    return {
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": `${SITE_URL}${coursePath}#course`,
        "url": `${SITE_URL}${coursePath}`,
        "name": course.title,
        "description": course.shortDescription,
        "inLanguage": "es-MX",
        "dateModified": course.updatedAt,
        // Referencia al nodo del layout en vez de duplicar la organización:
        // así las IAs resuelven una sola entidad CEAS y no dos parecidas.
        "provider": { "@id": `${SITE_URL}/#organization` },
        ...(isoDuration ? { "timeRequired": isoDuration } : {}),
        "educationalCredentialAwarded": course.rvoe
            ? `Diploma Oficial avalado por la SEP con RVOE: ${course.rvoe}`
            : `Diploma de Formación en ${course.title}`,
        "hasCourseInstance": instances,
    };
}
