"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { courses } from "@/data/courses";
import NavbarFlowItem from "@/components/ui/NavbarFlowItem";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none md:pt-4">
            <header className={`pointer-events-auto w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/90 backdrop-blur-xl md:rounded-[2.5rem] border-b md:border border-black/5 shadow-[0_2px_8px_rgb(0,0,0,0.08)] will-change-transform ${scrolled ? "md:w-[90vw] lg:w-[85vw] max-w-7xl md:shadow-[0_8px_40px_rgb(0,0,0,0.08)]" : "md:w-[96vw] max-w-[1920px]"
                }`}>
                <div className={`flex justify-between items-center transition-all duration-500 px-4 md:px-8 ${scrolled ? "h-16 md:h-16" : "h-20 md:h-[4.5rem]"}`}>
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center h-full py-2">
                            <Image
                                src="/CEAS LOGO 2.png"
                                alt="CEAS Logo"
                                width={140}
                                height={50}
                                className={`object-contain w-auto transition-all duration-500 ${scrolled ? "h-8 md:h-10" : "h-10 md:h-11"}`}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
                        <Link href="/" className="navbar-item relative text-[#333333] hover:text-[#0098D4] hover:bg-[#0098D4]/5 px-4 py-2 rounded-md transition-all font-medium text-[14px]">
                            Inicio
                        </Link>

                        <div className="navbar-item relative group h-full flex items-center px-4 py-2 rounded-md hover:bg-[#0098D4]/5 cursor-pointer">
                            <span className="flex items-center text-[#333333] group-hover:text-[#0098D4] transition-colors font-medium text-[14px]">
                                Cursos
                                <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                            </span>

                            <div className="navbar-dropdown absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                                <div className="bg-white shadow-[0_8px_24px_rgb(0,0,0,0.12)] rounded-lg border border-gray-100 overflow-hidden py-2">
                                    {courses.map((course) => (
                                        <NavbarFlowItem
                                            key={course.id}
                                            href={`/oferta-academica/${course.slug}`}
                                            text={course.title}
                                        />
                                    ))}
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <NavbarFlowItem
                                        href="/proximos-cursos"
                                        text="Ver Próximas Fechas"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <Link href="/testimonios" className="navbar-item relative text-[#333333] hover:text-[#0098D4] hover:bg-[#0098D4]/5 px-4 py-2 rounded-md transition-all font-medium text-[14px]">
                            Testimonios
                        </Link>*/}

                        <Link href="/faq" className="navbar-item relative text-[#333333] hover:text-[#0098D4] hover:bg-[#0098D4]/5 px-4 py-2 rounded-md transition-all font-medium text-[14px]">
                            FAQ
                        </Link>

                        <Link href="/blog" className="navbar-item relative text-[#333333] hover:text-[#0098D4] hover:bg-[#0098D4]/5 px-4 py-2 rounded-md transition-all font-medium text-[14px]">
                            Blog
                        </Link>

                        <Link href="/contacto" className="navbar-item relative text-[#333333] hover:text-[#0098D4] hover:bg-[#0098D4]/5 px-4 py-2 rounded-md transition-all font-medium text-[14px]">
                            Contacto
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <div
                            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 top-[70px] bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
                )}

                {/* Mobile Sidebar */}
                {isMobileMenuOpen && (
                    <div className="fixed top-[70px] left-0 w-[80%] h-[calc(100vh-70px)] bg-white z-50 md:hidden overflow-y-auto animate-slideInLeft shadow-2xl">
                        <div className="flex flex-col py-4">
                            <Link
                                href="/"
                                className="block px-6 py-4 border-b border-gray-100 text-[16px] font-medium text-[#333333] hover:text-[#0098D4] hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Inicio
                            </Link>

                            <div className="px-6 py-4 border-b border-gray-100">
                                <div className="text-[16px] font-medium text-[#333333] mb-3">Cursos</div>
                                <div className="pl-4 border-l-2 border-[#0098D4]/20 flex flex-col gap-2">
                                    {courses.map((course) => (
                                        <Link
                                            key={course.id}
                                            href={`/oferta-academica/${course.slug}`}
                                            className="block py-2 text-[15px] text-[#555555] hover:text-[#0098D4] transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {course.title}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/proximos-cursos"
                                        className="block py-2 mt-2 text-[15px] text-[#0098D4] font-medium transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Ver Próximas Fechas →
                                    </Link>
                                </div>
                            </div>

                            <Link
                                href="/testimonios"
                                className="block px-6 py-4 border-b border-gray-100 text-[16px] font-medium text-[#333333] hover:text-[#0098D4] hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Testimonios
                            </Link>

                            <Link
                                href="/faq"
                                className="block px-6 py-4 border-b border-gray-100 text-[16px] font-medium text-[#333333] hover:text-[#0098D4] hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                FAQ
                            </Link>

                            <Link
                                href="/blog"
                                className="block px-6 py-4 border-b border-gray-100 text-[16px] font-medium text-[#333333] hover:text-[#0098D4] hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>

                            <Link
                                href="/contacto"
                                className="block px-6 py-4 border-b border-gray-100 text-[16px] font-medium text-[#333333] hover:text-[#0098D4] hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contacto
                            </Link>

                            <div className="px-6 py-6 mt-4">
                                <a
                                    href="https://wa.me/522211502725"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full"
                                >
                                    Chat con asesor
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
