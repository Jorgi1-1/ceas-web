import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto e Inscripciones",
  description: "Ponte en contacto con CEAS en Puebla. Solicita informes sobre inscripciones, costos y horarios para nuestros diplomados en quiroterapia y masajes.",
  openGraph: {
    title: "Contacto e Inscripciones | CEAS",
    description: "Ponte en contacto con CEAS en Puebla. Solicita informes sobre inscripciones, costos y horarios para nuestros diplomados en quiroterapia y masajes.",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
