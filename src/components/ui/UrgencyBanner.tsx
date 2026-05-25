"use client";

import { useEffect, useState } from "react";
import { Clock, Target, Star } from "lucide-react";

export default function UrgencyBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="urgency-banner urgency-banner-pulse bg-gradient-to-r from-[#0098D4]/10 to-[#0098D4]/5 border border-[#0098D4] rounded-lg p-5 md:p-6 w-full max-w-xl bg-white shadow-lg scroll-animate">
      <div className="space-y-4">
        <div className="flex items-center text-[#1a1a1a] font-poppins text-[14px] md:text-[16px] leading-[1.8]">
          <Clock className="w-5 h-5 text-[#0098D4] mr-2 shrink-0" />
          <span>Próximo inicio: <strong>15 de Junio</strong></span>
        </div>
        <div className="flex items-center text-[#1a1a1a] font-poppins text-[14px] md:text-[16px] leading-[1.8]">
          <Target className="w-5 h-5 text-[#0098D4] mr-2 shrink-0" />
          <span>Solo <strong>2 espacios disponibles</strong></span>
        </div>
        <div className="flex items-center text-[#1a1a1a] font-poppins text-[14px] md:text-[16px] leading-[1.8]">
          <Star className="w-5 h-5 text-[#0098D4] mr-2 shrink-0 fill-[#0098D4]" />
          <span>25% de descuento hasta el cierre</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-[#E0E0E0] rounded-full mt-4 overflow-hidden relative">
        {mounted && (
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0098D4] to-[#00D4D4] rounded-full progress-fill"
            style={{ "--progress-width": "80%" } as React.CSSProperties}
          ></div>
        )}
      </div>
      <div className="mt-2 text-right">
        <span className="font-poppins text-[12px] text-[#999999]">8 de 10 espacios ocupados</span>
      </div>
    </div>
  );
}
