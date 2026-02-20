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
    themeColor: string;
    curriculum: CurriculumPeriod[];
}

export const courses: Course[] = [
    {
        id: "1",
        slug: "quiroterapia-integral",
        title: "Quiroterapia Integral",
        shortDescription: "Formación integral en quiroterapia.",
        duration: "20 meses",
        frequency: "Clases un día a la semana",
        badge: "Avalado por la SEP",
        themeColor: "#00B4D8",
        imagePath: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop",
        description: "Este conjunto de métodos terapéuticos como: quiro-terapia, diversas técnicas de masaje, medios físicos, habilitación física y ejercicios terapéuticos, contribuye a tratar problemas musculares, articulares y del sistema nervioso relacionados a la columna vertebral.\n\nEl quiroterapeuta se encarga del diagnóstico, prevención y tratamiento del sistema músculo - esquelético y los efectos de los desórdenes de éstos sobre el sistema nervioso y el aparato locomotor.\n\nDirigido a cualquier persona interesada en formarse como profesional en terapia manual, para rehabilitación de personas con problemas musculares, lesiones deportivas, que hayan sufrido lesiones del sistema neuro músculo esquelético como contracturas, esguinces, parálisis faciales, dolores de espalda y problemas del sistema nervioso relacionados a la columna vertebral.\n\nCon duración de 1 año 8 meses (20 meses), asistiendo a clases un día a la semana. Durante este tiempo te capacitaremos con los elementos necesarios para que conozcas el funcionamiento del cuerpo humano, cómo se afecta y cómo puedes contribuir a su recuperación por medio de las diferentes técnicas terapéuticas como manipulaciones articulares y vertebrales, hidroterapia, masaje y actividad física entre otras.\n\nAl terminar recibes diploma en Habilitación Física Funcional avalado por la SEP y diploma en Formación integral en Quiro-terapia.",
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
                    "Radiología 1",
                ],
            },
            {
                name: "Quinto Periodo",
                subjects: [
                    "Adaptación del entorno",
                    "Nosología y clínica articular",
                    "Manipulaciones vertebrales 4",
                    "Radiología 2",
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
        imagePath: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop",
        description: "Curso Terapeuta SPA - Aplicación de Aceites Esenciales con Técnicas de Masaje.\n\nTe llevamos de la mano por el mágico mundo de las terapias SPA. Al finalizar el curso, contarás con el conocimiento y las habilidades necesarias para trabajar en un SPA o trabajar por cuenta propia en tu cabina SPA, podrás aplicar diversas técnicas de masaje para propiciar un bienestar físico y emocional en el usuario, supervisando el cumplimiento de las indicaciones y observando las contra-indicaciones de cada técnica, los estándares de seguridad, higiene, sanidad y el cuidado de las condiciones físicas de la persona que permita lograr un estado integral de bienestar.\n\nDuración de nueve meses con clases un día a la semana. Al concluir recibes diploma en Aplicación de Aceites esenciales con Técnicas de Masaje avalado por la SEP.",
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
        id: "3",
        slug: "habilitacion-fisica-funcional",
        title: "Habilitación Física Funcional",
        shortDescription: "Formación como auxiliar en rehabilitación para problemas neurológicos y lesiones adquiridas.",
        duration: "15 meses",
        frequency: "Clases un día a la semana",
        badge: "Avalado por la SEP",
        themeColor: "#84a5c0",
        imagePath: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
        description: "Habilitación Física Funcional es el conjunto de tratamientos encaminados a eliminar o reducir un déficit o disfunción física de las personas con discapacidad, así como mantener habilidades adquiridas en aquellos casos en los que por sus características especiales así lo requieran, con el objeto de lograr el mayor grado posible de autonomía personal e integración social.\n\nDirigido a cualquier persona interesada en formarse como auxiliar en rehabilitación en personas con problemas neurológicos, lesiones deportivas o adquiridas, que hayan sufrido lesiones del sistema neuro musculo esquelético como contracturas, esguinces, parálisis faciales, EVC, realizando tratamientos por medio de Quinesioterapia, masaje, medios físicos y ejercicios terapéuticos.\n\nDuración de quince meses, clases un día a la semana. Al concluir recibes diploma en Habilitación Física Funcional avalado por la SEP.",
        curriculum: [
            {
                name: "Módulo 1",
                subjects: [
                    "Historia Clínica",
                    "Anatomía humana 1",
                    "Liberación miofascial",
                    "Anatomía de Miembros Inferiores",
                    "Quinesioterapia de Miembros inferiores",
                    "Crecimiento y desarrollo",
                ],
            },
            {
                name: "Módulo 2",
                subjects: [
                    "Anatomía y fisiología",
                    "Puntos gatillo",
                    "Anatomía de Miembros Superiores",
                    "Quinesioterapia de Miembros Superiores",
                    "Modelos y Marcos de referencia",
                    "Introducción a los agentes físicos",
                ],
            },
            {
                name: "Módulo 3",
                subjects: [
                    "Ley general de discapacidad",
                    "Patología de inflamación",
                    "PNF Facilitación neuro propioceptiva",
                    "Actividad Física 1",
                    "Masaje transverso",
                    "Agentes físicos 1",
                ],
            },
            {
                name: "Módulo 4",
                subjects: [
                    "Terapia ocupacional",
                    "Adaptación del entorno",
                    "Active release technique",
                    "Actividad física 2",
                    "Ejercicios neurodinámicos",
                    "Mecanoterapia",
                ],
            },
            {
                name: "Módulo 5",
                subjects: [
                    "Ergonomía",
                    "Agentes físicos 2",
                    "Elaboración de programas de TX",
                    "Seguimiento de programas de TX",
                    "Prácticas Profesionales",
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
        imagePath: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2000&auto=format&fit=crop",
        description: "En este curso de 8 meses (160 horas) de duración, te enseñaremos técnicas de manipulación de toda la columna vertebral y pelvis, utilizando métodos de thrust, técnicas funcionales, de distracción, mio-fasciales, etc.\n\nAl finalizar tendrás las capacidades, habilidades y destrezas necesarias para brindar un gran servicio de calidad a tus pacientes y ayudar en sus procesos de recuperación.\n\nDiplomado dirigido a profesionales de la salud con conocimientos anatómicos y patológicos del ser humano, que buscan agregar nuevos elementos a su arsenal terapéutico.",
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
