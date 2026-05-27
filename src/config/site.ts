export const siteConfig = {
    // Configuración general de fechas y urgencia para banners
    urgency: {
        nextStartDate: "6 de junio",
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
                "Sábado 6 de junio",
                "Viernes 3 de julio" // Reemplazar por fechas futuras
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
                "Miércoles 1 de julio"
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
                "Sábado 6 de junio",
                "Viernes 3 de julio"
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
                "Martes 4 de agosto"
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
