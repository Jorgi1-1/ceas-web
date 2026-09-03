/**
 * Origen canónico del sitio. Vercel redirige el ápex (ceas.com.mx) a www con un
 * 307, así que www es la versión que se sirve: canonicals, sitemap, robots y los
 * @id de JSON-LD deben apuntar aquí para no partir la identidad ante los bots.
 */
export const SITE_URL = "https://www.ceas.com.mx";

/**
 * Ficha de Google Business Profile de CEAS.
 *
 * `mapsUrl` usa la forma por CID en vez de la URL larga de la barra del
 * navegador: la larga arrastra coordenadas de cámara, zoom y parámetros de
 * sesión que cambian entre visitas, mientras que el CID identifica la ficha y
 * no caduca.
 *
 * Las coordenadas son las del pin de la ficha, no las del centro del mapa.
 */
export const googleBusinessProfile = {
    mapsUrl: "https://maps.google.com/?cid=3574110266178767251",
    latitude: 19.0273174,
    longitude: -98.2138006,
};

export const siteConfig = {
    // Configuración general de fechas y urgencia para banners
    urgency: {
        nextStartDate: "2026-06-06",
        availableSpots: 2,
        totalSpots: 10,
        discountPercentage: 25,
    },

    // Lista de próximos cursos para la página de "Próximos Inicios"
    upcomingEvents: [
        {
            id: "habilitacion",
            title: "Habilitación Física Funcional",
            dates: [
                "2026-06-06",
                "2026-07-03" // Reemplazar por fechas futuras
            ],
            duration: "15 meses",
            frequency: "Clases 1 día a la semana",
            schedule: "9:00 am a 3:00 pm",
            modality: "Presencial",
            imagePath: "/HABILITACION.JPG",
            courseLink: "/oferta-academica/habilitacion-fisica-funcional"
        },
        {
            id: "spa",
            title: "Diplomado SPA",
            dates: [
                "2026-07-01"
            ],
            duration: "9 meses",
            frequency: "Clases 1 día a la semana",
            schedule: "10:00 am a 2:30 pm",
            modality: "Presencial",
            imagePath: "/MASAJE.png",
            courseLink: "/oferta-academica/terapeuta-spa"
        },
        {
            id: "quiroterapia",
            title: "Formación integral en Quiroterapia",
            dates: [
                "2026-06-06",
                "2026-07-03"
            ],
            duration: "22 meses",
            frequency: "Clases 1 día a la semana",
            schedule: "9:00 am a 3:00 pm",
            modality: "Presencial",
            imagePath: "/QUIROTERAPIAA.jpg",
            courseLink: "/oferta-academica/quiroterapia-integral"
        },
        {
            id: "manipulaciones",
            title: "Manipulaciones Vertebrales Avanzadas",
            dates: [
                "2026-08-04"
            ],
            duration: "8 meses",
            frequency: "Clases 1 día a la semana",
            schedule: "9:30 am a 2:30 pm",
            modality: "Presencial",
            imagePath: "/MANIPULACION VERT.jpg",
            courseLink: "/oferta-academica/manipulaciones-vertebrales"
        }
    ]
};
