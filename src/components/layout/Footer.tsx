import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Award } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">

                    {/* Column 1: Contacto */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-poppins text-[16px] font-bold uppercase tracking-[0.5px] mb-2">Contacto</h3>

                        <div className="flex items-start gap-3 text-[#CCCCCC]">
                            <Phone className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[14px] mb-1">WhatsApp / Teléfono</p>
                                <a href="https://wa.me/522211502725" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0098D4] transition-colors font-medium">
                                    221 150 2725
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 text-[#CCCCCC]">
                            <Mail className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[14px] mb-1">Email</p>
                                <a href="mailto:contacto@ceas.com.mx" className="text-white hover:text-[#0098D4] transition-colors font-medium">
                                    contacto@ceas.com.mx
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 text-[#CCCCCC]">
                            <MapPin className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[14px] mb-1">Ubicación</p>
                                <span className="text-white font-medium text-[14px] leading-relaxed block max-w-[250px]">
                                    Privada 5 B Sur #4718 Col. Huexotitla, Puebla, Pue.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Enlaces Rápidos */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-poppins text-[16px] font-bold uppercase tracking-[0.5px] mb-2">Enlaces Rápidos</h3>
                        <nav className="flex flex-col gap-3">
                            <Link href="/oferta-academica" className="text-[14px] text-[#CCCCCC] hover:text-[#0098D4] hover:translate-x-1 transition-all flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0098D4] rounded-full"></span> Cursos
                            </Link>
                            <Link href="/faq" className="text-[14px] text-[#CCCCCC] hover:text-[#0098D4] hover:translate-x-1 transition-all flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0098D4] rounded-full"></span> FAQ
                            </Link>
                            <Link href="/blog" className="text-[14px] text-[#CCCCCC] hover:text-[#0098D4] hover:translate-x-1 transition-all flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0098D4] rounded-full"></span> Blog
                            </Link>
                            <Link href="/nosotros" className="text-[14px] text-[#CCCCCC] hover:text-[#0098D4] hover:translate-x-1 transition-all flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0098D4] rounded-full"></span> Sobre Nosotros
                            </Link>
                            <Link href="/privacidad" className="text-[14px] text-[#CCCCCC] hover:text-[#0098D4] hover:translate-x-1 transition-all flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0098D4] rounded-full"></span> Aviso de Privacidad
                            </Link>
                        </nav>
                    </div>

                    {/* Column 3: Síguenos & Logo */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-poppins text-[16px] font-bold uppercase tracking-[0.5px] mb-2">Síguenos</h3>
                        <div className="flex gap-4 mb-6">
                            <a href="https://www.facebook.com/ifpceas" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:-translate-y-1 transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/ceaspuebla" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:-translate-y-1 transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.tiktok.com/@ceas_puebla" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en TikTok" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-black hover:-translate-y-1 transition-all">
                                <TikTokIcon className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="mt-auto opacity-90 hover:opacity-100 transition-opacity">
                            <Image
                                src="/CEAS LOGO 2.png"
                                alt="CEAS Logo"
                                width={180}
                                height={60}
                                className="object-contain w-auto h-12 brightness-0 invert"
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom Row */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#999999]">
                    <p className="text-center md:text-left">
                        © 2018 - {new Date().getFullYear()} Instituto de Formación Profesional IFPCEAS. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-2 text-[#0098D4] font-medium bg-[#0098D4]/10 px-3 py-1.5 rounded-full">
                        <Award className="w-4 h-4" />
                        <span>Centro Avalado por SEP</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
