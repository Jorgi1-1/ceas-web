"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { siteConfig as fallbackConfig } from "@/config/site";

export default function AdminDashboard() {
    const [config, setConfig] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const docRef = doc(db, "config", "siteConfig");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setConfig(docSnap.data());
                } else {
                    setConfig(fallbackConfig);
                }
            } catch (error) {
                console.error("Error fetching config:", error);
                setConfig(fallbackConfig);
            } finally {
                setLoading(false);
            }
        };

        fetchConfig();
    }, []);

    const validateNumbers = () => {
        if (config.urgency.availableSpots < 0) return "Los lugares disponibles no pueden ser negativos";
        if (config.urgency.totalSpots <= 0) return "Los lugares totales deben ser mayor a 0";
        if (config.urgency.availableSpots > config.urgency.totalSpots) return "Los lugares disponibles no pueden superar al total";
        if (config.urgency.discountPercentage < 0 || config.urgency.discountPercentage > 100) return "El descuento debe estar entre 0 y 100";
        return null;
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage("");

        const validationError = validateNumbers();
        if (validationError) {
            setMessage(`Error: ${validationError}`);
            setSaving(false);
            return;
        }

        try {
            await setDoc(doc(db, "config", "siteConfig"), config);
            setMessage("¡Configuración guardada exitosamente!");
        } catch (error) {
            console.error("Error saving:", error);
            setMessage("Error al guardar. Revisa los permisos.");
        } finally {
            setSaving(false);
            setTimeout(() => setMessage(""), 3000);
        }
    };

    if (loading) return <ProtectedRoute><div className="p-8 text-center">Cargando datos...</div></ProtectedRoute>;

    return (
        <ProtectedRoute>
            <div className="max-w-5xl mx-auto py-10 px-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Panel de Control</h1>
                    <button 
                        onClick={() => auth.signOut()}
                        className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                        Cerrar Sesión
                    </button>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-[#759CB6] mb-6">Configuración de Urgencia (Banners)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Próxima Fecha General</label>
                                <input 
                                    type="date"
                                    value={config.urgency.nextStartDate}
                                    onChange={e => setConfig({...config, urgency: {...config.urgency, nextStartDate: e.target.value}})}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#759CB6]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Lugares Disponibles</label>
                                <input 
                                    type="number"
                                    min="0"
                                    value={config.urgency.availableSpots}
                                    onChange={e => setConfig({...config, urgency: {...config.urgency, availableSpots: parseInt(e.target.value) || 0}})}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#759CB6]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Lugares Totales</label>
                                <input 
                                    type="number"
                                    min="1"
                                    value={config.urgency.totalSpots}
                                    onChange={e => setConfig({...config, urgency: {...config.urgency, totalSpots: parseInt(e.target.value) || 0}})}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#759CB6]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Porcentaje de Descuento (%)</label>
                                <input 
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={config.urgency.discountPercentage}
                                    onChange={e => setConfig({...config, urgency: {...config.urgency, discountPercentage: parseInt(e.target.value) || 0}})}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#759CB6]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-[#759CB6] mb-6">Fechas por Curso</h2>
                        <div className="space-y-6">
                            {config.upcomingEvents.map((course: any, index: number) => (
                                <div key={course.id} className="border-b pb-6 last:border-0 last:pb-0">
                                    <h3 className="font-semibold text-gray-800 mb-3">{course.title}</h3>
                                    
                                    <div className="space-y-3">
                                        {course.dates.map((date: string, dateIndex: number) => (
                                            <div key={dateIndex} className="flex gap-2">
                                                <input 
                                                    type="date"
                                                    value={date}
                                                    onChange={(e) => {
                                                        const newEvents = [...config.upcomingEvents];
                                                        newEvents[index].dates[dateIndex] = e.target.value;
                                                        setConfig({...config, upcomingEvents: newEvents});
                                                    }}
                                                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#759CB6]"
                                                />
                                                <button 
                                                    type="button"
                                                    onClick={() => {
                                                        const newEvents = [...config.upcomingEvents];
                                                        newEvents[index].dates.splice(dateIndex, 1);
                                                        setConfig({...config, upcomingEvents: newEvents});
                                                    }}
                                                    className="px-3 py-2 text-red-500 bg-red-50 rounded-lg hover:bg-red-100"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        ))}
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                const newEvents = [...config.upcomingEvents];
                                                newEvents[index].dates.push("");
                                                setConfig({...config, upcomingEvents: newEvents});
                                            }}
                                            className="text-sm font-medium text-[#759CB6] hover:text-[#5a809a]"
                                        >
                                            + Agregar otra fecha
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-[#759CB6] hover:bg-[#5a809a] text-white font-semibold py-3 px-8 rounded-lg transition-colors disabled:opacity-70"
                        >
                            {saving ? "Guardando..." : "Guardar Cambios Públicamente"}
                        </button>
                        {message && (
                            <span className={`font-medium ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                                {message}
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </ProtectedRoute>
    );
}
