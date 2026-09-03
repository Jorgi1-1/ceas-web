import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

import ScrollObserver from "@/components/ui/ScrollObserver";
import { SiteConfigProvider } from "@/context/SiteConfigContext";
import { getSiteConfig } from "@/lib/getSiteConfig";
import { SITE_URL, googleBusinessProfile } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Centro de Estudios Avanzados en Salud - CEAS Puebla",
    template: "%s | CEAS Puebla"
  },
  description: "Formación profesional en quiroterapia, masajes, rehabilitación y habilitación física funcional en Puebla. Diplomados con aval de la SEP y alta calidad humana.",
  alternates: {
    canonical: "/",
  },
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
    "diplomado de masajes puebla",
    "escuela de masajes en puebla",
    "diplomado spa puebla",
    "aprender masoterapia puebla",
    "CEAS Puebla"
  ],
  authors: [{ name: "CEAS" }],
  creator: "CEAS",
  publisher: "CEAS",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "CEAS Puebla - Centro de Estudios Avanzados en Salud",
    title: "Centro de Estudios Avanzados en Salud - CEAS Puebla",
    description: "Formación profesional en quiroterapia, masajes, rehabilitación y habilitación física funcional en Puebla. Diplomados con aval de la SEP.",
    // La imagen la aporta src/app/opengraph-image.tsx (1200×630). Declararla
    // aquí la ataría a este objeto, y cualquier página que redefina `openGraph`
    // la perdería — que es justo el bug que teníamos con el logo cuadrado.
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro de Estudios Avanzados en Salud - CEAS",
    description: "Formación profesional en quiroterapia, masajes, rehabilitación y habilitación física funcional en Puebla. Diplomados con aval de la SEP.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      "name": "CEAS - Centro de Estudios Avanzados en Salud",
      "alternateName": "IFPCEAS",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        "url": `${SITE_URL}/icon.png`,
        "caption": "CEAS"
      },
      "image": `${SITE_URL}/icon.png`,
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
        "https://www.facebook.com/ifpceas",
        "https://www.instagram.com/ceaspuebla",
        "https://www.tiktok.com/@ceas_puebla",
        googleBusinessProfile.mapsUrl
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      "name": "CEAS - Centro de Estudios Avanzados en Salud",
      "image": `${SITE_URL}/icon.png`,
      "telephone": "+522211502725",
      "email": "contacto@ceas.com.mx",
      "priceRange": "$$",
      "areaServed": {
        "@type": "City",
        "name": "Puebla"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Privada 5 B Sur #4718, Col. Huexotitla",
        "addressLocality": "Puebla",
        "addressRegion": "Puebla",
        "postalCode": "72534",
        "addressCountry": "MX"
      },
      "sameAs": [
        "https://www.facebook.com/ifpceas",
        "https://www.instagram.com/ceaspuebla",
        "https://www.tiktok.com/@ceas_puebla",
        googleBusinessProfile.mapsUrl
      ],
      "hasMap": googleBusinessProfile.mapsUrl,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": googleBusinessProfile.latitude,
        "longitude": googleBusinessProfile.longitude
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();

  return (
    <html lang="es-MX">
      <body className={`${poppins.variable} antialiased bg-bg-light text-text-dark font-sans flex flex-col min-h-screen selection:bg-primary/20`}>
        <SiteConfigProvider initialConfig={config}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#007CAD] focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md focus:border focus:border-gray-200">
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
        </SiteConfigProvider>
      </body>
    </html>
  );
}
