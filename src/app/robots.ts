import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

// Última revisión: 2026-09-03
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/admin/",
        // public/backup/ guarda los originales sin comprimir de imágenes que ya
        // se sirven desde la raíz. Nada en el sitio los enlaza, pero Next los
        // publica igual y son contenido duplicado rastreable.
        "/backup/",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
