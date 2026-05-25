"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "522211502725";
    const message = "Hola, quiero información sobre los diplomados. Tengo dudas sobre duración, costo e inscripción. ¿Me pueden ayudar?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div 
            className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 group transition-all duration-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
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
                className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgb(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_8px_16px_rgb(37,211,102,0.4)] transition-all duration-300"
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle className="w-6 h-6 relative z-10" />
            </a>
        </div>
    );
}
