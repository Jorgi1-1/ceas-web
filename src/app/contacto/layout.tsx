import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contacto e Inscripciones",
  description: "Ponte en contacto con CEAS en Puebla. Solicita informes sobre inscripciones, costos y horarios para nuestros diplomados en quiroterapia y masajes.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto e Inscripciones | CEAS",
    description: "Ponte en contacto con CEAS en Puebla. Solicita informes sobre inscripciones, costos y horarios para nuestros diplomados en quiroterapia y masajes.",
    images: OG_IMAGES,
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
