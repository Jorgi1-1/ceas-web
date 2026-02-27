import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Award, Star } from "lucide-react";
import ScrollFloat from "@/components/ui/ScrollFloat";

const upcomingEvents = [
    {
        id: "quiroterapia",
        title: "Formación integral en Quiroterapia",
        dates: [
            "Jueves 19 de Marzo",
            "Sábado 18 de Abril"
        ],
        duration: "20 meses",
        frequency: "Clases 1 día a la semana",
        schedule: "9:00 am a 3:00 pm",
        imagePath: "/QUIROTERAPIAA.jpg",
        courseLink: "/oferta-academica/quiroterapia-integral"
    },
    {
        id: "manipulaciones",
        title: "Curso de Manipulaciones vertebrales avanzadas",
        dates: [
            "Sábado 28 de Marzo"
        ],
        duration: "8 meses",
        frequency: "Clases 1 día a la semana",
        schedule: "9:30 am a 2:30 pm",
        imagePath: "/MANIPULACION VERT.jpg",
        courseLink: "/oferta-academica/manipulaciones-vertebrales"
    },
    {
        id: "spa",
        title: "Diplomado SPA",
        dates: [
            "Miércoles 15 de Abril"
        ],
        duration: "9 meses",
        frequency: "Clases 1 día a la semana",
        schedule: "10:00 am a 2:30 pm",
        imagePath: "/MASAJE.png",
        courseLink: "/oferta-academica/terapeuta-spa"
    }
];

export default function ProximosCursosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-bg-light">
            {/* Header section similar to the original website but modernized */}
            {/* Banner Superior Standard */}
            <div className="relative w-full h-[250px] min-h-[250px] md:h-[350px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/Sala CEAS.JPG"
                        alt="Background"
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
                        textClassName="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-4"
                    >
                        Próximos Cursos
                    </ScrollFloat>
                    <div className="h-1.5 w-24 bg-secondary rounded-full shadow-sm mb-4"></div>
                    <p className="text-lg md:text-2xl text-white/90 font-medium tracking-wide drop-shadow-sm">
                        Reserva tu lugar y transforma tu futuro profesional
                    </p>
                </div>
            </div>

            {/* Courses Matrix */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingEvents.map((event, index) => (
                        <div key={event.id} className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}`}>
                            {/* Course Image Header rounded like in original but better UI */}
                            <div className="h-48 relative w-full border-b-[5px] border-primary">
                                <Image
                                    src={event.imagePath}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="text-xl font-bold text-white drop-shadow-md leading-tight">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                {/* Start Dates */}
                                <div className="mb-6">
                                    <div className="flex items-center mb-3">
                                        <Calendar className="w-5 h-5 text-primary mr-2" />
                                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Inicios de clases</h4>
                                    </div>
                                    <div className="space-y-2 pl-7">
                                        {event.dates.map((date, idx) => (
                                            <div key={idx} className="bg-primary/5 border border-primary/20 text-primary font-semibold px-3 py-1.5 rounded-md text-sm cursor-default hover:bg-primary/10 transition-colors">
                                                {date}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <Award className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-text-light font-medium uppercase tracking-wider">Duración</p>
                                            <p className="text-text-dark font-semibold">{event.duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-text-light font-medium uppercase tracking-wider">Horario & Frecuencia</p>
                                            <p className="text-text-dark font-semibold"><span className="text-primary italic">{event.frequency}</span></p>
                                            <p className="text-text-dark text-sm mt-1">{event.schedule}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Link to details if available */}
                                <div className="mt-auto">
                                    {event.courseLink !== "#" ? (
                                        <Link
                                            href={event.courseLink}
                                            className="w-full inline-flex justify-center items-center px-4 py-2 bg-bg-light text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors duration-300"
                                        >
                                            Ver detalles del plan
                                        </Link>
                                    ) : (
                                        <div className="w-full inline-flex justify-center items-center px-4 py-2 bg-gray-50 text-gray-400 font-medium rounded-lg cursor-not-allowed border border-gray-100">
                                            Detalles próximamente
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Promotion Banner from Screenshot */}
            <section className="bg-white py-16 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <p className="text-secondary font-medium tracking-wide uppercase mb-4 flex items-center justify-center">
                        <Star className="w-5 h-5 mr-2 fill-current" />
                        Inscríbete ahora para recibir nuestra
                        <Star className="w-5 h-5 ml-2 fill-current" />
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-teal-800 mb-6 uppercase tracking-tight">
                        Promoción por tiempo limitado
                    </h2>
                    <div className="inline-block bg-teal-50 border-2 border-teal-100 rounded-2xl p-6 md:p-8 mb-10 shadow-sm">
                        <p className="text-xl md:text-2xl text-teal-800 font-medium italic">
                            25% de beca en colegiatrua <br className="hidden md:block" />
                            <span className="text-lg md:text-xl font-normal text-teal-700">en cursos mayores a 8 meses de duración</span>
                        </p>
                    </div>

                    <div>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#333333] hover:bg-black text-white text-xl font-bold rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery mimicking bottom area of screenshot */}
            <section className="py-12 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {/* Using local images for the thumbnail gallery */}
                        <div className="aspect-square relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/HABILITACION.JPG" alt="Habilitación gallery" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="aspect-square relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/QUIROTERAPIA.jpg" alt="Quiroterapia gallery" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="aspect-square relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/SPA.png" alt="SPA gallery" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="aspect-square relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/MASAJE.png" alt="Masaje gallery" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="aspect-square relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/MANIPULACION VERT.jpg" alt="Manipulación gallery" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
