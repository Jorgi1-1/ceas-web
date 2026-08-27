"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import type { CurriculumPeriod } from "@/data/courses";

interface CurriculumAccordionProps {
    curriculum: CurriculumPeriod[];
}

export default function CurriculumAccordion({ curriculum }: CurriculumAccordionProps) {
    // First item open by default
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="space-y-3">
            {curriculum.map((period, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className={`
                            rounded-2xl border transition-all duration-500
                            ${isOpen
                                ? "bg-white border-[#0098D4]/15 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                                : "bg-[#f8fafc] border-[rgba(0,0,0,0.04)] hover:border-[rgba(0,0,0,0.08)] hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                            }
                        `}
                    >
                        {/* Header — clickable row */}
                        <button
                            type="button"
                            id={`curriculum-header-${index}`}
                            onClick={() => toggle(index)}
                            aria-expanded={isOpen}
                            aria-controls={`curriculum-panel-${index}`}
                            className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 md:py-6 cursor-pointer group text-left"
                        >
                            <div className="flex items-center gap-4 min-w-0 flex-1">
                                {/* Period number */}
                                <div className={`
                                    w-10 h-10 rounded-xl flex items-center justify-center text-sm font-extrabold shrink-0
                                    transition-all duration-500
                                    ${isOpen
                                        ? "bg-[#0098D4] text-white shadow-[0_4px_12px_rgba(0,152,212,0.3)]"
                                        : "bg-white text-[#007CAD] shadow-[0_1px_3px_rgba(0,0,0,0.06)] group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                    }
                                `}>
                                    {index + 1}
                                </div>
                                {/* Period name */}
                                <h3 className={`
                                    min-w-0 whitespace-normal text-base md:text-lg font-bold tracking-[-0.01em]
                                    transition-colors duration-300
                                    ${isOpen ? "text-[#0f172a]" : "text-[#334155] group-hover:text-[#0f172a]"}
                                `}>
                                    {period.name}
                                </h3>
                            </div>

                            {/* Chevron */}
                            <ChevronDown className={`
                                w-5 h-5 text-[#94a3b8] shrink-0
                                transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                                ${isOpen ? "rotate-180 text-[#007CAD]" : "group-hover:text-[#64748b]"}
                            `} />
                        </button>

                        {/* Body — collapsible content */}
                        <div
                            id={`curriculum-panel-${index}`}
                            role="region"
                            aria-labelledby={`curriculum-header-${index}`}
                            className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                                maxHeight: isOpen ? `${period.subjects.length * 52 + 40}px` : "0px",
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                <div className="border-t border-[rgba(0,0,0,0.04)] pt-5">
                                    <ul className="space-y-3">
                                        {period.subjects.map((subject, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start text-[15px] text-[#475569] leading-relaxed transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                                style={{
                                                    opacity: isOpen ? 1 : 0,
                                                    transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                                                    transitionDelay: isOpen ? `${Math.min(idx, 6) * 40}ms` : "0ms",
                                                }}
                                            >
                                                <CheckCircle2 className="w-[18px] h-[18px] mr-3 mt-0.5 text-[#007CAD]/60 shrink-0" />
                                                <span>{subject}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
