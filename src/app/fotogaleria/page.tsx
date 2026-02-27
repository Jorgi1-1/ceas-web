import Link from "next/link";
import Image from "next/image";
import DomeGallery from "@/components/ui/DomeGallery";
import ScrollFloat from "@/components/ui/ScrollFloat";

const localImages = [
    { src: "/HABILITACION.JPG", alt: "Habilitación" },
    { src: "/MANIPULACION VERT.jpg", alt: "Manipulación vertebral" },
    { src: "/MASAJE.png", alt: "Masaje" },
    { src: "/QUIROTERAPIAA.jpg", alt: "Quiroterapia" },
    { src: "/SPA.png", alt: "Spa" },
    { src: "/ESPALDA.JPG", alt: "Espalda" },
    { src: "/FEMOROTIBIAL.jpg", alt: "Femorotibial" },
    { src: "/PIERNA.JPG", alt: "Pierna" },
    { src: "/Sala CEAS.JPG", alt: "Sala CEAS" },
    { src: "/cuniformes.JPG", alt: "Uniformes" },
    { src: "/masaje feo.jpg", alt: "Instalaciones" }
];

export default function FotogaleriaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Banner Superior Standard */}
            <div className="relative w-full h-[250px] min-h-[250px] md:h-[350px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/Sala CEAS.JPG"
                        alt="Fotogalería Background"
                        fill
                        className="object-cover blur-[4px] md:blur-[6px] scale-110 opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center animate-fade-in-up mt-8 md:mt-0">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='top bottom+=20%'
                        scrollEnd='bottom bottom-=20%'
                        stagger={0.03}
                        as="h1"
                        textClassName="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-6"
                    >
                        Fotogalería
                    </ScrollFloat>
                    <div className="h-1.5 w-24 bg-secondary rounded-full shadow-sm"></div>
                </div>
            </div>

            {/* Main Content Centered - Dome Gallery */}
            <div className="w-full flex-grow flex flex-col relative z-0 bg-white">
                <div className="w-full relative min-h-[500px]" style={{ height: '70vh' }}>
                    <DomeGallery
                        images={localImages}
                        fit={0.9}
                        minRadius={350}
                        maxVerticalRotationDeg={10}
                        segments={36}
                        dragDampening={2}
                        grayscale={false}
                        overlayBlurColor="#ffffff"
                    />
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="w-full bg-bg-light border-t border-gray-100 py-12 relative z-20 flex flex-col items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <Link
                    href="/contacto"
                    className="px-10 py-4 bg-[#333333] hover:bg-black text-white text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase mb-8"
                >
                    Contáctanos
                </Link>

                <div className="text-center">
                    <Link href="/privacidad" className="text-[#84a5c0] hover:text-[#5a829e] text-sm underline transition-colors font-medium">
                        Aviso de privacidad
                    </Link>
                </div>
            </div>
        </div>
    );
}
