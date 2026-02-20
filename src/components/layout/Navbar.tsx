"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { courses } from "@/data/courses";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary tracking-tight">CEAS</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-text-dark hover:text-primary transition-colors font-medium">
                            Inicio
                        </Link>

                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center text-text-dark hover:text-primary transition-colors font-medium">
                                Oferta Académica
                                <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>

                            <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                                <div className="py-2">
                                    {courses.map((course) => (
                                        <Link
                                            key={course.id}
                                            href={`/oferta-academica/${course.slug}`}
                                            className="block px-4 py-2 text-sm text-text-dark hover:bg-bg-light hover:text-primary"
                                        >
                                            {course.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center text-text-dark hover:text-primary transition-colors font-medium">
                                Conócenos
                                <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>

                            <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                                <div className="py-2">
                                    <Link href="/nosotros" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-bg-light hover:text-primary transition-colors">
                                        Sobre nosotros
                                    </Link>
                                    <Link href="/fotogaleria" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-bg-light hover:text-primary transition-colors">
                                        Fotogalería
                                    </Link>
                                    <Link href="/privacidad" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-bg-light hover:text-primary transition-colors">
                                        Aviso de privacidad
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/proximos-cursos" className="text-text-dark hover:text-primary transition-colors font-medium">
                            Próximos Cursos
                        </Link>

                        <Link href="/contacto" className="text-text-dark hover:text-primary transition-colors font-medium">
                            Contacto
                        </Link>
                        <Link href="/blog" className="text-text-dark hover:text-primary transition-colors font-medium">
                            Blog
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flexitems-center md:hidden flex">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-text-dark hover:text-primary hover:bg-bg-light focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:text-primary hover:bg-bg-light"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Inicio
                        </Link>

                        <div className="px-3 py-2">
                            <div className="text-base font-medium text-text-dark mb-2">Oferta Académica</div>
                            <div className="pl-4 space-y-1 border-l-2 border-bg-light">
                                {courses.map((course) => (
                                    <Link
                                        key={course.id}
                                        href={`/oferta-academica/${course.slug}`}
                                        className="block px-3 py-2 rounded-md text-sm text-text-light hover:text-primary hover:bg-bg-light"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {course.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="px-3 py-2">
                            <div className="text-base font-medium text-text-dark mb-2">Conócenos</div>
                            <div className="pl-4 space-y-1 border-l-2 border-bg-light">
                                <Link
                                    href="/nosotros"
                                    className="block px-3 py-2 rounded-md text-sm text-text-light hover:text-primary hover:bg-bg-light transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sobre nosotros
                                </Link>
                                <Link
                                    href="/fotogaleria"
                                    className="block px-3 py-2 rounded-md text-sm text-text-light hover:text-primary hover:bg-bg-light transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Fotogalería
                                </Link>
                                <Link
                                    href="/privacidad"
                                    className="block px-3 py-2 rounded-md text-sm text-text-light hover:text-primary hover:bg-bg-light transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Aviso de privacidad
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/proximos-cursos"
                            className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:text-primary hover:bg-bg-light"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Próximos Cursos
                        </Link>

                        <Link
                            href="/contacto"
                            className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:text-primary hover:bg-bg-light"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contacto
                        </Link>

                        <Link
                            href="/blog"
                            className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:text-primary hover:bg-bg-light"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
