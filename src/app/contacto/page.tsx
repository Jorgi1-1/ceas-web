"use client";

import { useState } from "react";
import { useForm as useHookForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Clock, MapPin, Phone, Send, Building2 } from "lucide-react";
import Link from "next/link";
import { courses } from "@/data/courses";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
);

const formSchema = z.object({
    nombre: z.string().min(1, { message: "El nombre es requerido." }),
    email: z.string().email({ message: "Por favor, ingresa un correo electrónico válido." }),
    mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
    whatsapp: z.string().min(10, { message: "El número de WhatsApp es requerido." }),
    opcion: z.string().min(1, { message: "Por favor elige una opción." })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactoPage() {
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useHookForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const [state, sendToFormspree] = useFormspree("xbdaabvn");

    const onSubmit = async (data: FormValues) => {
        await sendToFormspree(data);
        if (state.succeeded || !state.errors) {
            setSubmitSuccess(true);
            reset();

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }
    };



    return (
        <div className="flex flex-col min-h-screen bg-bg-light">
            {/* Banner Superior con Abstract Shapes */}
            <div className="bg-primary py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
                        Contacto
                    </h1>
                    <p className="mt-4 text-white/90 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
                        Estamos listos para guiarte en tu desarrollo profesional
                    </p>
                </div>
            </div>

            {/* Main Content Premium Split Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20 w-full flex-grow">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-100">

                    {/* Left Panel: Info de Contacto con Diseño Immersivo */}
                    <div className="bg-gradient-to-br from-primary to-[#0f8eab] p-10 md:p-14 text-white lg:w-2/5 relative overflow-hidden">
                        {/* Motif decorativo */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 border-4 border-white/10 rounded-full"></div>
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 border-4 border-white/20 rounded-full"></div>

                        <div className="relative z-10 h-full flex flex-col">
                            <h2 className="text-3xl font-bold mb-8">Información</h2>
                            <p className="text-white/80 mb-10 leading-relaxed">
                                Si tienes alguna duda sobre nuestros planes de estudio o procesos de admisión, envíanos un mensaje. Un asesor académico se pondrá en contacto contigo a la brevedad.
                            </p>

                            <ul className="space-y-8 flex-grow">
                                <li className="flex items-start group">
                                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-white/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-semibold text-lg mb-1">Visítanos</h3>
                                        <p className="text-white/80 leading-relaxed text-sm">
                                            IFPCEAS Colegio de Estudios<br />Alternativos en Salud<br />
                                            Calle 49 Poniente #721<br />
                                            Colonia Prados Agua Azul,<br />
                                            Puebla, Puebla.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start group">
                                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-[#25D366] transition-colors">
                                        <WhatsAppIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-semibold text-lg mb-1">WhatsApp directo</h3>
                                        <a href="https://wa.me/522211502725" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">
                                            221 150 2725
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start group">
                                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-white/20 transition-colors">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-semibold text-lg mb-1">Correo Electrónico</h3>
                                        <a href="mailto:contacto@ceas.com.mx" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                                            contacto@ceas.com.mx
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start group">
                                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-white/20 transition-colors">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-semibold text-lg mb-1">Horarios</h3>
                                        <div className="text-white/80 text-sm space-y-1">
                                            <p>Lun - Vie: 9:00 am - 5:30 pm</p>
                                            <p>Sábados: 9:00 am a 2:30 pm</p>
                                            <p><span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded text-xs mt-1 inline-block">Domingos Cerrado</span></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Panel: Formulario Premium */}
                    <div className="bg-white p-10 md:p-14 lg:w-3/5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Envíanos un mensaje</h2>
                        <p className="text-gray-500 text-sm mb-8 font-medium">
                            Completa el formulario y te enviaremos la información que necesitas.
                        </p>

                        {submitSuccess && (
                            <div className="mb-8 p-4 bg-green-50 rounded-xl border border-green-200 shadow-sm animate-fade-in-up flex items-start">
                                <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600">
                                    <Send className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-green-800 font-bold mb-1">¡Mensaje enviado con éxito!</h4>
                                    <p className="text-green-700 text-sm">Nuestro equipo analizará tu solicitud y te contactará a través de correo o WhatsApp en menos de 24 horas laborables.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Nombre */}
                                <div className="space-y-2">
                                    <label htmlFor="nombre" className="text-sm font-semibold text-gray-700">
                                        Nombre Completo <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="nombre"
                                        type="text"
                                        placeholder="Ej. Juan Pérez"
                                        {...register("nombre")}
                                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 ${errors.nombre ? "border-red-400 bg-red-50/50 focus:ring-red-400" : "border-gray-200 focus:border-primary focus:ring-primary"} transition-all duration-300 outline-none focus:ring-2 focus:ring-opacity-20`}
                                    />
                                    {errors.nombre && <p className="text-xs text-red-500 font-medium">{errors.nombre.message}</p>}
                                </div>

                                {/* Teléfono / WhatsApp */}
                                <div className="space-y-2">
                                    <label htmlFor="whatsapp" className="text-sm font-semibold text-gray-700">
                                        Número de WhatsApp <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="whatsapp"
                                        type="tel"
                                        placeholder="Ej. 222 123 4567"
                                        {...register("whatsapp")}
                                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 ${errors.whatsapp ? "border-red-400 bg-red-50/50 focus:ring-red-400" : "border-gray-200 focus:border-primary focus:ring-primary"} transition-all duration-300 outline-none focus:ring-2 focus:ring-opacity-20`}
                                    />
                                    {errors.whatsapp && <p className="text-xs text-red-500 font-medium">{errors.whatsapp.message}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                    Correo Electrónico <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    {...register("email")}
                                    className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 ${errors.email ? "border-red-400 bg-red-50/50 focus:ring-red-400" : "border-gray-200 focus:border-primary focus:ring-primary"} transition-all duration-300 outline-none focus:ring-2 focus:ring-opacity-20`}
                                />
                                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                            </div>

                            {/* Opción / Curso */}
                            <div className="space-y-2">
                                <label htmlFor="opcion" className="text-sm font-semibold text-gray-700">
                                    ¿En qué programa estás interesado? <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="opcion"
                                        {...register("opcion")}
                                        className={`w-full px-4 py-3 rounded-xl border appearance-none bg-gray-50/50 ${errors.opcion ? "border-red-400 bg-red-50/50 focus:ring-red-400" : "border-gray-200 focus:border-primary focus:ring-primary"} transition-all duration-300 outline-none text-gray-700 focus:ring-2 focus:ring-opacity-20 cursor-pointer`}
                                    >
                                        <option value="">Selecciona una opción...</option>
                                        <optgroup label="Programas Académicos">
                                            {courses.map(course => (
                                                <option key={course.id} value={course.title}>{course.title}</option>
                                            ))}
                                        </optgroup>
                                        <optgroup label="Otros">
                                            <option value="Información General">Información General</option>
                                            <option value="Agendar cita para visita">Agendar cita presencial</option>
                                        </optgroup>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                    </div>
                                </div>
                                {errors.opcion && <p className="text-xs text-red-500 font-medium">{errors.opcion.message}</p>}
                            </div>

                            {/* Mensaje */}
                            <div className="space-y-2">
                                <label htmlFor="mensaje" className="text-sm font-semibold text-gray-700">
                                    Mensaje Adicional <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="mensaje"
                                    rows={4}
                                    placeholder="Escribe tus dudas, comentarios o preguntas específicas..."
                                    {...register("mensaje")}
                                    className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 ${errors.mensaje ? "border-red-400 bg-red-50/50 focus:ring-red-400" : "border-gray-200 focus:border-primary focus:ring-primary"} transition-all duration-300 outline-none resize-none focus:ring-2 focus:ring-opacity-20`}
                                ></textarea>
                                {errors.mensaje && <p className="text-xs text-red-500 font-medium">{errors.mensaje.message}</p>}
                            </div>

                            {/* Submit */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full sm:w-auto px-10 py-4 bg-[#333333] hover:bg-black text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:-translate-y-1"} flex justify-center items-center`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></span>
                                            Enviando solicitud...
                                        </>
                                    ) : (
                                        "Enviar Solicitud Segura"
                                    )}
                                </button>
                                <p className="mt-4 text-xs text-gray-400 flex items-center">
                                    Al enviar este formulario, aceptas nuestro <Link href="/privacidad" className="ml-1 text-primary hover:underline">Aviso de Privacidad</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
