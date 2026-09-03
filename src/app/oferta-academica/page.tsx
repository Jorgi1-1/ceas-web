import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { CourseComparisonTable } from "@/components/ui/CourseComparisonTable";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
    title: "Oferta Académica: Diplomados en Puebla",
    description:
        "Los cuatro diplomados presenciales de CEAS en Puebla: quiroterapia integral, habilitación física funcional, masajes y terapeuta SPA, y manipulaciones vertebrales. Duración, plan de estudios y credencial de cada uno.",
    alternates: {
        canonical: "/oferta-academica",
    },
    openGraph: {
        title: "Oferta Académica: Diplomados en Puebla | CEAS",
        description:
            "Los cuatro diplomados presenciales de CEAS en Puebla: duración, plan de estudios y credencial de cada programa.",
            images: OG_IMAGES,
    },
};

/**
 * `ItemList` en vez de repetir los `Course` completos: cada diplomado ya publica
 * su propio nodo Course en su página, y este índice sólo declara el orden y las
 * referencias. Duplicar los cursos aquí crearía entidades competidas.
 */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Oferta académica de CEAS",
    "itemListElement": courses.map((course, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `${SITE_URL}/oferta-academica/${course.slug}`,
        "name": course.title,
    })),
};

export default function OfertaAcademicaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-bg-light font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Banner Superior Standard */}
            <div className="relative w-full h-[250px] min-h-[250px] md:h-[350px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/Sala CEAS.JPG"
                        alt="Aulas del Centro de Estudios Avanzados en Salud CEAS en Puebla"
                        fill
                        sizes="100vw"
                        className="object-cover blur-[4px] md:blur-[6px] scale-110 opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center animate-fade-in-up mt-8 md:mt-0">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="top bottom+=20%"
                        scrollEnd="bottom bottom-=20%"
                        stagger={0.03}
                        as="h1"
                        textClassName="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-6"
                    >
                        Oferta Académica
                    </ScrollFloat>
                    <div className="h-1.5 w-24 bg-secondary rounded-full shadow-sm"></div>
                </div>
            </div>

            <Breadcrumbs items={[{ label: "Oferta Académica" }]} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-14 md:pt-16 pb-8">
                {/* Respuesta directa: qué encuentra el visitante en esta página. */}
                <div className="max-w-[76ch] mb-14 md:mb-20 scroll-animate">
                    <h2 className="text-[26px] md:text-[32px] font-bold text-[#1a1a1a] leading-[1.25] mb-5">
                        ¿Qué diplomados imparte CEAS?
                    </h2>
                    <p className="text-[#404040] text-[17px] md:text-[18px] leading-[1.7]">
                        CEAS imparte cuatro diplomados presenciales en Puebla, todos con
                        clases un día a la semana y duraciones de 8 a 22 meses:
                        Quiroterapia Integral, Habilitación Física Funcional, Masajes y
                        Terapeuta SPA, y Manipulaciones Vertebrales Avanzadas. No se
                        requiere experiencia previa y el único requisito de escolaridad
                        es secundaria terminada. Los programas de Habilitación Física
                        Funcional y Terapeuta SPA otorgan diploma con validez oficial
                        ante la SEP.
                    </p>
                </div>

                <div className="mb-14 md:mb-20 scroll-animate">
                    <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] mb-6">
                        ¿Cuánto dura cada diplomado y qué credencial otorga?
                    </h2>
                    <CourseComparisonTable courses={courses} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {courses.map((course, idx) => (
                        <div
                            key={course.id}
                            className="scroll-animate h-full"
                            style={{ transitionDelay: `${Math.min(idx, 3) * 90}ms` }}
                        >
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16 scroll-animate scroll-delay-200">
                    <Link
                        href="/proximos-cursos"
                        className="group btn btn-secondary w-full md:w-auto inline-flex items-center"
                    >
                        <Calendar className="w-5 h-5 mr-2" />
                        Ver fechas de próximos inicios
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
