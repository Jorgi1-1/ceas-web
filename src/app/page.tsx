import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Check, CheckCircle2, Stethoscope, Users, Building, Award, Star } from "lucide-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import TrustMetrics from "@/components/ui/TrustMetrics";
import UrgencyBanner from "@/components/ui/UrgencyBanner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Escuela de Quiroterapia, Masoterapia y Habilitación Física en Puebla",
  description: "Aprende masaje, técnicas de quiropráctica, osteopatía y ventosas con el respaldo de un programa diseñado para tu profesionalización y seguridad.",
  openGraph: {
    title: "Escuela de Quiroterapia, Masoterapia y Habilitación Física en Puebla",
    description: "Aprende masaje, técnicas de quiropráctica, osteopatía y ventosas con el respaldo de un programa diseñado para tu profesionalización y seguridad.",
  },
};

// WhatsApp Number
const WA_NUMBER = "522211502725";
const WA_MESSAGE = encodeURIComponent("Hola, quiero información sobre los diplomados. Tengo dudas sobre duración, costo e inscripción. ¿Me pueden ayudar?");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">

      {/* 📍 SECCIÓN 1: HERO/LANDING PRINCIPAL */}
      <section className="relative min-h-[600px] md:min-h-[80vh] flex flex-col justify-center pt-[100px] pb-[80px] md:pt-[140px] md:pb-[80px] overflow-hidden bg-[#111]">

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/SPA.png"
            alt="Estudiante CEAS practicando"
            fill
            className="object-cover object-right md:object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-2xl">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6 hero__headline">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0098D4]/10 border border-[#0098D4] text-[#0098D4] text-[11px] md:text-[12px] font-bold tracking-[0.5px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0098D4] mr-2"></span>
                Excelencia Académica
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white text-white text-[11px] md:text-[12px] font-bold tracking-[0.5px] uppercase">
                Clave SEP: 21PBT0505Q DGCFT
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-white text-[40px] md:text-[56px] font-bold leading-[1.1] mb-4 hero__headline">
              Centro de Estudios <br className="hidden md:block" /> Avanzados en Salud
            </h1>

            {/* Subheadline */}
            <p className="text-[#E0E0E0] text-[16px] md:text-[18px] leading-[1.5] mb-8 hero__subheadline font-light">
              Especialízate como Profesional en Salud Natural
            </p>

            {/* Bullets */}
            <div className="flex flex-col gap-3 mb-10 md:mb-[48px]">
              <div className="flex items-center text-[#E0E0E0] text-[16px] md:text-[18px] hero__bullet">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] mr-3 shrink-0" />
                <span>Hasta 22 meses de formación profesional</span>
              </div>
              <div className="flex items-center text-[#E0E0E0] text-[16px] md:text-[18px] hero__bullet">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] mr-3 shrink-0" />
                <span>Clases presenciales 1 día a la semana</span>
              </div>
              <div className="flex items-center text-[#E0E0E0] text-[16px] md:text-[18px] hero__bullet">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] mr-3 shrink-0" />
                <span>Capacitaciones desde principiantes hasta avanzados</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[20px] hero__subheadline" style={{ animationDelay: '0.8s' }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn btn-primary w-full md:w-auto btn-primary-pulse"
              >
                Quiero conocer el programa
                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
              </a>
              <Link
                href="/proximos-cursos"
                className="btn btn-secondary-white w-full md:w-auto"
              >
                Ver próximas fechas de inicio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner — Asymmetric elegant positioning */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-8 md:-mt-12 relative z-20 flex justify-center md:justify-end md:pr-4 lg:pr-8">
        <UrgencyBanner />
      </div>

      {/* 📍 SECCIÓN 2: PROPUESTA DE VALOR & DIFERENCIACIÓN */}
      <section className="py-[60px] md:py-[80px] bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[600px] mx-auto mb-12 scroll-animate">
            <h2 className="text-[#1a1a1a] text-[28px] md:text-[32px] font-bold mb-4">Diferenciación clave en el mercado educativo</h2>
            <p className="text-[#666666] text-[16px] md:text-[18px]">Por qué estudiar en CEAS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[30px] mb-12">
            {/* Card 1 */}
            <div className="value-card bg-white p-[30px] rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.06)] min-h-[220px] scroll-animate border border-transparent hover:border-[#0098D4]/10">
              <div className="w-12 h-12 bg-[#0098D4]/10 rounded-xl flex items-center justify-center mb-6 icon transition-all duration-300">
                <Stethoscope className="w-6 h-6 text-[#0098D4]" />
              </div>
              <h3 className="card__title text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-3">Abundante Práctica</h3>
              <div className="separator w-[60px] h-[3px] bg-[#0098D4] mb-4"></div>
              <p className="text-[#555555] text-[14px] md:text-[15px] leading-[1.6]">
                Gran cantidad de prácticas durante todo el curso para dominar las variedades de técnicas enseñadas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="value-card bg-white p-[30px] rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.06)] min-h-[220px] scroll-animate scroll-delay-100 border border-transparent hover:border-[#0098D4]/10">
              <div className="w-12 h-12 bg-[#0098D4]/10 rounded-xl flex items-center justify-center mb-6 icon transition-all duration-300">
                <Users className="w-6 h-6 text-[#0098D4]" />
              </div>
              <h3 className="card__title text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-3">Atención personalizada</h3>
              <div className="separator w-[60px] h-[3px] bg-[#0098D4] mb-4"></div>
              <p className="text-[#555555] text-[14px] md:text-[15px] leading-[1.6]">
                Grupos pequeños para garantizar una atención personalizada y un aprendizaje profundo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="value-card bg-white p-[30px] rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.06)] min-h-[220px] scroll-animate scroll-delay-200 border border-transparent hover:border-[#0098D4]/10">
              <div className="w-12 h-12 bg-[#0098D4]/10 rounded-xl flex items-center justify-center mb-6 icon transition-all duration-300">
                <Award className="w-6 h-6 text-[#0098D4]" />
              </div>
              <h3 className="card__title text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-3">Diploma con validez oficial SEP</h3>
              <div className="separator w-[60px] h-[3px] bg-[#0098D4] mb-4"></div>
              <p className="text-[#555555] text-[14px] md:text-[15px] leading-[1.6]">
                RVOE propio incorporado a la SEP para respaldar tu formación.
              </p>
            </div>
          </div>

          <div className="scroll-animate">
            <TrustMetrics />
          </div>

        </div>
      </section>

      {/* Oferta Educativa Section */}
      <section id="oferta-educativa" className="py-[60px] md:py-[100px] bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 scroll-animate">
            <span className="inline-block px-5 py-2 rounded-full bg-[#0098D4]/10 text-[#0098D4] font-bold tracking-widest uppercase text-[12px] mb-4">
              Nuestra Oferta
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a1a] mb-6">
              OFERTA EDUCATIVA
            </h2>
            <div className="h-1 w-24 bg-[#0098D4] mx-auto mb-6 rounded-full opacity-80"></div>
            <p className="text-[16px] md:text-[18px] text-[#666666] font-light mb-6 leading-relaxed max-w-2xl mx-auto">
              Planes de estudio estratégicamente diseñados para tu éxito profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 scroll-animate scroll-delay-100">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center scroll-animate scroll-delay-200">
            <Link
              href="/proximos-cursos"
              className="group btn btn-secondary w-full md:w-auto inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Ver Fechas de Próximos Cursos
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
