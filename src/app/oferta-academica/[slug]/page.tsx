import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, CheckCircle2, Award } from "lucide-react";
import { courses } from "@/data/courses";
import CurriculumAccordion from "@/components/ui/CurriculumAccordion";
import SidebarUrgency from "@/components/ui/SidebarUrgency";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CourseCard } from "@/components/ui/CourseCard";
import { getSiteConfig } from "@/lib/getSiteConfig";
import { formatDate } from "@/lib/formatDate";

interface CoursePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);
    if (!course) return {};

    return {
        title: `${course.title} en Puebla | Diplomado`,
        description: `${course.shortDescription} Estudia en Puebla y obtén tu diploma oficial.`,
        openGraph: {
            title: `${course.title} en Puebla | CEAS`,
            description: `${course.shortDescription} Únete a nuestro diplomado en Puebla.`,
            url: `https://ceas.com.mx/oferta-academica/${course.slug}`,
            images: [
                {
                    url: course.imagePath,
                    alt: course.title,
                }
            ],
        },
    };
}

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);
    const siteConfig = await getSiteConfig();

    if (!course) {
        notFound();
    }

    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title,
        "description": course.shortDescription,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "CEAS - Centro de Estudios Avanzados en Salud",
            "sameAs": "https://ceas.com.mx"
        },
        "educationalCredentialAwarded": course.rvoe ? `Diploma Oficial avalado por la SEP con RVOE: ${course.rvoe}` : "Diploma de Formación en Quiroterapia Integral",
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Onsite",
            "duration": course.duration,
            "courseWorkload": course.frequency
        }
    };

    const relatedCourses = courses.filter((c) => c.slug !== slug).slice(0, 3);

    const descriptionParagraphs = course.description
        .split('\n\n')
        .filter(p => p.trim() !== '')
        .map(p => p.replace(/\*\*(.*?)\*\*/g, '$1')); // strip bold markers → clean text

    const instructorsList = [
        {
            name: "Dr. Sergio Tamayo Cuevas",
            role: "Médico cirujano, director académico",
            experience: "Cuenta con experiencia docente desde el año 2009"
        },
        {
            name: "Dr. Carlos Tamayo Cuevas",
            role: "Médico cirujano, diplomado en nutrición y habilitación física funcional",
            experience: "Con experiencia docente desde el año 2017"
        },
        {
            name: "LFT Juan David Ordoñez Herrera",
            role: "Licenciado en fisioterapia, diplomado en ciencias quirofísicas",
            experience: "Experiencia docente desde el año 2019"
        },
        {
            name: "Lic. Sandra Rodriguez Montenegro",
            role: "Licenciada en danza, diplomado en ciencias quirofisicas, diplomado en habilitación física funcional, certificación en vendaje neuromuscular",
            experience: "Experiencia docente desde el año 2017"
        },
        {
            name: "Lic. Ernesto Ríos Sánchez",
            role: "Licenciado en Quiropráctica, diplomado en terapia física y rehabilitación, especialidad en Espinología",
            experience: "Con experiencia docente desde el año 2018"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
            />

            {/* ═══════════════════════════════════════════════════════════════
                HERO – Full-bleed cinematic header
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative w-full h-[55vh] min-h-[460px] max-h-[600px] flex flex-col justify-end">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={course.imagePath}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"></div>
                </div>

                {/* Hero content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 md:pb-20 animate-fade-in-up">
                    {course.badge && (
                        <div className="mb-5 inline-flex items-center px-4 py-1.5 bg-[#0098D4] text-white text-[11px] font-bold rounded-full uppercase tracking-[0.08em]">
                            <Award className="w-3.5 h-3.5 mr-2" />
                            {course.badge}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.02em] mb-3 leading-[1.05]">
                        {course.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/75 font-normal max-w-2xl leading-relaxed">
                        {course.shortDescription}
                    </p>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Cursos", href: "/#oferta-educativa" },
                    { label: course.title }
                ]}
            />

            {/* ═══════════════════════════════════════════════════════════════
                MAIN LAYOUT – Two-column grid
            ═══════════════════════════════════════════════════════════════ */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                    {/* ── LEFT COLUMN (2/3) ── */}
                    <div className="lg:col-span-2 space-y-20">

                        {/* ─────────────────────────────────────────
                            SECTION: Acerca del Curso
                        ───────────────────────────────────────── */}
                        <section className="scroll-animate">
                            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#0f172a] tracking-[-0.02em] mb-8 leading-tight">
                                Acerca del curso
                            </h2>
                            <div className="space-y-5">
                                {descriptionParagraphs.map((paragraph, idx) => (
                                    <p key={idx} className="text-base md:text-[17px] text-[#475569] leading-[1.8]">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>

                        {/* ─────────────────────────────────────────
                            SECTION: Plan de Estudios (Accordion)
                        ───────────────────────────────────────── */}
                        <section className="scroll-animate">
                            <div className="mb-10">
                                <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#0f172a] tracking-[-0.02em] mb-3 leading-tight">
                                    Plan de Estudios
                                </h2>
                                <p className="text-base text-[#64748b] leading-relaxed">
                                    {course.curriculum.length} módulos diseñados para tu formación profesional integral.
                                </p>
                            </div>
                            <CurriculumAccordion curriculum={course.curriculum} />
                        </section>

                        {/* ─────────────────────────────────────────
                            SECTION: Aprenderás con Expertos
                        ───────────────────────────────────────── */}
                        <section className="scroll-animate">
                            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#0f172a] tracking-[-0.02em] mb-3 leading-tight">
                                Aprenderás con Expertos
                            </h2>
                            <p className="text-base text-[#64748b] leading-relaxed mb-10">
                                Instructores certificados con experiencia clínica real.
                            </p>

                            {/* Instructor cards */}
                            <div className="space-y-6">
                                {instructorsList.map((inst, idx) => (
                                    <div key={idx} className="relative bg-[#f8fafc] rounded-3xl overflow-hidden border border-[rgba(0,0,0,0.04)]">
                                        <div className="flex flex-col md:flex-row">
                                            {/* ESPACIO DE FOTOS (COMENTADO HASTA QUE SE TENGAN LAS FOTOS)
                                            <div className="relative w-full md:w-[220px] h-[260px] md:h-auto shrink-0 bg-gradient-to-br from-[#0098D4]/10 to-[#0098D4]/5 flex items-center justify-center overflow-hidden">
                                                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white/80 border-[3px] border-[#0098D4]/15 flex items-center justify-center">
                                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                                                        <circle cx="40" cy="26" r="14" fill="#0098D4" opacity="0.3" />
                                                        <circle cx="40" cy="26" r="11" stroke="#0098D4" strokeWidth="1.5" fill="none" opacity="0.5" />
                                                        <path d="M16 72C16 56.536 26.745 44 40 44C53.255 44 64 56.536 64 72" stroke="#0098D4" strokeWidth="1.5" fill="#0098D4" fillOpacity="0.15" strokeLinecap="round" />
                                                        <circle cx="40" cy="26" r="3" fill="#0098D4" opacity="0.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                            */}

                                            {/* Info */}
                                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                                <h3 className="text-xl md:text-2xl font-extrabold text-[#0f172a] tracking-[-0.01em] mb-2">
                                                    {inst.name}
                                                </h3>
                                                <p className="text-[15px] font-semibold text-[#0098D4] mb-3 leading-snug">
                                                    {inst.role}
                                                </p>
                                                <p className="text-[14px] text-[#64748b] leading-[1.6] mb-5 max-w-2xl">
                                                    {inst.experience}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-flex items-center text-[12px] font-medium text-[#0098D4] bg-[#0098D4]/8 px-3 py-1 rounded-full">
                                                        <CheckCircle2 className="w-3 h-3 mr-1.5" /> Experto
                                                    </span>
                                                    <span className="inline-flex items-center text-[12px] font-medium text-[#0098D4] bg-[#0098D4]/8 px-3 py-1 rounded-full">
                                                        <Award className="w-3 h-3 mr-1.5" /> Experiencia Docente
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* ── RIGHT COLUMN – Sticky Sidebar (1/3) ── */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28">
                            <SidebarUrgency course={course} />
                        </div>
                    </div>

                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                RELATED COURSES SECTION
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 bg-[#F8F7F4] border-t border-gray-100 scroll-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-[-0.02em] mb-10 text-center">
                        Otros diplomados relacionados
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedCourses.map((c) => (
                            <CourseCard key={c.id} course={c} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                FINAL CTA – Full-width conversion band
            ═══════════════════════════════════════════════════════════════ */}
            <section className="w-full bg-[#f8fafc] scroll-animate">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                    <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-[#0f172a] tracking-[-0.02em] mb-5 leading-tight">
                        ¿Listo para transformar tu carrera?
                    </h2>
                    <p className="text-base md:text-lg text-[#64748b] leading-relaxed mb-10 max-w-2xl mx-auto">
                        Únete a los egresados que ya trabajan en clínicas y spas de alto nivel, o que han emprendido su propio consultorio.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                        <a
                            href={`https://wa.me/522211502725?text=Hola%2C%20quiero%20inscribirme%20al%20diplomado%20en%20${encodeURIComponent(course.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary w-full sm:w-auto"
                        >
                            Solicitar información ahora
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                        <Link href="/proximos-cursos" className="btn btn-secondary w-full sm:w-auto">
                            <Calendar className="w-4 h-4 mr-2" />
                            Ver próximas fechas
                        </Link>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-3 text-[13px] text-[#64748b] font-medium">
                        <span className="flex items-center"><Calendar className="w-4 h-4 text-[#0098D4] mr-2" /> Próximo inicio: {formatDate(siteConfig.urgency.nextStartDate)}</span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                        <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#0098D4] mr-2" /> Espacios limitados</span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                        <span className="flex items-center"><Award className="w-4 h-4 text-[#0098D4] mr-2" /> Avalado por SEP</span>
                    </div>
                </div>
            </section>

        </div>
    );
}
