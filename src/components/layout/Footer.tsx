"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Award, ArrowRight, MessageCircle } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/ifpceas", label: "Síguenos en Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/ceaspuebla", label: "Síguenos en Instagram" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@ceas_puebla", label: "Síguenos en TikTok" },
];

const linkGroups = [
    {
        title: "Enlaces Rápidos",
        links: [
            { label: "Cursos", href: "/oferta-academica" },
            { label: "Próximos Inicios", href: "/proximos-cursos" },
            { label: "FAQ", href: "/faq" },
            { label: "Blog", href: "/blog" },
        ],
    },
    {
        title: "Institución",
        links: [
            { label: "Sobre Nosotros", href: "/nosotros" },
            { label: "Fotogalería", href: "/fotogaleria" },
            { label: "Aviso de Privacidad", href: "/privacidad" },
        ],
    },
];

export default function Footer() {
    const [message, setMessage] = useState("");

    const whatsappHref = `https://wa.me/522211502725?text=${encodeURIComponent(
        message.trim() || "Hola, tengo una duda sobre los diplomados de CEAS."
    )}`;

    return (
        <footer className="bg-[#1a1a1a] text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">

                    {/* Left panel — brand block */}
                    <div className="bg-[#0098D4] text-white flex min-h-[420px] shrink-0 flex-col justify-between rounded-[2rem] p-8 sm:p-10 lg:w-[380px]">
                        <div>
                            <Image
                                src="/CEAS LOGO 2.png"
                                alt="CEAS Logo"
                                width={160}
                                height={54}
                                className="object-contain w-auto h-11 brightness-0 invert"
                            />
                            <p className="mt-16 sm:mt-20 text-2xl sm:text-3xl font-medium leading-snug tracking-tight">
                                Centro de Estudios Avanzados en Salud
                            </p>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm opacity-90 mb-4">Síguenos</p>
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white hover:text-[#0098D4] transition-colors"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right panel — links + contact */}
                    <div className="bg-[#232323] relative flex flex-1 flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10">
                        <Image
                            src="/ceas-imagotipo.png"
                            alt=""
                            width={429}
                            height={495}
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute -top-6 -right-16 h-64 w-auto opacity-[0.07] rotate-6"
                        />

                        <div className="relative z-10 flex flex-wrap gap-12 sm:gap-16">
                            {/* Contacto */}
                            <div className="space-y-5">
                                <h3 className="text-[#999999] text-sm uppercase tracking-[0.08em]">Contacto</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[13px] text-[#999999] mb-0.5">WhatsApp / Teléfono</p>
                                            <a href="https://wa.me/522211502725" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0098D4] transition-colors font-medium">
                                                221 150 2725
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[13px] text-[#999999] mb-0.5">Email</p>
                                            <a href="mailto:contacto@ceas.com.mx" className="text-white hover:text-[#0098D4] transition-colors font-medium">
                                                contacto@ceas.com.mx
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[13px] text-[#999999] mb-0.5">Ubicación</p>
                                            <span className="text-white font-medium text-[14px] leading-relaxed block max-w-[220px]">
                                                Privada 5 B Sur #4718 Col. Huexotitla, Puebla, Pue.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {linkGroups.map((group) => (
                                <div key={group.title} className="space-y-5">
                                    <h3 className="text-[#999999] text-sm uppercase tracking-[0.08em]">{group.title}</h3>
                                    <ul className="space-y-3">
                                        {group.links.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-[14px] text-[#CCCCCC] hover:text-[#0098D4] hover:translate-x-1 transition-all flex items-center gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-[#0098D4] rounded-full shrink-0"></span>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="relative z-10 mt-12 flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-end">
                            <div className="order-2 xl:order-1 flex flex-col gap-3 text-[12px] text-[#999999]">
                                <p>
                                    © 2018 - {new Date().getFullYear()} Instituto de Formación Profesional IFPCEAS. Todos los derechos reservados.
                                </p>
                                <div className="inline-flex items-center gap-2 text-[#0098D4] font-medium">
                                    <Award className="w-4 h-4 shrink-0" />
                                    <span>Centro Avalado por SEP</span>
                                </div>
                            </div>

                            <div className="order-1 xl:order-2 w-full space-y-3 sm:max-w-sm">
                                <div className="space-y-1">
                                    <p className="text-[#999999] text-sm font-medium">¿Tienes una duda?</p>
                                    <h3 className="text-white text-base font-semibold">Escríbenos por WhatsApp</h3>
                                </div>
                                <form
                                    className="relative flex items-center"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        window.open(whatsappHref, "_blank", "noopener,noreferrer");
                                    }}
                                >
                                    <label htmlFor="footer-whatsapp-message" className="sr-only">Tu pregunta para WhatsApp</label>
                                    <input
                                        id="footer-whatsapp-message"
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Escribe tu pregunta aquí..."
                                        className="bg-white/[0.06] w-full rounded-full border border-white/10 py-3.5 pr-16 pl-5 text-[14px] text-white placeholder:text-[#888888] outline-none focus-visible:border-[#0098D4] focus-visible:ring-2 focus-visible:ring-[#0098D4]/30 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        aria-label="Enviar pregunta por WhatsApp"
                                        className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-[#0098D4] text-white hover:bg-[#008ac0] transition-colors"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </form>
                                <a
                                    href="https://wa.me/522211502725"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[12px] text-[#999999] hover:text-[#0098D4] transition-colors"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    O abre el chat directamente
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
