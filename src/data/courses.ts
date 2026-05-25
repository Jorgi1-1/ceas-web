export interface CurriculumPeriod {
    name: string;
    subjects: string[];
}

export interface Course {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    duration: string;
    frequency: string;
    imagePath: string;
    description: string;
    badge?: string;
    rvoe?: string;
    themeColor: string;
    curriculum: CurriculumPeriod[];
}

export const courses: Course[] = [
    {
        id: "3",
        slug: "habilitacion-fisica-funcional",
        title: "Habilitación Física Funcional",
        shortDescription: "Formación como auxiliar en rehabilitación para problemas neurológicos y lesiones adquiridas.",
        duration: "15 meses",
        frequency: "Clases un día a la semana",
        badge: "Avalado por la SEP",
        rvoe: "RVOE Acuerdo 16FT184 07/06/2016",
        themeColor: "#84a5c0",
        imagePath: "/HABILITACION.JPG",
        description: "Desarrollar competencias profesionales para mejorar la calidad de vida de los usuarios mediante un enfoque integral de prevención y rehabilitación.\n\nSé el eslabón clave en la recuperación funcional de pacientes. La **Habilitación Física** es la disciplina terapéutica de alto rendimiento enfocada en restaurar y mantener la independencia de personas afectadas por lesiones degenerativas, deportivas o neurológicas (como EVC y contracturas crónicas).\n\nAl concluir, se otorga **Diploma Oficial avalado por la Secretaría de Educación Pública (SEP)**.",
        curriculum: [
            {
                name: "Periodo 1",
                subjects: [
                    "Anatomía y fisiología.",
                    "Sistema óseo axial.",
                    "Sistema muscular: cráneo y tronco.",
                    "Historia clínica y exámenes físicos.",
                    "Masoterapia 1.",
                    "Anatomía del tren inferior.",
                    "Introducción a la quiroterapia.",
                    "Quiroterapia del tren inferior."
                ],
            },
            {
                name: "Periodo 2",
                subjects: [
                    "Sistema nervioso.",
                    "Fundamentos de inmunología.",
                    "Introducción a los agentes físicos naturales.",
                    "Agentes físicos naturales.",
                    "Masoterapia 2.",
                    "Anatomía del tren superior.",
                    "Quiroterapia del tren superior."
                ],
            },
            {
                name: "Periodo 3",
                subjects: [
                    "Crecimiento y desarrollo.",
                    "Adaptación del entorno.",
                    "Nosología y clínica articular.",
                    "Mecanoterapia.",
                    "Ejercicio terapéutico.",
                    "Masaje terapéutico.",
                    "Manipulación vertebral 1.",
                    "Vendajes elásticos."
                ],
            },
            {
                name: "Periodo 4",
                subjects: [
                    "Ética profesional.",
                    "Ley general de discapacidad.",
                    "Nosología y clínica de columna.",
                    "Radiología.",
                    "Digitopresión.",
                    "Manipulación vertebral 2.",
                    "Prácticas clínicas."
                ],
            },
        ],
    },
    {
        id: "1",
        slug: "quiroterapia-integral",
        title: "Quiroterapia Integral",
        shortDescription: "Formación integral en quiroterapia.",
        duration: "22 meses",
        frequency: "Clases un día a la semana",
        badge: "",
        themeColor: "#00B4D8",
        imagePath: "/QUIROTERAPIAA.jpg",
        description: "Alcanza la excelencia en terapia manual. Nuestro programa avanzado de Quiroterapia Integral combina **manipulaciones articulares, tratamientos de liberación miofascial y métodos de habilitación física;** enfocándose en solucionar afecciones neuromusculoesqueléticas complejas.\n\n**Durante 22 meses (un día a la semana),** adquirirás las competencias fundamentales en anatomía clínica, patología y tratamientos mediante **hidroterapia, masajes técnicos y manipulaciones articulares.** Te transformarás en un experto capaz de diagnosticar y rehabilitar lesiones deportivas, problemas musculares y disfunciones de la columna vertebral.\n\nGradúate con doble reconocimiento: Diploma en Habilitación Física Funcional y Diploma en Formación Integral en Quiro-terapia.",
        curriculum: [
            {
                name: "Primer Periodo",
                subjects: [
                    "Anatomía músculo-esquelética",
                    "Expediente clínico",
                    "Generalidades de anatomía y fisiología",
                    "Masoterapia 1 (Masaje relajante)",
                    "Anatomía del tren superior",
                    "Introducción a la Quiro-terapia",
                    "Quiro-terapia del tren superior",
                ],
            },
            {
                name: "Segundo Periodo",
                subjects: [
                    "Masoterapia 2 (Drenaje linfático)",
                    "Crecimiento y desarrollo",
                    "Fundamentos de inmunología",
                    "Modelos y marcos de referencia",
                    "Introducción a los agentes físicos",
                    "Manipulaciones vertebrales 1",
                ],
            },
            {
                name: "Tercer Periodo",
                subjects: [
                    "Agentes físicos naturales",
                    "Anatomía del tren inferior",
                    "Quiro-terapia del tren inferior",
                    "Digitopuntura",
                    "Manipulaciones vertebrales 2",
                    "Mecanoterapia",
                ],
            },
            {
                name: "Cuarto Periodo",
                subjects: [
                    "Nosología y clínica de columna",
                    "Masoterapia 3 (Masaje terapéutico)",
                    "Ejercicios Terapéuticos",
                    "Terapia con ventosas",
                    "Manipulaciones vertebrales 3",
                ],
            },
            {
                name: "Quinto Periodo",
                subjects: [
                    "Adaptación del entorno",
                    "Nosología y clínica articular",
                    "Manipulaciones vertebrales 4",
                    "Ley general de discapacidad",
                    "Nutrición",
                ],
            },
            {
                name: "Sexto Periodo",
                subjects: [
                    "Integración Terapéutica",
                    "Quiro-terapia Integral",
                    "Vendajes",
                    "Ética profesional",
                    "Prácticas profesionales",
                ],
            },
        ],
    },
    {
        id: "2",
        slug: "terapeuta-spa",
        title: "Terapeuta SPA",
        shortDescription: "Aplicación de Aceites Esenciales con Técnicas de Masaje.",
        duration: "9 meses",
        frequency: "Clases un día a la semana",
        badge: "Incorporado a la SEP",
        themeColor: "#9ea7d1",
        imagePath: "/MASAJE.png",
        description: "Domina el arte del bienestar y relájate con técnicas de vanguardia. Te llevamos de la mano por el mágico mundo del SPA en un curso intensivo enfocado en la aplicación profesional de Aceites Esenciales y maniobras terapéuticas de masaje corporal profundo.\n\nAl graduarte tras **9 meses de instrucción especializada**, estarás altamente calificado(a) para fundar tu propio negocio, cabina de bienestar o integrarte a spas de clase mundial. Aprenderás protocolos rigurosos de higiene, y a aliviar la tensión física y emocional de tus futuros clientes.\n\n**Aval avalado por la SEP** al terminar tus estudios.",
        curriculum: [
            {
                name: "Módulo 1",
                subjects: [
                    "Introducción y protocolo SPA",
                    "Anatomía ósea",
                    "Anatomía y patología de la piel",
                    "Historia Clínica",
                    "Masaje Relajante SPA",
                ],
            },
            {
                name: "Módulo 2",
                subjects: [
                    "Introducción a los aceites esenciales",
                    "Clasificación de los aceites esenciales",
                    "Anatomía topográfica",
                    "Masaje con aromas",
                    "Masaje con pindas",
                    "Masaje deep tissue",
                ],
            },
            {
                name: "Módulo 3",
                subjects: [
                    "Patología inflamatoria",
                    "Masaje con Piedras Calientes",
                    "Envolturas y Fangos",
                    "Masaje de Feet tense",
                    "Shiatsu en silla",
                ],
            },
        ],
    },
    {
        id: "4",
        slug: "manipulaciones-vertebrales",
        title: "Manipulaciones Vertebrales Avanzadas",
        shortDescription: "Aprende técnicas de manipulación de toda la columna vertebral y pelvis.",
        duration: "8 meses",
        frequency: "Clases un día a la semana",
        badge: "Diplomado",
        themeColor: "#009688",
        imagePath: "/MANIPULACION VERT.jpg",
        description: "Un Diplomado exclusivo para profesionales de la salud. A lo largo de **160 horas (8 meses)**, profundizarás en técnicas altamente especializadas y avanzadas para la manipulación y rectificación biomecánica de la columna vertebral y la articulación pélvica.\n\nEl programa aborda, de forma vanguardista, la biomecánica clínica a través de diagnósticos de *Síndrome de Subluxación*, inhibición fascial, y por supuesto, manipulación directa mediante la técnica *thrust*.\n\nIntegra al arsenal terapéutico de tu consultorio privado los procedimientos biomecánicos más buscados y consolida un estándar oro de tratamiento ortopédico.",
        curriculum: [
            {
                name: "Primer Cuatrimestre",
                subjects: [
                    "Historia y principios de las manipulaciones.",
                    "Síndrome de subluxación vertebral",
                    "Fijaciones articulares",
                    "Tratamientos post-isométricos, de fascias, inhibición muscular y el thrust.",
                    "Manipulaciones articulares de columna y pelvis.",
                    "Los iliacos y el sacro: Lesiones, diagnóstico y tratamiento, técnicas de ajustes.",
                    "Columna lumbar: Fisiología, biomecánica, patologías, pruebas ortopédicas, ajustes.",
                ],
            },
            {
                name: "Segundo Cuatrimestre",
                subjects: [
                    "Columna Torácica: Líneas de gravedad, diagnóstico y tratamiento de fascias, ajustes dorsales.",
                    "Columna cervical: Generalidades, movimientos vertebrales, tipos de dolor, patologías, pruebas especiales, ajustes desde occipital hasta C7.",
                ],
            },
        ],
    },
];
