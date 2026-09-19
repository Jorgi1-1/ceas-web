"use client";

import React, { useState, useEffect, useCallback } from "react";
import { MessageCircle } from "lucide-react";

// El botón vive fuera del flujo del documento (fixed) en todas las páginas,
// así que no puede saber de antemano qué CTA o texto va a quedar debajo al
// hacer scroll. En vez de acoplarlo a marcado específico de cada página,
// revisa geométricamente si su propio rectángulo se solapa con algún .btn
// real (todas las CTAs del sitio comparten esa clase) o con el panel de una
// tarjeta (rounded-2xl/3xl es el radio que este sistema usa para tarjetas de
// contenido en todo el sitio), y se retira mientras dure el solape — igual
// que ya se retira al desplazar hacia arriba.
const FAB_SIZE = 56; // w-14 h-14
const FAB_MARGIN = 24; // bottom-6 right-6
const OVERLAP_SELECTOR = '.btn, [class*="rounded-2xl"], [class*="rounded-3xl"]';

export default function WhatsAppButton() {
    const phoneNumber = "522211502725";
    const message = "Hola, quiero información sobre los diplomados. Tengo dudas sobre duración, costo e inscripción. ¿Me pueden ayudar?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [overlapsCta, setOverlapsCta] = useState(false);

    const checkOverlap = useCallback(() => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const fabRect = {
            left: vw - FAB_MARGIN - FAB_SIZE,
            right: vw - FAB_MARGIN,
            top: vh - FAB_MARGIN - FAB_SIZE,
            bottom: vh - FAB_MARGIN,
        };

        const candidates = document.querySelectorAll<HTMLElement>(OVERLAP_SELECTOR);
        let overlap = false;
        for (const el of candidates) {
            const r = el.getBoundingClientRect();
            if (r.left < fabRect.right && r.right > fabRect.left && r.top < fabRect.bottom && r.bottom > fabRect.top) {
                overlap = true;
                break;
            }
        }
        setOverlapsCta(overlap);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show after 200px scroll
            if (currentScrollY > 200) {
                // If scrolling down, show
                if (currentScrollY > lastScrollY) {
                    setIsVisible(true);
                }
                // If scrolling up, hide (optional based on preference, but requested to hide on scroll up)
                else if (currentScrollY < lastScrollY) {
                    setIsVisible(false);
                }
            } else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
            checkOverlap();
        };

        // No initial checkOverlap() call: isVisible starts false regardless of
        // scroll position, so overlap only needs computing once a scroll or
        // resize event can actually make the button visible.
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", checkOverlap);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkOverlap);
        };
    }, [lastScrollY, checkOverlap]);

    const shouldShow = isVisible && !overlapsCta;

    return (
        <div
            className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 group transition-all duration-300 ease-out ${
                shouldShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            }`}
        >
            {/* Tooltip text */}
            <span className="bg-white text-[#1a1a1a] px-4 py-2 rounded-xl shadow-[0_4px_12px_rgb(0,0,0,0.1)] text-[14px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 border border-gray-100 hidden md:flex items-center whitespace-nowrap">
                Chat con asesor
            </span>

            {/* The Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgb(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_8px_16px_rgb(37,211,102,0.4)] transition-all duration-300 ${shouldShow ? "wa-breathe" : ""}`}
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle className="w-6 h-6 relative z-10" />
            </a>
        </div>
    );
}
