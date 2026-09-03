import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/metadata";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, Stethoscope, Users, Award } from "lucide-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { CourseComparisonTable } from "@/components/ui/CourseComparisonTable";
import TrustMetrics from "@/components/ui/TrustMetrics";
import UrgencyBanner from "@/components/ui/UrgencyBanner";
import Image from "next/image";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Escuela de Masajes y Quiroterapia en Puebla | CEAS",
  description: "Somos la mejor escuela de masaje en Puebla. Aprende masoterapia, quiropráctica, osteopatía y habilitación física con el respaldo de un instituto profesional.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Escuela de Masajes y Quiroterapia en Puebla | CEAS",
    description: "Somos la mejor escuela de masaje en Puebla. Aprende masoterapia, quiropráctica, osteopatía y habilitación física con el respaldo de un instituto profesional.",
    images: OG_IMAGES,
  },
};

// WhatsApp Number
const WA_NUMBER = "522211502725";
const WA_MESSAGE = encodeURIComponent("Hola, quiero información sobre los diplomados. Tengo dudas sobre duración, costo e inscripción. ¿Me pueden ayudar?");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

// Las cuatro dudas que más pesan al decidir la inscripción. Se seleccionan por
// texto desde la fuente compartida para que editar una respuesta en un solo
// lugar actualice el home, /faq y el JSON-LD a la vez.
const HOME_FAQ_QUESTIONS = [
  "¿Necesito experiencia previa?",
  "¿Qué requisitos de escolaridad necesito?",
  "¿El diploma es avalado por SEP?",
  "¿Qué oportunidades laborales tengo al egresar?",
];

const homeFaqs = HOME_FAQ_QUESTIONS.map((question) => {
  const faq = faqs.find((f) => f.question === question);
  if (!faq) throw new Error(`Pregunta destacada del home no encontrada en src/data/faq.ts: ${question}`);
  return faq;
});

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
            sizes="100vw"
            className="object-cover object-right md:object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-2xl">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6 hero__headline">
              <div className="inline-flex items-center gap-2 text-[#0098D4] text-[11px] md:text-[12px] font-bold tracking-[0.5px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0098D4] shrink-0"></span>
                Excelencia Académica
              </div>
              <span className="hidden sm:block w-px h-3 bg-white/25"></span>
              <div className="inline-flex items-center gap-2 text-white/80 text-[11px] md:text-[12px] font-bold tracking-[0.5px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0"></span>
                Clave SEP: 21PBT0505Q DGCFT
              </div>
            </div>

            {/* Headline — the site's signature focal reveal: tension releasing into focus */}
            <h1 className="text-white text-[40px] md:text-[56px] font-bold leading-[1.1] mb-4 reveal-focus" style={{ animationDelay: '0.15s' }}>
              Centro de Estudios <br className="hidden md:block" /> Avanzados en Salud
            </h1>

            {/* Subheadline */}
            <p className="text-[#E0E0E0] text-[16px] md:text-[18px] leading-[1.5] mb-8 hero__subheadline font-light">
              La escuela de masajes y quiroterapia líder en Puebla. Especialízate como profesional y estudia masoterapia de alto nivel.
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

      {/* 📍 RESPUESTA DIRECTA — lo primero que leen tanto un visitante nuevo como
          un bot: qué es CEAS, qué imparte, dónde, y con qué respaldo oficial.
          El hero abre con el nombre; esto lo aterriza en hechos verificables. */}
      <section className="py-[56px] md:py-[80px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[76ch] scroll-animate">
            <h2 className="text-[#1a1a1a] text-[26px] md:text-[32px] font-bold leading-[1.25] mb-5">
              ¿Qué es CEAS y qué se estudia aquí?
            </h2>
            <p className="text-[#404040] text-[17px] md:text-[18px] leading-[1.7]">
              CEAS (Centro de Estudios Avanzados en Salud) es una escuela de terapias
              manuales en Puebla, México. Imparte cuatro diplomados presenciales —
              Quiroterapia Integral, Habilitación Física Funcional, Manipulaciones
              Vertebrales Avanzadas y Masajes y Terapeuta SPA — con duraciones de 8 a
              22 meses y clases un día a la semana. Al concluir se entrega un diploma
              con validez oficial ante la SEP, bajo la clave{" "}
              <strong className="font-semibold text-[#1a1a1a]">21PBT0505Q DGCFT</strong>.
              Se puede empezar desde nivel principiante: el único requisito es
              secundaria terminada.
            </p>
          </div>
        </div>
      </section>

      {/* 📍 SECCIÓN 2: PROPUESTA DE VALOR & DIFERENCIACIÓN */}
      <section className="py-[60px] md:py-[80px] bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[600px] mx-auto mb-12 scroll-animate">
            <h2 className="text-[#1a1a1a] text-[28px] md:text-[32px] font-bold mb-4">¿Por qué estudiar terapias manuales en CEAS?</h2>
            <p className="text-[#666666] text-[16px] md:text-[18px]">Lo que distingue nuestra formación en el mercado educativo de Puebla.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[30px] mb-12">
            {/* Card 1 */}
            <div className="value-card bg-white p-[30px] rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.06)] min-h-[220px] scroll-animate border border-transparent hover:border-[#0098D4]/10">
              <div className="w-12 h-12 bg-[#0098D4]/10 rounded-xl flex items-center justify-center mb-6 icon transition-all duration-300">
                <Stethoscope className="w-6 h-6 text-[#007CAD]" />
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
                <Users className="w-6 h-6 text-[#007CAD]" />
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
                <Award className="w-6 h-6 text-[#007CAD]" />
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
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a1a] mb-6">
              ¿Qué diplomados puedes estudiar en CEAS?
            </h2>
            <div className="h-1 w-24 bg-[#0098D4] mx-auto mb-6 rounded-full opacity-80"></div>
            <p className="text-[16px] md:text-[18px] text-[#666666] font-light mb-6 leading-relaxed max-w-2xl mx-auto">
              Planes de estudio estratégicamente diseñados para tu éxito profesional.
            </p>
          </div>

          <div className="mb-12 md:mb-16 scroll-animate scroll-delay-100">
            <h3 className="text-center text-[13px] font-bold uppercase tracking-[0.1em] text-[#007CAD] mb-5">
              ¿Cuánto dura cada diplomado y qué credencial otorga?
            </h3>
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

    
      {/* 📍 PREGUNTAS FRECUENTES — respuestas legibles en el HTML, sin acordeón:
          las dudas que deciden la inscripción no deberían costar un clic, y así
          quedan disponibles tanto para el visitante como para quien cite la página.
          El texto sale de src/data/faq.ts, la misma fuente que alimenta /faq. */}
      <section className="py-[60px] md:py-[100px] bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1a1a1a] mb-10 md:mb-14 max-w-[20ch] scroll-animate">
            Las dudas que llegan antes de inscribirse
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-6xl">
            {homeFaqs.map((faq, idx) => (
              <div
                key={faq.question}
                className="max-w-[58ch] scroll-animate"
                style={{ transitionDelay: `${Math.min(idx, 3) * 90}ms` }}
              >
                <h3 className="text-[18px] md:text-[19px] font-bold text-[#1a1a1a] leading-[1.35] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#555555] text-[15px] md:text-[16px] leading-[1.7]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 scroll-animate scroll-delay-200">
            <Link
              href="/faq"
              className="group inline-flex items-center text-[#007CAD] font-semibold text-[16px] border-b border-[#007CAD]/30 pb-1 transition-colors duration-300 hover:border-[#007CAD]"
            >
              Ver las {faqs.length} preguntas frecuentes
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
</div>
  );
}
