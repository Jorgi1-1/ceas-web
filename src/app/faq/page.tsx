import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/metadata";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqs } from "@/data/faq";
import { MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes y Requisitos",
  description: "Resuelve tus dudas sobre los diplomados en quiroterapia y masajes, validez oficial de la SEP, costos, horarios e inscripciones en CEAS Puebla.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Preguntas Frecuentes y Requisitos | CEAS",
    description: "Resuelve tus dudas sobre los diplomados en quiroterapia y masajes, validez oficial de la SEP, costos, horarios e inscripciones en CEAS Puebla.",
    images: OG_IMAGES,
  },
};

// FAQPage se deriva de la misma lista que renderiza el acordeón, de modo que el
// schema no pueda quedar desfasado respecto a lo que el visitante ve en pantalla.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F4] font-poppins pt-[100px] md:pt-[120px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Preguntas Frecuentes" }]} />
      
      {/* HEADER SECTION */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#0098D4]/10 to-transparent border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-[36px] md:text-[44px] font-bold text-[#1a1a1a] mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Encuentra respuestas a las dudas más comunes sobre nuestros diplomados, inscripciones, costos y validez oficial.
          </p>
        </div>
      </section>

      {/* ACCORDION SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate">
          <FAQAccordion />
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="py-16 bg-white border-t border-[#E0E0E0] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-[#666666] mb-8 text-[16px]">
            Nuestros asesores están disponibles para resolver cualquier otra duda que tengas sobre tu futuro profesional.
          </p>
          <a
            href="https://wa.me/522211502725?text=Hola%2C%20tengo%20una%20duda%20que%20no%20encontr%C3%A9%20en%20las%20preguntas%20frecuentes."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contactar con un asesor
          </a>
        </div>
      </section>

    </div>
  );
}
