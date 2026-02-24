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

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd ceasWeb
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Visualiza la aplicación:**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado. El proyecto se recargará automáticamente al hacer cambios en los archivos fuente.

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
