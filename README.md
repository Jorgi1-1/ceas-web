# Colegio de Estudios Alternativos en Salud (CEAS) - Web

Sitio web oficial del **Colegio de Estudios Alternativos en Salud (CEAS)**, una institución dedicada a formar profesionales con alta calidad humana en el área de fisioterapia, bienestar y salud alternativa.

## 🌟 Características Principales

- **Oferta Educativa:** Catálogo de cursos, diplomados y programas especializados.
- **Próximos Cursos:** Calendario interactivo con las fechas de inicio de los programas venideros.
- **Blog:** Sección de artículos y noticias relevantes sobre salud y bienestar.
- **Fotogalería:** Espacio visual para mostrar instalaciones, eventos y prácticas de los estudiantes.
- **Contacto:** Formulario de contacto funcional integrado con Formspree.
- **Diseño Moderno y Responsivo:** Experiencia de usuario optimizada para cualquier dispositivo (móviles, tablets y computadoras) utilizando Tailwind CSS.

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con herramientas de vanguardia para garantizar rendimiento y escalabilidad:

- **[Next.js](https://nextjs.org/)**: Framework de React para renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).
- **[React 19](https://react.dev/)**: Biblioteca de JavaScript para construir interfaces de usuario.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS de utilidad (Utility-first) para un diseño ágil y personalizado.
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto de JavaScript que añade tipado estático, mejorando la seguridad y experiencia de desarrollo.
- **[Lucide React](https://lucide.dev/)**: Biblioteca para iconos limpios y modernos.
- **[React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)**: Para el manejo eficiente de estados y validación en los formularios.
- **[Formspree](https://formspree.io/)**: Integración para el envío y recepción de correos desde el formulario de contacto.

## 🚀 Requisitos Previos

Asegúrate de tener instalado en tu máquina:
- **Node.js** (versión 18 o superior recomendada)
- **npm**, **yarn**, **pnpm** o **bun**

## 📦 Instalación y Uso
# CEAS - Instituto Educativo (Web App)

Este es el repositorio oficial de la **Página Web del Centro de Estudios Avanzados en Salud (CEAS)**. Construido bajo estándares premium de UI/UX, enfocándose en estandarización, tipografía moderna, animaciones interactivas (GSAP) y rendimiento extremo.

## 🚀 Tecnologías Principales

-   [Next.js 14+](https://nextjs.org/) (App Router, Server Components y Generación Estática)
-   [React 18](https://react.dev/)
-   [Tailwind CSS](https://tailwindcss.com/) (Sistema de diseño)
-   [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/) (Motores de Animación)
-   [Lucide Icons](https://lucide.dev/) (Iconografía corporativa)

## 📂 Arquitectura Destacada

El diseño del sitio ha sido estructurado considerando las **Mejores Prácticas Senior**:
-   **Sistema Tipográfico Dual**: Fuentes de alto contraste estético proporcionadas por Google Fonts: **Outfit** para encabezados modernos y **Inter** para cuerpo de texto legible.
-   **Estandarización de Interfaz Automática (UI)**: Banners dinámicos e inmersivos estandarizados uniformemente con efecto focal _matte glass_, previniendo "saltos" molestos en dispositivos celulares.
-   **Micro-interacciones Fluidas**: Implementación de animaciones como "ScrollFloat" en grandes títulos para crear un sentido de lujo al desplazar el contenido.
-   **SEO-Optimizado**: Implementación semántica HTML5 estricta.

## 🛠️ Instrucciones de Despliegue Local

1. Instalar dependencias base y de animación (como GSAP):
```bash
npm install
```

2. Ejecutar el ambiente de desarrollo de Next.js
```bash
npm run dev
```

Deberás ver la aplicación local ejecutándose fluidamente en [http://localhost:3000](http://localhost:3000).

---

## ☁️ Instrucciones para Producción Gratuita en Vercel

Este proyecto de Next.js está intrínsecamente estructurado para ser lanzado directamente mediante la infraestructura de Vercel con "Zero Config" en la mayoría de sus flujos.

### Guía Rápida de Configuración Vercel

1.  Asegúrate de haber subido y actualizado todos los últimos cambios a tu repositorio remoto de GitHub (Main branch).
2.  Accede a tu cuenta en [Vercel](https://vercel.com/) y selecciona **Add New > Project**.
3.  Conecta tu cuenta de Github o GitLab, elige el repositorio CEAS y haz clic en **Import**.
4.  **Framework Preset**: Déjalo en `Next.js` por defecto (Vercel lo autodetectará con su motor mágico).
5.  **Build Command:** Déjalo por defecto (Debería ser automáticamente `next build`).
6.  **Output Directory:** Déjalo por defecto (Debería ser automáticamente `.next`).
7.  Haz clic en **Deploy**.

Vercel optimizará las imágnes (`next/image`), servirá fuentes auto-alojadas y te asignará la red CDN en minutos.

> _Construido y rediseñado con enfoque hacia un look & feel "Top-Tier" moderno para el Sector Académico de Salud._

## 📂 Estructura Principal del Proyecto

```text
ceasWeb/
├── public/                # Archivos estáticos e imágenes base
├── src/
│   ├── app/               # Páginas de la aplicación y rutas de Next.js (App Router)
│   ├── components/        # Componentes reutilizables de UI y Layout
│   └── data/              # Datos estáticos de la aplicación (Cursos, Blog, etc.)
├── package.json           # Dependencias y scripts del proyecto
├── tailwind.config.*      # Configuración de Tailwind CSS
└── next.config.*          # Configuración de Next.js
```

## 🌍 Despliegue

La plataforma más sencilla para desplegar esta aplicación es [Vercel](https://vercel.com/), los creadores de Next.js. El proyecto está pre-configurado para funcionar sin problemas bajo esta plataforma.

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

---
*Desarrollado para el Colegio de Estudios Alternativos en Salud - CEAS*
