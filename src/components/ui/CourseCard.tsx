import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Course } from '@/data/courses';

export interface CourseCardProps {
    course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <Link href={`/oferta-academica/${course.slug}`} className="group block h-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 flex flex-col group-hover:-translate-y-2">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={course.imagePath}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-text-dark mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">
                        {course.title}
                    </h3>

                    <div className="space-y-2 mb-6 flex-grow">
                        {course.badge && (
                            <div className="mb-4 inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                                {course.badge}
                            </div>
                        )}
                        <p className="text-gray-500 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                            {course.frequency}
                        </p>
                        <p className="text-gray-500 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                            Duración: {course.duration}
                        </p>
                    </div>

                    <div className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                        Ver plan de estudios <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
