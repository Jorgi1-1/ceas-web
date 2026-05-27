"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

type Category = "all" | "general" | "duracion" | "inversion" | "empleabilidad" | "certificado" | "otros";

interface FAQItem {
  question: string;
  answer: string;
  category: Category;
}

const faqs: FAQItem[] = [
  // GENERAL
  { question: "¿Qué es quiroterapia integral?", answer: "La quiroterapia integral es una disciplina terapéutica manual que combina técnicas como hidroterapia, masaje, manipulaciones articulares quiroprácticas, osteopatía y rehabilitación física para ayudar a disminuir el dolor, mejorar la movilidad y restaurar el equilibrio funcional del cuerpo de forma natural y no invasiva.", category: "general" },
  { question: "¿Necesito experiencia previa?", answer: "No se requiere experiencia previa. Al ser una formación integral, nosotros te capacitamos con los conocimientos necesarios, desde lo más básico hasta lo especializado, para poder dar atención a los problemas musculares, articulares y ligamentosos causados por lesiones deportivas o laborales.", category: "general" },
  { question: "¿Qué requisitos de escolaridad necesito?", answer: "Puedes acceder a nuestros programas de estudio teniendo la secundaria terminada.", category: "general" },
  { question: "¿Puedo cambiar de programa si comienzo?", answer: "Sí, puedes cambiar a otro curso, pero probablemente tengas que iniciar desde el principio del nuevo ciclo, cubriendo las colegiaturas correspondientes al nuevo programa que elijas.", category: "general" },
  // DURACION
  { question: "¿Puedo estudiar a mi ritmo?", answer: "Las clases son presenciales y un día a la semana en un horario establecido, por lo que se recomienda que el resto de los días de la semana repases lo visto en la clase presencial.", category: "duracion" },
  // INVERSION
  { question: "¿Tienen becas o descuentos?", answer: "Sí, contamos con becas que son parte del programa de la SEP, además de descuentos preferenciales a los primeros que se inscriban a cada curso.", category: "inversion" },
  // EMPLEABILIDAD
  { question: "¿Qué oportunidades laborales tengo al egresar?", answer: "Puedes laborar principalmente de manera independiente, estableciendo tu propio centro de terapias manuales naturales. También puedes trabajar en centros deportivos, equipos deportivos, o como auxiliar en clínicas de terapia física, así como establecer convenios con médicos que requieran referir a sus pacientes para alguna terapia de recuperación.", category: "empleabilidad" },
  // CERTIFICADO
  { question: "¿Es válido el certificado a nivel nacional?", answer: "Nuestros cursos de Habilitación Física Funcional y de Terapeuta SPA \"Aplicación de aceites esenciales con técnicas de masaje\" son reconocidos por la SEP, por lo que el certificado obtenido sí es válido a nivel nacional.", category: "certificado" },
  { question: "¿El diploma es avalado por SEP?", answer: "Nuestros cursos de Habilitación Física Funcional y de Terapeuta SPA \"Aplicación de aceites esenciales con técnicas de masaje\" son avalados por la SEP. Otros cursos pueden estar avalados por la Federación Mundial de Masaje (WMF) o por CONOCER-SEP.", category: "certificado" },
  // OTROS
  { question: "¿Hay seguimiento después de egresar?", answer: "¡Sí! Después de concluir nuestros cursos iniciales, puedes acceder a cursos de formación continua para adquirir nuevas habilidades, conocimientos y destrezas.", category: "otros" },
];

export default function FAQAccordion() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Bar */}
      <div className="relative mb-10 max-w-lg mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
        <input
          type="text"
          placeholder="Busca tu pregunta aquí..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 md:py-4 border border-[#DDDDDD] rounded-full font-poppins text-[15px] focus:outline-none focus:border-[#0098D4] focus:ring-2 focus:ring-[#0098D4]/20 transition-all shadow-sm"
        />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {[
          { id: "all", label: "Todas" },
          { id: "general", label: "General" },
          { id: "duracion", label: "Duración & Horarios" },
          { id: "inversion", label: "Costos" },
          { id: "empleabilidad", label: "Empleo" },
          { id: "certificado", label: "Certificación" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveCategory(tab.id as Category);
              setOpenIndex(null);
            }}
            className={`px-5 py-2 rounded-full font-poppins text-[14px] transition-all duration-300 ${
              activeCategory === tab.id
                ? "bg-[#0098D4] text-white shadow-md"
                : "bg-[#F5F5F5] text-[#666666] hover:bg-[#E0E0E0]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`accordion-item border border-[#E0E0E0] rounded-xl overflow-hidden bg-white transition-all duration-300 ${isOpen ? "shadow-[0_4px_12px_rgb(0,0,0,0.05)] border-[#0098D4]/30" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="accordion-header w-full text-left px-6 py-5 flex justify-between items-center bg-[#F9F9F9]"
                >
                  <span className="accordion-title font-poppins text-[16px] font-bold text-[#1a1a1a] pr-4">{faq.question}</span>
                  <ChevronDown className={`accordion-arrow w-5 h-5 text-[#0098D4] shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`accordion-content ${isOpen ? "!max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-6 text-[#555555] font-poppins text-[15px] leading-[1.6]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 text-[#666666] font-poppins">
            No encontramos resultados para tu búsqueda.
          </div>
        )}
      </div>
    </div>
  );
}
