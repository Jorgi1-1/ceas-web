import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Social Media Brand Icons
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-end overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/SPA.png"
            alt="Fisioterapia y bienestar"
            fill
            className="object-cover transition-transform duration-1000 blur-[3px] scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-[#004A7C]/40 mix-blend-multiply"></div>
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-2xl shadow-2xl max-w-xl animate-fade-in-up border border-white/20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Centro de Estudios Avanzados en Salud
            </h1>
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg inline-block mb-6">
              <p className="text-primary text-xl md:text-2xl font-semibold tracking-wide">
                Formamos profesionales con alta calidad humana
              </p>
            </div>
            <p className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed">
              Descubre nuestros programas especializados y da el siguiente paso en tu carrera profesional.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Comienza hoy
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary text-white py-4 shadow-md z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center font-semibold text-lg tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-white mr-3 animate-pulse"></span>
            Incorporado a la SEP
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://wa.me/522211502725"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform text-[#25D366] drop-shadow-sm bg-white rounded-full" />
              <span className="font-semibold tracking-wide">221 150 2725</span>
            </a>
            <a
              href="https://www.facebook.com/ifpceas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-2.5 bg-white/10 hover:bg-[#1877F2]/20 border border-white/20 hover:border-[#1877F2]/50 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <FacebookIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform group-hover:text-[#1877F2]" />
              <span className="font-semibold tracking-wide">Síguenos en FB</span>
            </a>
          </div>
        </div>
      </section>

      {/* Oferta Educativa Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">CEAS Oferta</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              OFERTA EDUCATIVA
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-medium mb-4 leading-relaxed">
              Planes de estudio estratégicamente diseñados para tu éxito profesional
            </p>
            <p className="text-lg text-primary font-semibold uppercase tracking-wider">
              Clases un día a la semana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/proximos-cursos"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Ver Fechas de Próximos Cursos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-24 relative overflow-hidden">
        {/* Abstract shapes for premium feel */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            ¿Quieres mejorar tu estilo de vida? Capacítate con nosotros.
          </h2>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white text-lg font-bold rounded-md hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contacto
          </Link>
        </div>
      </section>
    </div>
  );
}
