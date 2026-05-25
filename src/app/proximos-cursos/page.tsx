import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight, Award, Star, Users } from "lucide-react";
import ScrollFloat from "@/components/ui/ScrollFloat";

const upcomingEvents = [
    {
        id: "quiroterapia",
        title: "Formación integral en Quiroterapia",
        dates: [
            "Jueves 16 de Abril",
            "Sábado 2 de Mayo"
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
            "Sábado 2 de Mayo"
        ],
        duration: "8 meses",
        frequency: "Clases 1 día a la semana",
        schedule: "9:30 am a 2:30 pm",
        modality: "Presencial",
        imagePath: "/MANIPULACION VERT.jpg",
        courseLink: "/oferta-academica/manipulaciones-vertebrales"
    },
    {
        id: "spa",
        title: "Diplomado SPA",
        dates: [
            "Miércoles 29 de Abril"
        ],
        duration: "9 meses",
        frequency: "Clases 1 día a la semana",
        schedule: "10:00 am a 2:30 pm",
        modality: "Presencial",
        imagePath: "/MASAJE.png",
        courseLink: "/oferta-academica/terapeuta-spa"
    }
];

const galleryImages = [
    { src: "/HABILITACION.JPG", alt: "Práctica de Habilitación Física" },
    { src: "/QUIROTERAPIAA.jpg", alt: "Sesión de Quiroterapia" },
    { src: "/SPA.png", alt: "Técnicas de SPA" },
    { src: "/MASAJE.png", alt: "Masaje Terapéutico" },
    { src: "/MANIPULACION VERT.jpg", alt: "Manipulaciones Vertebrales" },
];

export default function ProximosCursosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* ═══════════════════════════════════════════════════════════════
                HERO BANNER
            ═══════════════════════════════════════════════════════════════ */}
            <div className="relative w-full h-[250px] min-h-[250px] md:h-[350px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/Sala CEAS.JPG"
                        alt="Background"
                        fill
                        className="object-cover blur-[4px] md:blur-[6px] scale-110 opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0098D4]/30 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center animate-fade-in-up mt-8 md:mt-0">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='top bottom+=20%'
                        scrollEnd='bottom bottom-=20%'
                        stagger={0.03}
                        as="h1"
                        textClassName="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg mb-4"
                    >
                        Próximos Cursos
                    </ScrollFloat>
                    <div className="h-1 w-20 bg-[#0098D4] rounded-full mb-4"></div>
                    <p className="text-lg md:text-xl text-white/85 font-normal tracking-wide drop-shadow-sm max-w-xl leading-relaxed">
                        Reserva tu lugar y transforma tu futuro profesional
                    </p>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                COURSE CARDS — Mirroring SidebarUrgency design language
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section header */}
                    <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 scroll-animate">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0098D4]/8 text-[#0098D4] font-bold tracking-widest uppercase text-[11px] mb-4">
                            Calendario Académico
                        </span>
                        <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0f172a] tracking-[-0.02em] mb-4">
                            Fechas de Próximo Inicio
                        </h2>
                        <p className="text-[15px] md:text-[16px] text-[#64748b] leading-relaxed">
                            Consulta las opciones disponibles y elige el programa que impulse tu carrera.
                        </p>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col scroll-animate"
                            >
                                {/* Card header — Blue band */}
                                <div className="bg-[#0098D4] px-6 py-5 relative overflow-hidden">
                                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                    <h3 className="text-lg font-extrabold text-white tracking-[-0.01em] relative z-10 leading-snug">
                                        {event.title}
                                    </h3>
                                </div>

                                {/* Card body */}
                                <div className="p-6 flex flex-col flex-grow">

                                    {/* Start dates */}
                                    <div className="mb-5">
                                        <p className="text-[11px] text-[#94a3b8] uppercase tracking-[0.08em] font-semibold mb-2.5">
                                            Inicios de clases
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {event.dates.map((date, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#0098D4]/6 border border-[#0098D4]/12 text-[#0098D4] text-[13px] font-semibold"
                                                >
                                                    <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                                                    {date}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Meta rows — SidebarUrgency pattern */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3.5 p-3 bg-[#f8fafc] rounded-xl">
                                            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] shrink-0">
                                                <Calendar className="w-4 h-4 text-[#0098D4]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-[#94a3b8] uppercase tracking-[0.08em] font-semibold">Frecuencia</p>
                                                <p className="text-[#0f172a] font-bold text-[14px]">{event.frequency}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3.5 p-3 bg-[#f8fafc] rounded-xl">
                                            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] shrink-0">
                                                <Clock className="w-4 h-4 text-[#0098D4]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-[#94a3b8] uppercase tracking-[0.08em] font-semibold">Duración Total</p>
                                                <p className="text-[#0f172a] font-bold text-[14px]">{event.duration}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3.5 p-3 bg-[#f8fafc] rounded-xl">
                                            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] shrink-0">
                                                <MapPin className="w-4 h-4 text-[#0098D4]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-[#94a3b8] uppercase tracking-[0.08em] font-semibold">Modalidad</p>
                                                <p className="text-[#0f172a] font-bold text-[14px]">{event.modality}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3.5 p-3 bg-[#f8fafc] rounded-xl">
                                            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] shrink-0">
                                                <Clock className="w-4 h-4 text-[#0098D4]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-[#94a3b8] uppercase tracking-[0.08em] font-semibold">Horario</p>
                                                <p className="text-[#0f172a] font-bold text-[14px]">{event.schedule}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA — Unified with Homepage */}
                                    <div className="mt-auto space-y-3">
                                        <Link
                                            href={event.courseLink}
                                            className="group btn btn-primary w-full justify-center text-[14px]"
                                        >
                                            Ver plan de estudios
                                            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                                        </Link>
                                        <a
                                            href={`https://wa.me/522211502725?text=${encodeURIComponent(`Hola, quiero información sobre ${event.title}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-secondary w-full justify-center text-[14px]"
                                        >
                                            Solicitar información
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                PROMOTION BANNER — Clean, on-brand
            ═══════════════════════════════════════════════════════════════ */}
            <section className="bg-white py-16 md:py-20 border-y border-slate-200/80">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0098D4]/8 text-[#0098D4] text-[11px] font-bold tracking-widest uppercase mb-6">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Oferta Especial
                    </div>

                    <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-[#0f172a] tracking-[-0.02em] mb-6 leading-tight">
                        Promoción por tiempo limitado
                    </h2>

                    <div className="inline-block bg-[#0098D4]/5 border border-[#0098D4]/15 rounded-xl px-8 py-6 mb-10">
                        <p className="text-xl md:text-2xl text-[#0f172a] font-bold mb-1">
                            25% de beca en colegiatura
                        </p>
                        <p className="text-[15px] text-[#64748b] font-normal">
                            en cursos mayores a 8 meses de duración
                        </p>
                    </div>

                    <div>
                        <Link
                            href="/contacto"
                            className="group btn btn-primary btn-lg"
                        >
                            Solicitar información
                            <ArrowRight className="w-5 h-5 ml-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                GALLERY — "Nuestra Práctica Profesional"
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Gallery header */}
                    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 scroll-animate">
                        <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0f172a] tracking-[-0.02em] mb-4">
                            Nuestra Práctica Profesional
                        </h2>
                        <p className="text-[15px] md:text-[16px] text-[#64748b] leading-relaxed">
                            Más del 60% de nuestra formación es práctica clínica real. Conoce nuestras instalaciones y metodología.
                        </p>
                    </div>

                    {/* Image grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 scroll-animate">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="group aspect-square relative rounded-xl overflow-hidden border border-slate-200/80 bg-white"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
