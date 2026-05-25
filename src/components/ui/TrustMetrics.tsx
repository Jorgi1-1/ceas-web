"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  label: string;
  staggerIndex: number;
}

function AnimatedCounter({ end, duration, suffix = "", label, staggerIndex }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
          let startTimestamp: number;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Use easeOutExpo for dramatic deceleration
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasCounted]);

  return (
    <div
      ref={countRef}
      className="text-center scroll-animate"
      style={{ transitionDelay: `${staggerIndex * 100}ms` }}
    >
      <div className="font-poppins text-6xl md:text-7xl font-black bg-gradient-to-r from-[#0098D4] to-[#004A7C] bg-clip-text text-transparent mb-3 leading-none tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="font-poppins text-[11px] md:text-xs text-slate-500 uppercase tracking-[0.15em] font-semibold leading-[1.4]">
        {label}
      </div>
    </div>
  );
}

export default function TrustMetrics() {
  return (
    <div className="w-full">
      {/* Metrics Section with Storytelling */}
      <div className="py-8 md:py-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* Main Focus: 80% */}
        <div className="flex-1 text-center md:text-left">
          <div className="font-poppins text-[80px] md:text-[110px] font-black bg-gradient-to-br from-[#0098D4] to-[#004A7C] bg-clip-text text-transparent leading-[0.9] tracking-tighter mb-2">
            80<span className="text-[60px] md:text-[80px]">%</span>
          </div>
          <p className="text-[#333333] text-[18px] md:text-[20px] font-medium leading-snug max-w-sm mx-auto md:mx-0">
            de nuestros alumnos emprenden y abren su propio centro quiroterapéutico.
          </p>
        </div>

        {/* Secondary Metrics */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-12 text-center md:text-left">
          <div className="flex flex-col">
            <div className="font-poppins text-5xl md:text-6xl font-black text-[#1a1a1a] mb-1">
              <AnimatedCounter end={20} duration={1800} suffix="+" label="" staggerIndex={0} />
            </div>
            <p className="text-[#666666] text-[15px] md:text-[16px] font-medium leading-tight">
              Años formando<br />profesionales
            </p>
          </div>

          <div className="flex flex-col">
            <div className="font-poppins text-5xl md:text-6xl font-black text-[#1a1a1a] mb-1">
              <AnimatedCounter end={270} duration={1800} suffix="+" label="" staggerIndex={1} />
            </div>
            <p className="text-[#666666] text-[15px] md:text-[16px] font-medium leading-tight">
              Egresados con<br />carreras exitosas
            </p>
          </div>
        </div>
      </div>

      {/* Income Block Redesign */}
      <div className="mt-8 md:mt-12 p-8 md:p-10 bg-white border border-[#EAEAEA] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 scroll-animate" style={{ transitionDelay: '200ms' }}>
        <div className="text-left flex-1">
          <h3 className="text-[#1a1a1a] text-[24px] md:text-[28px] font-extrabold leading-tight mb-4">
            Construye una nueva fuente de ingresos
          </h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-[#0098D4]/10 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-[#0098D4] rounded-full"></div>
              </div>
              <p className="text-[#555555] text-[15px] md:text-[17px] leading-relaxed">
                Un quiroterapeuta puede ganar desde <strong className="text-[#1a1a1a]">$14,400.00 al mes</strong> trabajando únicamente 2 horas al día.
              </p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-[#0098D4]/10 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-[#0098D4] rounded-full"></div>
              </div>
              <p className="text-[#555555] text-[15px] md:text-[17px] leading-relaxed">
                Egresados ganan hasta <strong className="text-[#1a1a1a]">$3,000.00</strong> en una sola jornada sabatina.
              </p>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#oferta-educativa" className="group btn btn-primary w-full sm:w-auto btn-primary-pulse flex justify-center">
              Ver diplomados
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/522211502725?text=Hola%2C%20quisiera%20hablar%20con%20un%20asesor%20para%20conocer%20los%20diplomados." target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full sm:w-auto flex justify-center">
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
