import { SITE_URL } from "@/config/site";

/**
 * Imagen social por defecto, generada por src/app/opengraph-image.tsx.
 *
 * Hay que declararla explícitamente en cada página en vez de confiar en que se
 * herede del layout: Next reemplaza el objeto `openGraph` completo cuando una
 * página lo redefine, así que toda ruta con título social propio se quedaba sin
 * imagen. La convención de archivo tampoco alcanza — sólo cubre su segmento.
 *
 * Las páginas de diplomado y de blog no la usan: tienen una foto propia que
 * describe mejor su contenido que una tarjeta genérica.
 */
export const OG_IMAGE = {
    url: `${SITE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: "CEAS — Centro de Estudios Avanzados en Salud, Puebla",
} as const;

export const OG_IMAGES = [OG_IMAGE];
