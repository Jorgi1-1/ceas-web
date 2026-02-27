import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, CheckCircle2, Award, BookOpen, User } from "lucide-react";
import { courses } from "@/data/courses";

// En Next.js 14+ con App Router
interface CoursePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        notFound();
    }

    // Dividimos la descripción por saltos de línea dobles y estructuramos en párrafos correctos
    const descriptionParagraphs = course.description.split('\n\n').filter(p => p.trim() !== '');

    return (
        <div
            className="flex flex-col min-h-screen bg-bg-light transition-colors duration-500"
            style={{ '--theme-primary': course.themeColor } as React.CSSProperties}
        >
            {/* Elegant Premium Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end pb-16 md:pb-24">
                <div className="absolute inset-0 z-0">
                    {/* Imágen principal del curso */}
                    <Image
                        src={course.imagePath}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in-up">
                    {course.badge && (
                        <div className="mb-6 inline-flex items-center px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-sm font-bold rounded-full uppercase tracking-wider shadow-lg">
                            <Award className="w-4 h-4 mr-2" />
                            {course.badge}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
                        {course.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-3xl drop-shadow-md border-l-4 border-primary pl-4">
                        {course.shortDescription}
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-20 w-full">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content (2/3 width) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Course Overview */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-text-dark mb-8 flex items-center">
                                <BookOpen className="w-8 h-8 text-primary mr-3" />
                                Acerca del curso
                            </h2>
                            <div className="prose prose-lg max-w-none text-text-light">
                                {descriptionParagraphs.map((paragraph, idx) => {
                                    // Parse simple **bold** markdown
                                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                                    return (
                                        <p key={idx} className="mb-6 leading-relaxed text-lg text-gray-600">
                                            {parts.map((part, i) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
                                                }
                                                return part;
                                            })}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Plan de Estudios / Curriculum Grid */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                            <div className="mb-10 text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-text-dark mb-4 border-b-2 border-primary/20 pb-4 inline-block">
                                    Plan de Estudios
                                </h2>
                                <p className="text-text-light text-lg">
                                    Módulos diseñados para tu excelencia profesional
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {course.curriculum.map((period, index) => (
                                    <div key={index} className="bg-bg-light rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
                                        <div className="flex items-center mb-5 border-b border-gray-200 pb-4">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 text-primary font-extrabold text-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-xl font-bold text-text-dark uppercase tracking-wide">
                                                {period.name}
                                            </h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {period.subjects.map((subject, idx) => (
                                                <li key={idx} className="flex items-start text-text-light group-hover:text-text-dark transition-colors duration-200">
                                                    <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-secondary flex-shrink-0" />
                                                    <span className="text-base font-medium">{subject}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sticky Sidebar (1/3 width) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-primary py-6 px-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                                <h3 className="text-2xl font-bold relative z-10">Inscripciones Abiertas</h3>
                            </div>

                            <div className="p-8">
                                <div className="space-y-6 mb-8">
                                    <div className="flex items-center p-4 bg-bg-light rounded-lg">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                                            <Calendar className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-light uppercase tracking-wider font-semibold">Frecuencia</p>
                                            <p className="text-text-dark font-bold text-lg">{course.frequency}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 bg-bg-light rounded-lg">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-light uppercase tracking-wider font-semibold">Duración Total</p>
                                            <p className="text-text-dark font-bold text-lg">{course.duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 bg-bg-light rounded-lg">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                                            <User className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-light uppercase tracking-wider font-semibold">Modalidad</p>
                                            <p className="text-text-dark font-bold text-lg">Presencial</p>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/contacto"
                                    className="w-full flex justify-center items-center px-6 py-4 bg-secondary text-white font-bold text-lg rounded-xl hover:bg-opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group mb-4"
                                >
                                    Contactar Asesor
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    href="/proximos-cursos"
                                    className="w-full flex justify-center items-center px-6 py-3 bg-white text-primary border-2 border-primary/20 font-bold text-base rounded-xl hover:bg-bg-light transition-all duration-300 group"
                                >
                                    <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Consultar Próximas Fechas
                                </Link>

                                <p className="text-center text-sm text-gray-500 mt-4 px-2">
                                    Un asesor educativo se pondrá en contacto contigo para resolver cualquier duda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
