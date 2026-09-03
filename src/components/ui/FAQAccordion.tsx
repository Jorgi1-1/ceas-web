"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

import { faqs, type Category } from "@/data/faq";

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
        <label htmlFor="faq-search" className="sr-only">Buscar pregunta</label>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
        <input
          id="faq-search"
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
            type="button"
            onClick={() => {
              setActiveCategory(tab.id as Category);
              setOpenIndex(null);
            }}
            aria-pressed={activeCategory === tab.id}
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
                  type="button"
                  id={`faq-header-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="accordion-header w-full text-left px-6 py-5 flex justify-between items-center gap-4 bg-[#F9F9F9]"
                >
                  <span className="accordion-title flex-1 min-w-0 whitespace-normal font-poppins text-[16px] font-bold text-[#1a1a1a]">{faq.question}</span>
                  <ChevronDown className={`accordion-arrow w-5 h-5 text-[#007CAD] shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={`accordion-content ${isOpen ? "!max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
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
