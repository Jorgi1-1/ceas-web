"use client";

import { useEffect, useState } from "react";
import { Clock, Target, Star } from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { formatDate } from "@/lib/formatDate";
import { isFutureDate } from "@/lib/siteDates";

export default function UrgencyBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const siteConfig = useSiteConfig();
  const { nextStartDate, availableSpots, totalSpots, discountPercentage } = siteConfig.urgency;
  const progressPercentage = ((totalSpots - availableSpots) / totalSpots) * 100;
  const hasConfirmedDate = isFutureDate(nextStartDate);

  return (
    <div className="urgency-banner urgency-banner-pulse bg-gradient-to-r from-[#0098D4]/10 to-[#0098D4]/5 border border-[#0098D4] rounded-lg p-5 md:p-6 w-full max-w-xl bg-white shadow-lg scroll-animate">
      <div className="space-y-4">
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-[#007CAD] mr-3 shrink-0" />
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold mb-0.5">Próximo inicio</p>
            {hasConfirmedDate ? (
              <p className="text-[14px] font-bold text-gray-900">{formatDate(nextStartDate)}</p>
            ) : (
              <p className="text-[14px] font-bold text-gray-900">Fecha por confirmar. Escríbenos</p>
            )}
          </div>
        </div>
        <div className="flex items-center text-[#1a1a1a] font-poppins text-[14px] md:text-[16px] leading-[1.8]">
          <Target className="w-5 h-5 text-[#007CAD] mr-2 shrink-0" />
          <span>Solo <strong>{availableSpots} espacios disponibles</strong></span>
        </div>
        <div className="flex items-center text-[#1a1a1a] font-poppins text-[14px] md:text-[16px] leading-[1.8]">
          <Star className="w-5 h-5 text-[#007CAD] mr-2 shrink-0 fill-[#007CAD]" />
          <span>{discountPercentage}% de descuento hasta el cierre</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-[#E0E0E0] rounded-full mt-4 overflow-hidden relative">
        {mounted && (
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0098D4] to-[#00D4D4] rounded-full progress-fill"
            style={{ "--progress-width": `${progressPercentage}%` } as React.CSSProperties}
          ></div>
        )}
      </div>
      <div className="mt-2 text-right">
        <span className="font-poppins text-[12px] text-[#6B6B6B]">{totalSpots - availableSpots} de {totalSpots} espacios ocupados</span>
      </div>
    </div>
  );
}
