// Fuente única de las preguntas frecuentes.
// El acordeón de /faq, el bloque del home y el JSON-LD de FAQPage leen de aquí:
// antes las preguntas vivían duplicadas a mano en el componente y en el schema,
// lo que permitía que ambas copias divergieran en silencio.
export type Category = "all" | "general" | "duracion" | "inversion" | "empleabilidad" | "certificado" | "otros";

export interface FAQItem {
  question: string;
  answer: string;
  category: Category;
}

export const faqs: FAQItem[] = [
  // GENERAL
  { question: "¿Qué es quiroterapia integral?", answer: "La quiroterapia integral es una disciplina terapéutica manual que combina técnicas como hidroterapia, masaje, manipulaciones articulares quiroprácticas, osteopatía y rehabilitación física para ayudar a disminuir el dolor, mejorar la movilidad y restaurar el equilibrio funcional del cuerpo de forma natural y no invasiva.", category: "general" },
  { question: "¿Necesito experiencia previa?", answer: "No se requiere experiencia previa. Al ser una formación integral, nosotros te capacitamos con los conocimientos necesarios, desde lo más básico hasta lo especializado, para poder dar atención a los problemas musculares, articulares y ligamentosos causados por lesiones deportivas o laborales.", category: "general" },
  { question: "¿Qué requisitos de escolaridad necesito?", answer: "Puedes acceder a nuestros programas de estudio teniendo la secundaria terminada.", category: "general" },
  { question: "¿Puedo cambiar de programa si comienzo?", answer: "Sí, puedes cambiar a otro curso, pero probablemente tengas que iniciar desde el principio del nuevo ciclo, cubriendo las colegiaturas correspondientes al nuevo programa que elijas.", category: "general" },
  // DURACION
  { question: "¿Puedo estudiar a mi ritmo?", answer: "Las clases son presenciales y un día a la semana en un horario establecido, por lo que se recomienda que el resto de los días de la semana repases lo visto en la clase presencial.", category: "duracion" },
  // INVERSION
  { question: "¿Tienen becas o descuentos?", answer: "Sí, contamos con becas que son parte del programa de la SEP, además de descuentos preferenciales a los primeros que se inscriban a cada curso.", category: "inversion" },
  // EMPLEABILIDAD
  { question: "¿Qué oportunidades laborales tengo al egresar?", answer: "Puedes laborar principalmente de manera independiente, estableciendo tu propio centro de terapias manuales naturales. También puedes trabajar en centros deportivos, equipos deportivos, o como auxiliar en clínicas de terapia física, así como establecer convenios con médicos que requieran referir a sus pacientes para alguna terapia de recuperación.", category: "empleabilidad" },
  // CERTIFICADO
  { question: "¿Es válido el certificado a nivel nacional?", answer: "Nuestros cursos de Habilitación Física Funcional y de Terapeuta SPA \"Aplicación de aceites esenciales con técnicas de masaje\" son reconocidos por la SEP, por lo que el certificado obtenido sí es válido a nivel nacional.", category: "certificado" },
  { question: "¿El diploma es avalado por SEP?", answer: "Nuestros cursos de Habilitación Física Funcional y de Terapeuta SPA \"Aplicación de aceites esenciales con técnicas de masaje\" son avalados por la SEP. Otros cursos pueden estar avalados por la Federación Mundial de Masaje (WMF) o por CONOCER-SEP.", category: "certificado" },
  // OTROS
  { question: "¿Hay seguimiento después de egresar?", answer: "¡Sí! Después de concluir nuestros cursos iniciales, puedes acceder a cursos de formación continua para adquirir nuevas habilidades, conocimientos y destrezas.", category: "otros" },
];
