# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are **futuros estudiantes**: personas evaluando inscribirse en cursos, diplomados y programas de fisioterapia, bienestar y salud alternativa en CEAS. Consultan oferta académica, próximos cursos, fotogalería y blog antes de decidir.

Secondary users: estudiantes actuales (consultan fechas de próximos cursos, blog, fotogalería de eventos) and the CEAS administrator (uses `/admin/dashboard`, authenticated via Firebase, to edit blog posts and site config).

## Product Purpose

Sitio web oficial del Centro de Estudios Avanzados en Salud (CEAS), una institución de formación en fisioterapia, bienestar y salud alternativa. Existe para presentar la oferta educativa, comunicar fechas de próximos cursos, compartir contenido de blog, mostrar instalaciones/eventos vía fotogalería, y convertir visitantes en inscripciones a través del formulario de contacto.

## Positioning

Enfoque en **alta calidad humana en la formación**: CEAS se distingue por la calidad humana de su formación en fisioterapia y salud alternativa, no solo por el contenido técnico de los programas.

## Operating Context

- Contenido gestionado parcialmente vía panel admin (`/admin/dashboard`), autenticado con Firebase Auth; solo un UID autorizado puede escribir en Firestore (`config`, `blog`).
- Lectura pública abierta en Firestore para que el sitio funcione sin login.
- Formulario de contacto integrado con Formspree (sin backend propio para envío de correos).
- Despliegue previsto en Vercel, "zero config" para Next.js.

## Capabilities and Constraints

- Next.js (App Router) + React 19 + TypeScript + Tailwind CSS v4.
- Contenido estático de cursos y blog vive parcialmente en `src/data/` (courses.ts, blog.tsx) y parcialmente en Firestore (editable desde admin).
- Animaciones con GSAP; formularios con React Hook Form + Zod.
- Analítica vía Vercel Analytics.
- Requiere variables de entorno `NEXT_PUBLIC_FIREBASE_*` para que la autenticación admin funcione en local (el sitio construye igual sin ellas, usando config dummy).

## Brand Commitments

- **Definitivos:** nombre "CEAS" (Centro de Estudios Avanzados en Salud; nombre legal alterno "IFPCEAS" / Instituto de Formación Profesional) y logo actual.
- **Colores:** definitivos, no deben cambiar.
- **Tipografía:** abierta a cambio si se encuentra una opción mejor o más apta; no está congelada.

## Evidence on Hand

- Copy institucional en `README.md` describe la propuesta de valor y stack.
- Datos reales de cursos y blog en `src/data/courses.ts` y `src/data/blog.tsx`.
- Sin testimonios, casos de estudio o prensa confirmados en el repo — no inventar estos hasta tener evidencia real.

## Product Principles

1. La calidad humana de la formación es el diferenciador central; el diseño y el copy deben transmitir cercanía y confianza, no solo información técnica de cursos.
2. El sitio debe funcionar completamente sin autenticación (lectura pública); las funciones admin son un canal secundario de mantenimiento de contenido, no una feature de cara al usuario final.
3. Nombre, logo y colores de marca son inamovibles; cualquier evolución visual debe trabajar dentro de esa paleta.
4. Priorizar el camino de conversión: oferta académica → próximos cursos → contacto, ya que el objetivo de negocio es la inscripción.

## Accessibility & Inclusion

No se estableció un requisito de accesibilidad específico del producto todavía.
