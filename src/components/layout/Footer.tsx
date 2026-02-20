export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
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
