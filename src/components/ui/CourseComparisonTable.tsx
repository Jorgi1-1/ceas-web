import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";

interface CourseComparisonTableProps {
    courses: Course[];
}

export function CourseComparisonTable({ courses }: CourseComparisonTableProps) {
    return (
        <>
            {/* Mobile: stacked cards — a wide comparison table never reads well on a phone */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
                {courses.map((course, idx) => (
                    <div
                        key={course.id}
                        className="scroll-animate rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                        style={{ transitionDelay: `${Math.min(idx, 3) * 90}ms` }}
                    >
                        <h4 className="font-bold text-[#0f172a] text-[15px] leading-snug mb-3">
                            {course.title}
                        </h4>
                        <dl className="space-y-2 text-[14px]">
                            <div className="flex justify-between gap-4">
                                <dt className="text-[#64748b]">Duración</dt>
                                <dd className="text-[#334155] font-medium text-right">{course.duration}</dd>
                            </div>
                            <div className="flex justify-between gap-4">
                                <dt className="text-[#64748b]">Frecuencia</dt>
                                <dd className="text-[#334155] font-medium text-right">{course.frequency}</dd>
                            </div>
                            <div className="flex justify-between gap-4">
                                <dt className="text-[#64748b]">Credencial</dt>
                                <dd className="text-right">
                                    {course.badge ? (
                                        <span className="inline-flex items-center gap-1.5 text-[#007CAD] font-semibold">
                                            <Award className="w-4 h-4 shrink-0" />
                                            {course.badge}
                                        </span>
                                    ) : (
                                        <span className="text-[#64748b]">&mdash;</span>
                                    )}
                                </dd>
                            </div>
                        </dl>
                        <Link
                            href={`/oferta-academica/${course.slug}`}
                            className="group mt-4 inline-flex items-center text-[#007CAD] font-semibold text-[14px]"
                        >
                            Ver plan
                            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Desktop/tablet: full comparison table */}
            <div className="hidden md:block rounded-2xl border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden">
                <table className="w-full border-collapse bg-white text-left">
                    <thead>
                        <tr className="bg-[#f8fafc]">
                            <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#64748b]">Programa</th>
                            <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#64748b]">Duración</th>
                            <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#64748b]">Frecuencia</th>
                            <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#64748b]">Credencial</th>
                            <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#64748b]"><span className="sr-only">Ver plan</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id} className="border-t border-black/[0.04] hover:bg-[#f8fafc] transition-colors duration-300">
                                <td className="px-6 py-4 font-bold text-[#0f172a] text-[15px] leading-snug">
                                    {course.title}
                                </td>
                                <td className="px-6 py-4 text-[#334155] text-[14px] whitespace-nowrap">
                                    {course.duration}
                                </td>
                                <td className="px-6 py-4 text-[#334155] text-[14px]">
                                    {course.frequency}
                                </td>
                                <td className="px-6 py-4 text-[14px]">
                                    {course.badge ? (
                                        <span className="inline-flex items-center gap-1.5 text-[#007CAD] font-semibold">
                                            <Award className="w-4 h-4 shrink-0" />
                                            {course.badge}
                                        </span>
                                    ) : (
                                        <span className="text-[#64748b]">&mdash;</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap">
                                    <Link
                                        href={`/oferta-academica/${course.slug}`}
                                        className="group inline-flex items-center text-[#007CAD] font-semibold text-[14px]"
                                    >
                                        Ver plan
                                        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
