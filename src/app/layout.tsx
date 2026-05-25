import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

import ScrollObserver from "@/components/ui/ScrollObserver";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ceas.com.mx"),
  title: {
    default: "Centro de Estudios Avanzados en Salud - CEAS",
    template: "%s | CEAS"
  },
  description: "Formación profesional en quiroterapia, masajes, rehabilitación y habilitación física funcional en Puebla. Diplomados con aval de la SEP y alta calidad humana.",
  keywords: [
    "quiroterapia",
    "masoterapia",
    "osteopatía",
    "ventosas",
    "manipulaciones articulares",
    "rehabilitación física",
    "habilitación física funcional",
    "diplomado quiroterapia",
    "curso masaje puebla",
    "CEAS Puebla"
  ],
  authors: [{ name: "CEAS" }],
  creator: "CEAS",
  publisher: "CEAS",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://ceas.com.mx",
    siteName: "CEAS - Centro de Estudios Avanzados en Salud",
    title: "Centro de Estudios Avanzados en Salud - CEAS",
    description: "Formación profesional en quiroterapia, masajes, rehabilitación y habilitación física funcional en Puebla. Diplomados con aval de la SEP.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "CEAS Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro de Estudios Avanzados en Salud - CEAS",
    description: "Formación profesional en quiroterapia, masajes, rehabilitación y habilitación física funcional en Puebla. Diplomados con aval de la SEP.",
    images: ["/icon.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://ceas.com.mx/#organization",
      "name": "CEAS - Centro de Estudios Avanzados en Salud",
      "alternateName": "IFPCEAS",
      "url": "https://ceas.com.mx",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://ceas.com.mx/#logo",
        "url": "https://ceas.com.mx/icon.png",
        "caption": "CEAS"
      },
      "image": "https://ceas.com.mx/icon.png",
      "description": "Institución educativa especializada en quiroterapia, masajes, rehabilitación y habilitación física funcional en Puebla, México.",
      "telephone": "+522211502725",
      "email": "contacto@ceas.com.mx",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Privada 5 B Sur #4718, Col. Huexotitla",
        "addressLocality": "Puebla",
        "addressRegion": "Puebla",
        "postalCode": "72534",
        "addressCountry": "MX"
      },
      "sameAs": [
        "https://www.facebook.com/ifpceas"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ceas.com.mx/#localbusiness",
      "name": "CEAS - Centro de Estudios Avanzados en Salud",
      "image": "https://ceas.com.mx/icon.png",
      "telephone": "+522211502725",
      "email": "contacto@ceas.com.mx",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Privada 5 B Sur #4718, Col. Huexotitla",
        "addressLocality": "Puebla",
        "addressRegion": "Puebla",
        "postalCode": "72534",
        "addressCountry": "MX"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "14:30"
        }
      ]
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} antialiased bg-bg-light text-text-dark font-sans flex flex-col min-h-screen selection:bg-primary/20`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#0098D4] focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md focus:border focus:border-gray-200">
          Saltar al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollObserver />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
