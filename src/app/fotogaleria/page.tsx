import Image from "next/image";
import Link from "next/link";

const photos = [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533267590209-4cd95ce4ad6c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531641063231-50e56165d3d4?q=80&w=800&auto=format&fit=crop"
];

export default function FotogaleriaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Banner Superior */}
            <div className="bg-[#00897b] py-20 shadow-sm w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
                        Fotogalería
                    </h1>
                </div>
            </div>

            {/* Main Content Centered */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow flex flex-col items-center">

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full mb-16 animate-fade-in-up">
                    {photos.map((url, index) => (
                        <div key={index} className="aspect-square relative group overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <Image
                                src={url}
                                alt={`CEAS Photo ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                            {/* Opcional: overlay ligero para premium feel */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Contacto Button */}
                <Link
                    href="/contacto"
                    className="px-10 py-3 bg-[#333] hover:bg-black text-white font-bold text-sm tracking-wide rounded-sm shadow-md hover:shadow-lg transition-all duration-300 uppercase mb-20"
                >
                    Contacto
                </Link>

                {/* Footer link */}
                <div className="text-center mt-auto mb-8">
                    <Link href="/privacidad" className="text-[#84a5c0] hover:text-[#5a829e] text-sm underline transition-colors">
                        Aviso de privacidad
                    </Link>
                </div>
            </div>
        </div>
    );
}
