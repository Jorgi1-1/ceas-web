import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "Lo sentimos, la página que buscas no existe en el Centro de Estudios Avanzados en Salud CEAS.",
};

export default function NotFound() {
  const WA_NUMBER = "522211502725";
  const WA_MESSAGE = encodeURIComponent("Hola, me perdí en el sitio web buscando una página. ¿Me pueden ayudar con información de los diplomados?");
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

  return (
    <div className="flex flex-col min-h-[85vh] bg-[#F8F7F4] font-poppins pt-[120px] pb-16 justify-center items-center px-4">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in-up bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-xl">
        {/* Decorative Error Code */}
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-black text-[#0098D4]/10 tracking-widest selection:bg-transparent">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
            Página no encontrada
          </div>
        </div>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Lo sentimos, la página que estás buscando no existe o ha sido movida temporalmente. Puedes volver al inicio o contactar a un asesor.
        </p>

        {/* Helpful links */}
        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3.5 bg-[#0098D4] hover:bg-[#008cc4] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm uppercase tracking-wider"
          >
            <Home className="w-4.5 h-4.5 mr-2" />
            Ir a la página de Inicio
          </Link>
          
          <Link
            href="/#oferta-educativa"
            className="flex items-center justify-center px-6 py-3.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold rounded-xl transition-all text-sm uppercase tracking-wider"
          >
            <BookOpen className="w-4.5 h-4.5 mr-2 text-[#007CAD]" />
            Ver Oferta Educativa
          </Link>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm uppercase tracking-wider"
          >
            <MessageCircle className="w-4.5 h-4.5 mr-2" />
            Hablar con un asesor
          </a>
        </div>

        <div className="pt-2">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-[#007CAD] transition-colors gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
}
