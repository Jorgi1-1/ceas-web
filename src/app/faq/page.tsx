import type { Metadata } from "next";
import FAQAccordion from "@/components/ui/FAQAccordion";
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
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es quiroterapia integral?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La quiroterapia integral es una disciplina terapéutica manual que combina técnicas como hidroterapia, masaje, manipulaciones articulares quiroprácticas, osteopatía y rehabilitación física para ayudar a disminuir el dolor, mejorar la movilidad y restaurar el equilibrio funcional del cuerpo de forma natural y no invasiva."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito experiencia previa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No se requiere experiencia previa. Al ser una formación integral, nosotros te capacitamos con los conocimientos necesarios, desde lo más básico hasta lo especializado, para poder dar atención a los problemas musculares, articulares y ligamentosos causados por lesiones deportivas o laborales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué requisitos de escolaridad necesito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes acceder a nuestros programas de estudio teniendo la secundaria terminada."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo cambiar de programa si comienzo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, puedes cambiar a otro curso, pero probablemente tengas que iniciar desde el principio del nuevo ciclo, cubriendo las colegiaturas correspondientes al nuevo programa que elijas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo estudiar a mi ritmo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las clases son presenciales y un día a la semana en un horario establecido, por lo que se recomienda que el resto de los días de la semana repases lo visto en la clase presencial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen becas o descuentos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, contamos con becas que son parte del programa de la SEP, además de descuentos preferenciales a los primeros que se inscriban a cada curso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué oportunidades laborales tengo al egresar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes laborar principalmente de manera independiente, estableciendo tu propio centro de terapias manuales naturales. También puedes trabajar en centros deportivos, equipos deportivos, o como auxiliar en clínicas de terapia física, así como establecer convenios con médicos que requieran referir a sus pacientes para alguna terapia de recuperación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es válido el certificado a nivel nacional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestros cursos de Habilitación Física Funcional y de Terapeuta SPA \"Aplicación de aceites esenciales con técnicas de masaje\" son reconocidos por la SEP, por lo que el certificado obtenido sí es válido a nivel nacional."
      }
    },
    {
      "@type": "Question",
      "name": "¿El diploma es avalado por SEP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestros cursos de Habilitación Física Funcional y de Terapeuta SPA \"Aplicación de aceites esenciales con técnicas de masaje\" son avalados por la SEP. Otros cursos pueden estar avalados por la Federación Mundial de Masaje (WMF) o por CONOCER-SEP."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay seguimiento después de egresar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Sí! Después de concluir nuestros cursos iniciales, puedes acceder a cursos de formación continua para adquirir nuevas habilidades, conocimientos y destrezas."
      }
    }
  ]
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
