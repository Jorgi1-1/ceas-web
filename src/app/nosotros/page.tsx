import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function SobreNosotrosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Banner Superior Standard */}
            <div className="relative w-full h-[250px] min-h-[250px] md:h-[350px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/Sala CEAS.JPG"
                        alt="Sobre Nosotros Background"
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
                        Sobre Nosotros
                    </ScrollFloat>
                    <div className="h-1.5 w-24 bg-secondary rounded-full shadow-sm"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full flex-grow flex flex-col items-center">

                {/* Intro paragraph - Light background section */}
                <div className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center animate-fade-in-up">
                    <div className="md:w-1/2">
                        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Quiénes Somos</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">Expertos formadores en el área de la salud alternativa</h3>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify mb-6">
                            Somos un centro de capacitación con registro en la DGCFT dirección general de centros de formación
                            para el trabajo, que brinda capacitación en las distintas áreas de la quiroterapia.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify mb-6">
                            Abarcamos diversas formas de masaje, medios físicos naturales, técnicas de manipulación vertebral y de extremidades, con
                            fundamento en la quiropráctica y la osteopatía estructural.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify border-l-4 border-primary pl-4 italic">
                            Contamos con un amplio equipo de profesionales especialistas para asegurar la mejor formación de cada uno de los alumnos.
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full h-[500px] relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                        <Image
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                            alt="Especialista"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Misión y Visión - Split screen layout */}
                <div className="w-full bg-bg-light border-y border-gray-100 mt-16 pb-16 pt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Mision Card */}
                        <div className="bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <Target className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Misión</h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Formar profesionales con alta calidad humana, responsables,
                                honestos, con una sólida preparación, acordes a la realidad social,
                                con actitud de servicio, capaces de contribuir al desarrollo humano a
                                través de la aplicación de sus competencias profesionales.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <Eye className="w-12 h-12 text-secondary mb-6" strokeWidth={1.5} />
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Visión</h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Brindar servicios de alta calidad, con enfoque humanista,
                                comprometidos con la formación integral del ser humano y al
                                servicio de la sociedad, con equidad, tolerancia, lealtad, justicia,
                                responsabilidad, honestidad y solidaridad, en beneficio de la cultura
                                de nuestro país, formando profesionales para el bien de la humanidad.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Valores Section - Grid Pattern */}
                <div className="w-full bg-primary py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-wide">Nuestros Valores</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { text: 'Honestidad', icon: CheckCircle2 },
                                { text: 'Honradez', icon: CheckCircle2 },
                                { text: 'Respeto', icon: CheckCircle2 },
                                { text: 'Equidad', icon: CheckCircle2 },
                                { text: 'Responsabilidad', icon: CheckCircle2 },
                                { text: 'Tolerancia', icon: CheckCircle2 },
                                { text: 'Lealtad', icon: CheckCircle2 },
                                { text: 'Justicia', icon: CheckCircle2 },
                                { text: 'Solidaridad', icon: CheckCircle2 },
                                { text: 'Integridad', icon: CheckCircle2 },
                                { text: 'Compromiso', icon: CheckCircle2 }
                            ].map((valor) => (
                                <div key={valor.text} className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 flex flex-col items-center justify-center hover:bg-white/20 transition-colors shadow-sm cursor-default group">
                                    <valor.icon className="w-6 h-6 text-white mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                                    <span className="text-white font-bold tracking-wide text-lg text-center">{valor.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Objetivos Section */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">

                    <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden mb-16">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center relative z-10">
                            <Award className="w-8 h-8 text-primary mr-4" />
                            Objetivo General
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify relative z-10">
                            Formar profesionales con conocimiento y dominio del área
                            correspondiente, con habilidades, destrezas, conocimiento y criterio
                            para desempeñarse con ética y calidad en su profesión. Capaces de
                            intervenir en los procesos de curación, recuperación y adaptar al
                            máximo las capacidades motrices a personas con alteraciones físicas
                            o sensoriales que generen limitaciones funcionales temporales y/o
                            discapacidad producidas por una lesión, enfermedad u otra causa, a
                            través del análisis, la evaluación y la administración de tratamientos
                            físicos y de rehabilitación.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 pl-4 border-l-4 border-secondary">Objetivos Específicos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Formar profesionales con alto sentido humano y ético que desde su profesión tengan la capacidad de participar activamente en la solución de problemas de salud.',
                                'Brindar una sólida preparación académica que promueva la formación de criterios y toma de decisiones que les permita el logro de la excelencia en su desempeño profesional.',
                                'Promover la investigación para que contribuya a los avances de la ciencia y tecnología universal y aporte al conocimiento propio de la profesión.',
                                'Crear una actitud positiva hacia el trabajo multidisciplinario, la auto-formación y la permanente educación.'
                            ].map((obj, i) => (
                                <div key={i} className="bg-bg-light rounded-xl p-8 hover:bg-primary/5 transition-colors duration-300 border border-transparent hover:border-primary/10 flex">
                                    <div className="text-3xl font-black text-primary/20 mr-4 font-serif">0{i + 1}</div>
                                    <p className="text-gray-700 leading-relaxed text-sm md:text-base mt-2">{obj}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gray-900 text-white rounded-xl p-8 text-center max-w-3xl mx-auto shadow-2xl">
                            <p className="text-lg font-medium leading-relaxed italic">
                                &quot;Formar profesionales que consideren al ser humano integral en sus
                                aspectos físicos, emocionales, mentales y sociales de modo que el
                                ejercicio de la profesión sea humano desde todo punto de vista.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer link */}
                <div className="w-full text-center py-12 border-t border-gray-100 bg-bg-light">
                    <Link href="/privacidad" className="text-[#84a5c0] hover:text-[#5a829e] text-sm underline font-medium transition-colors">
                        Consultar Aviso de Privacidad
                    </Link>
                </div>
            </div>
        </div>
    );
}
