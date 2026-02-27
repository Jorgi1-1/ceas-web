import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
                <div className="mb-6 opacity-80 hover:opacity-100 transition-opacity flex justify-center">
                    <Image
                        src="/CEAS LOGO.png"   
                        alt="CEAS Logo"
                        width={200}
                        height={70}
                        className="object-contain w-auto h-12 md:h-16"
                    />
                </div>
                <a href="/privacidad" className="text-sm text-text-light hover:text-primary transition-colors mb-4 inline-block">
                    Aviso de privacidad
                </a>
                <p className="text-sm text-text-light text-center">
                    © 2018 Instituto de Formación Profesional IFPCEAS. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
