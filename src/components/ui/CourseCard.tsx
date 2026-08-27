import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar } from 'lucide-react';
import { Course } from '@/data/courses';

export interface CourseCardProps {
    course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <Link href={`/oferta-academica/${course.slug}`} className="group block h-full">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full border border-black/[0.04] hover:border-[#0098D4]/15 flex flex-col group-hover:-translate-y-1">
                {/* Image container with badge overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={course.imagePath}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>

                    {/* Badge overlay — unified token */}
                    {course.badge && (
                        <div className="absolute top-4 left-4 z-10">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#007CAD] text-[10px] tracking-[0.1em] font-semibold uppercase rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                                {course.badge}
                            </span>
                        </div>
                    )}
                </div>

                {/* Card body */}
                <div className="p-7 sm:p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#007CAD] transition-colors duration-300 leading-tight tracking-[-0.01em]">
                        {course.title}
                    </h3>

                    {course.rvoe && (
                        <p className="text-[#64748b] text-[11px] mb-5 font-medium italic">
                            {course.rvoe}
                        </p>
                    )}

                    <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-grow">
                        {course.shortDescription}
                    </p>

                    {/* Meta info — clean bottom section */}
                    <div className="space-y-2.5 mb-6 pt-5 border-t border-[rgba(0,0,0,0.04)]">
                        <div className="flex items-center text-[#64748b] text-[13px]">
                            <Calendar className="w-3.5 h-3.5 text-[#007CAD]/60 mr-2.5 shrink-0" />
                            {course.frequency}
                        </div>
                        <div className="flex items-center text-[#64748b] text-[13px]">
                            <Clock className="w-3.5 h-3.5 text-[#007CAD]/60 mr-2.5 shrink-0" />
                            Duración: {course.duration}
                        </div>
                    </div>

                    {/* CTA link */}
                    <div className="inline-flex items-center text-[#007CAD] text-sm font-semibold">
                        Ver plan de estudios
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
