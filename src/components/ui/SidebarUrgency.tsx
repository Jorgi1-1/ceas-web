"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Target, Star, Award } from "lucide-react";
import type { Course } from "@/data/courses";
import { useSiteConfig } from "@/context/SiteConfigContext";

interface SidebarUrgencyProps {
    course: Course;
}

export default function SidebarUrgency({ course }: SidebarUrgencyProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const siteConfig = useSiteConfig();
    const { availableSpots, totalSpots, discountPercentage } = siteConfig.urgency;
    const progressPercentage = ((totalSpots - availableSpots) / totalSpots) * 100;

    return (
        <div className="rounded-3xl border border-[rgba(0,0,0,0.06)] bg-white/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">

            {/* ── Header ── */}
            <div className="bg-[#0098D4] px-7 py-6 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-extrabold text-white tracking-[-0.01em] relative z-10">
                    Inscripciones Abiertas
                </h3>
                <p className="text-white/70 text-[13px] mt-1 relative z-10">
                    Asegura tu lugar para el próximo grupo
                </p>
            </div>

            {/* ── Body ── */}
            <div className="p-7 space-y-5">

                {/* Course meta */}
                <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3.5 bg-[#f8fafc] rounded-xl">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                            <Calendar className="w-5 h-5 text-[#0098D4]" />
                        </div>
                        <div>
                            <p className="text-[11px] text-[#94a3b8] uppercase tracking-[0.08em] font-semibold">Frecuencia</p>
                            <p className="text-[#0f172a] font-bold text-[15px]">{course.frequency}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-3.5 bg-[#f8fafc] rounded-xl">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                            <Clock className="w-5 h-5 text-[#0098D4]" />
                        </div>
                        <div>
                            <p className="text-[11px] text-[#94a3b8] uppercase tracking-[0.08em] font-semibold">Duración Total</p>
                            <p className="text-[#0f172a] font-bold text-[15px]">{course.duration}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-3.5 bg-[#f8fafc] rounded-xl">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                            <User className="w-5 h-5 text-[#0098D4]" />
                        </div>
                        <div>
                            <p className="text-[11px] text-[#94a3b8] uppercase tracking-[0.08em] font-semibold">Modalidad</p>
                            <p className="text-[#0f172a] font-bold text-[15px]">Presencial</p>
                        </div>
                    </div>
                </div>

                {/* SEP Badge */}
                {course.badge && (
                    <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0098D4]/6 border border-[#0098D4]/12 text-[#0098D4]">
                        <Award className="w-4 h-4" />
                        <span className="text-[12px] font-bold uppercase tracking-[0.06em]">
                            Diploma {course.badge}
                        </span>
                    </div>
                )}

                {/* RVOE */}
                {course.rvoe && (
                    <p className="text-center text-[11px] text-[#64748b] font-medium italic -mt-2">
                        {course.rvoe}
                    </p>
                )}

                {/* ── Urgency Widget (from Homepage) ── */}
                <div className="border border-[rgba(0,0,0,0.06)] rounded-xl p-4 space-y-3 bg-[#fefefe]">
                    <div className="flex items-center text-[13px] text-[#334155] font-medium">
                        <Target className="w-4 h-4 text-[#0098D4] mr-2 shrink-0" />
                        Solo <strong className="mx-1">{availableSpots} espacios</strong> disponibles
                    </div>
                    <div className="flex items-center text-[13px] text-[#334155] font-medium">
                        <Star className="w-4 h-4 text-[#0098D4] mr-2 shrink-0 fill-[#0098D4]" />
                        {discountPercentage}% de descuento hasta el cierre
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                        {mounted && (
                            <div
                                className="h-full bg-gradient-to-r from-[#0098D4] to-[#00b4d8] rounded-full progress-fill"
                                style={{ "--progress-width": `${progressPercentage}%` } as React.CSSProperties}
                            ></div>
                        )}
                    </div>
                    <p className="text-[11px] text-[#94a3b8] text-right">{totalSpots - availableSpots} de {totalSpots} espacios ocupados</p>
                </div>

                {/* ── CTAs ── */}
                <a
                    href={`https://wa.me/522211502725?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20${encodeURIComponent(course.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full justify-center"
                >
                    Solicitar información
                    <ArrowRight className="w-5 h-5 ml-2" />
                </a>

                <Link
                    href="/proximos-cursos"
                    className="btn btn-secondary w-full justify-center"
                >
                    <Calendar className="w-4 h-4 mr-2" />
                    Próximas Fechas
                </Link>

                <p className="text-center text-[12px] text-[#94a3b8] leading-relaxed px-2">
                    Un asesor educativo se pondrá en contacto contigo en menos de 24 horas.
                </p>
            </div>
        </div>
    );
}
