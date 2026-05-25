"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";

interface NavbarFlowItemProps {
    href: string;
    text: string;
}

export default function NavbarFlowItem({ href, text }: NavbarFlowItemProps) {
    const itemRef = useRef<HTMLAnchorElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const overlayInnerRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const overlay = overlayRef.current;
        const overlayInner = overlayInnerRef.current;
        const item = itemRef.current;
        if (!overlay || !overlayInner || !item) return;

        // Kill any running animations on these targets
        gsap.killTweensOf([overlay, overlayInner]);

        const rect = item.getBoundingClientRect();
        const enterFromTop = e.clientY < rect.top + rect.height / 2;

        // Make visible and set starting position
        gsap.set(overlay, {
            visibility: "visible",
            opacity: 1,
            yPercent: enterFromTop ? -101 : 101,
        });
        gsap.set(overlayInner, {
            yPercent: enterFromTop ? 101 : -101,
        });

        // Animate into view
        gsap.to(overlay, { yPercent: 0, duration: 0.4, ease: "power4.out" });
        gsap.to(overlayInner, { yPercent: 0, duration: 0.4, ease: "power4.out" });
    }, []);

    const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const overlay = overlayRef.current;
        const overlayInner = overlayInnerRef.current;
        const item = itemRef.current;
        if (!overlay || !overlayInner || !item) return;

        gsap.killTweensOf([overlay, overlayInner]);

        const rect = item.getBoundingClientRect();
        const leaveFromTop = e.clientY < rect.top + rect.height / 2;

        // Animate out — fade opacity simultaneously so it doesn't linger
        gsap.to(overlay, {
            yPercent: leaveFromTop ? -101 : 101,
            opacity: 0,
            duration: 0.25,
            ease: "power3.in",
            onComplete: () => {
                gsap.set(overlay, { visibility: "hidden" });
            },
        });
        gsap.to(overlayInner, {
            yPercent: leaveFromTop ? 101 : -101,
            duration: 0.25,
            ease: "power3.in",
        });
    }, []);

    return (
        <Link
            ref={itemRef}
            href={href}
            className="relative block overflow-hidden px-6 py-3 text-[14px] text-[#333333] transition-colors bg-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Static text — always visible by default */}
            <span className="relative z-10 block font-medium">
                {text}
            </span>

            {/* Animated overlay — hidden by default, only shown on hover via GSAP */}
            <div
                ref={overlayRef}
                className="absolute inset-0 z-20 flex items-center bg-[#0098D4] pointer-events-none will-change-transform"
                style={{ visibility: "hidden", opacity: 0 }}
            >
                <div
                    ref={overlayInnerRef}
                    className="flex items-center w-full h-full will-change-transform"
                >
                    <div className="flex whitespace-nowrap animate-marquee-fast">
                        {[...Array(6)].map((_, i) => (
                            <span key={i} className="text-white font-bold text-[14px] mx-3 flex items-center gap-3">
                                {text}
                                {i !== 5 && <span className="text-white/50 mx-2">•</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
