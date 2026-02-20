import React from 'react';

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    imagePath: string | null;
    slug: string;
    content: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
    {
        id: "bano-oxigeno",
        title: "Baño de oxígeno",
        date: "25.11.2024",
        excerpt: "El baño de oxígeno puede corregir la condición hipóxica, lo cual es beneficioso para múltiples patologías.",
        imagePath: null,
        slug: "bano-de-oxigeno",
        content: (
            <>
                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5">Hiperoxia.</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">La hiperoxia es el aumento significativo de la disponibilidad de oxígeno en el plasma sanguíneo. Favorece el metabolismo celular y permite que el oxígeno llegue al cerebro, cartílagos, huesos y tejidos que, por diversas alteraciones circulatorias, no lo reciben adecuadamente.</p>

                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5">Efectos fisiológicos.</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El baño de oxigenación produce una fuerte hiperoxia que puede generar diferentes beneficios para el organismo.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Reparación de fibras neuronales periféricas</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El oxígeno favorece la plasticidad del sistema nervioso.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Angiogénesis</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">La hiperoxia estimula y favorece la formación de pequeños vasos sanguíneos, por lo que mejora la perfusión.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Estimulación de la síntesis del colágeno</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">La hiperoxia induce la hidroxilación de la prolina y la proliferación de los fibroblastos. Así, favorece la síntesis de colágeno, fundamental para el proceso de cicatrización de heridas y la reparación de tejidos.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Actividad bactericida</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">La hiperoxia genera especies reactivas de oxígeno que aumentan la actividad de los antibióticos. Además, es activa contra el bio film bacteriano.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Regulación del estrés oxidativo y la respuesta inflamatoria</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">La hiperoxia actúa sobre reguladores y mediadores de la respuesta inflamatoria y disminuye el estrés oxidativo. Esto tiene como resultado un efecto antiinflamatorio y disminuye el daño celular.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Aumenta el flujo sanguíneo cerebral y la neuroprotección</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Mejora la perfusión gracias a la formación de nuevos vasos y la oxigenación cerebral, disminuye el edema y la inflamación del sistema nervioso central.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Osteogénesis</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">La hiperoxia estimula la diferenciación de las células formadoras del hueso, favorece la osteogénesis y reparación ósea.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Disminución del daño por isquemia-reperfusión</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Mejora la microcirculación tisular, disminuye la producción de especies reactivas de oxígeno e incrementa su degradación a través de la estimulación de la expresión de las enzimas antioxidantes.</p>

                <h4 className="text-xl font-bold text-[#759CB6] mt-8 mb-3">Efecto analgésico</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El oxígeno adicional que aporta el baño de oxígeno puede tener efecto analgésico en patologías con componentes nociceptivos y neuropáticos, mediante la reparación en el tejido, recuperación de la funcionalidad y disminución de la inflamación.</p>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#759CB6] my-8">
                    <p className="text-gray-700 font-medium mb-3">Patologías que transcurren con dolor:</p>
                    <p className="text-gray-600 leading-relaxed text-lg italic">Traumatismos, fibromialgia, enfermedades reumatológicas, heridas agudas y crónicas, dolor lumbar y articular, migrañas, enfermedades vasculares periféricas.</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">En heridas agudas y crónicas, el Oxígeno acelera la cicatrización y reduce el dolor. Promueve la angiogénesis y la proliferación de fibroblastos, favoreciendo la regeneración tisular. Tiene efecto antiinflamatorio al disminuir la liberación de citocinas proinflamatorias y promover la producción de enzimas antioxidantes. Potencia la producción de factores de crecimiento, favoreciendo la regeneración y reparación de tejidos dañados, por lo cual contribuye a la recuperación funcional y a la mejora de la calidad de vida de los usuarios. Incrementa la actividad bactericida, alta sinergia con antibióticos y estimula la síntesis de colágeno.</p>

                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg mb-6">
                    <li><span className="font-semibold text-gray-800">Heridas frecuentes:</span> pie diabético, úlceras, quemaduras, escaras, injertos, heridas post quirúrgicas, heridas crónicas, heridas traumáticas, infecciones necrotizantes agudas.</li>
                    <li><span className="font-semibold text-gray-800">Rehabilitación:</span> Parkinson y Alzheimer, lesiones musculares, osteoarticulares, post quirúrgicas y traumatismos, fibromialgia, parálisis cerebral.</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5">Tratamiento para artrosis y artritis</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">La terapia de oxigenación para el tratamiento de artritis o artrosis es muy eficiente en la reducción de dolores e inflamaciones articulares. Esto se debe a que la mayor llegada del oxígeno a los tejidos articulares y tendinosos produce una rápida desinflamación y reparación, por lo que favorece la recuperación y la movilidad. De igual forma, modula el sistema inmunológico.</p>

                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5">Tratamiento para fibromialgia.</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El baño de oxígeno favorece la recuperación en todos los procesos que presentan inflamación y dolor, por lo que es muy efectivo en pacientes con Fibromialgia. Esto se debe a que la mayor disponibilidad del oxígeno en la sangre tiene un importante efecto desinflamatorio. Además, reduce la fatiga y mejora la calidad de vida.</p>
            </>
        )
    },
    {
        id: "gonstead",
        title: "Quiropráctica técnica de Gonstead",
        date: "18.08.2022",
        excerpt: "¿Que hace especial a esta técnica?",
        imagePath: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
        slug: "quiropractica-tecnica-de-gonstead",
        content: (
            <>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">La quiropráctica ha recorrido un largo camino desde que Daniel D. Palmer hizo su primer ajuste en septiembre de 1895 en Davenport, Iowa. Al día de hoy, existen muchos métodos utilizados por los quiroprácticos para corregir desalineaciones de la columna, disfunciones articulares y complejos de subluxación. Muchas técnicas se identifican por el nombre de la persona que fue más determinante en su desarrollo. Curiosamente, uno de los métodos científicos más avanzados es una técnica llamada:</p>

                <h3 className="text-2xl font-bold text-[#759CB6] mt-10 mb-5 border-b pb-2">El sistema de Gonstead</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Los procedimientos de Gonstead son el resultado de una extensa investigación clínica realizada por Clarence S. Gonstead, fundador de la mundialmente famosa Clínica de quiropráctica Gonstead en Mount Horeb, Wisconsin, y sus asociados. Los cincuenta y cinco años de práctica continua del doctor Gonstead y más de cuatro millones de ajustes quiroprácticos dieron como resultado el método más completo de análisis biomecánico disponible para el uso de los doctores en quiropráctica de hoy. Entonces, ¿por qué no todos los quiroprácticos usan esta técnica? Porque el análisis lleva más tiempo y dominar el arte de realizar un ajuste específico requiere MUCHA práctica y dedicación.</p>

                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5">El &quot;Quiropráctico de Gonstead&quot;</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El quiropráctico de Gonstead va más allá de lo que muchos quiroprácticos consideran una evaluación de la columna al realizar un análisis exhaustivo de su columna utilizando cinco criterios para detectar la presencia del complejo de subluxación vertebral.</p>

                <div className="space-y-6 my-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center"><span className="w-8 h-8 rounded-full bg-[#759CB6] text-white flex items-center justify-center mr-3 text-sm">1</span> Visualización</h4>
                        <p className="text-gray-600 leading-relaxed text-lg ml-11">La visualización es una forma de cruzar todos los demás hallazgos. Su quiropráctico es un experto en buscar cambios sutiles en su postura y movimiento que podrían indicar algún problema.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center"><span className="w-8 h-8 rounded-full bg-[#759CB6] text-white flex items-center justify-center mr-3 text-sm">2</span> Palpación estática</h4>
                        <p className="text-gray-600 leading-relaxed text-lg ml-11">Este es simplemente el proceso de sentir (o palpar) su columna vertebral en una posición estacionaria (o estática). Su quiropráctico palpará la presencia de hinchazón (o edema), sensibilidad y cualquier textura anormal o tirantez en los músculos y otros tejidos de la espalda.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center"><span className="w-8 h-8 rounded-full bg-[#759CB6] text-white flex items-center justify-center mr-3 text-sm">3</span> Palpación de movimiento</h4>
                        <p className="text-gray-600 leading-relaxed text-lg ml-11">Este proceso consiste en sentir la columna vertebral mientras se mueve y se dobla en varios ángulos. Esto le permite al quiropráctico determinar con qué facilidad o dificultad se mueve cada segmento de la columna en diferentes direcciones.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center"><span className="w-8 h-8 rounded-full bg-[#759CB6] text-white flex items-center justify-center mr-3 text-sm">4</span> Análisis de rayos X</h4>
                        <p className="text-gray-600 leading-relaxed text-lg ml-11">Las películas de rayos X le permiten a su médico visualizar la estructura completa de su columna vertebral. Esto es útil para evaluar la postura, la integridad de la articulación y el disco, las desalineaciones vertebrales y descartar cualquier patología o fractura reciente que pueda estar presente o contribuir a la condición del paciente. Estas radiografías de columna completa se toman de pie, en posición de soporte de peso, para corroborar completamente los hallazgos del examen.</p>
                    </div>
                </div>

                <div className="bg-[#759CB6]/10 p-8 rounded-2xl mt-10 text-center">
                    <p className="text-[#3a586e] font-medium text-xl leading-relaxed">Ahora que sabes esto, podrás ver que las cosas que valen la pena requieren una gran preparación. Acércate con un instructor capacitado y aprende esta valiosa técnica para el mejor trato a tus pacientes.</p>
                </div>
            </>
        )
    },
    {
        id: "quiroterapia",
        title: "Quiroterapia",
        date: "26.04.2022",
        excerpt: "El término quiroterapia es un término compuesto por dos palabras, del griego \"Cheir (Quiro)\" que significa mano y del griego \"Therapeia\" que significa tratamiento, se basa en los medios que posibilitan la curación o el alivio de las enfermedades o los síntomas que provoca una dolencia.",
        imagePath: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
        slug: "quiroterapia",
        content: (
            <>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El término quiroterapia es un término compuesto por dos palabras, del griego <strong>&quot;Cheir (Quiro)&quot;</strong> que significa mano y del griego <strong>&quot;Therapeia&quot;</strong> que significa tratamiento, se basa en los medios que posibilitan la curación o el alivio de las enfermedades o los síntomas que provoca una dolencia.</p>

                <h3 className="text-2xl font-bold text-[#759CB6] mt-10 mb-5">¿Sabías que la columna vertebral es parte fundamental del cuerpo humano?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">En efecto, se compone de 32 a 33 vértebras que se apilan una encima de la otra para formar la columna vertebral.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Por su parte, la columna vertebral está diseñada para proteger la médula espinal y sostener otras partes del cuerpo. En concreto, está formado por huesos, músculos, ligamentos y nervios.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">En otras palabras, si alguna parte de este complejo sistema falla, puede provocar dolor o discapacidad en otras partes del cuerpo.</p>

                <div className="bg-[#f8fcfd] border border-[#e1eff5] p-8 rounded-xl my-8 text-center text-lg text-gray-700 italic">
                    &quot;En este post, te hablaremos sobre cómo la quiroterapia puede ayudarte a mejorar tu calidad de vida y reducir el dolor de espalda. ¿Quieres descubrir todo esto y mucho más? No te pierdas lo que te contamos a lo largo de las siguientes líneas. ¡Vamos para allá!&quot;
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5 border-l-4 border-[#759CB6] pl-4">¿Qué es la quiropráctica?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Por lo general, la quiroterapia engloba el conjunto de las prácticas que se realizan para la sanación del cuerpo. Así, dentro encontramos la quiropráctica, que es una profesión del cuidado de la salud que se enfoca en el diagnóstico, tratamiento y prevención de trastornos mecánicos del sistema musculoesquelético, especialmente la columna vertebral.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">De hecho, la quiropráctica es una forma de medicina alternativa que fue desarrollada en América del Norte a finales del siglo XIX por Daniel David Palmer. De este modo, los quiroprácticos creen que las desalineaciones de la columna (subluxaciones) interfieren con la función nerviosa y causan enfermedades a través de los efectos sobre el sistema nervioso.</p>

                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5 border-l-4 border-[#759CB6] pl-4">¿Qué es un quiropráctico?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">¿Alguna vez ha estado en una situación en la que experimenta dolor e incomodidad, pero es difícil identificar la fuente? Efectivamente, esto es algo bastante frecuente entre la población.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Sobre todo, si trabajas en una oficina, notarás que tu espalda se resiente día a día sin poder remediarlo...¿o sí puedes? Quizás la solución está más cerca de lo que pensabas. Pues un quiropráctico es un profesional de la salud con licencia que se especializa en el diagnóstico, tratamiento y prevención de trastornos de la columna vertebral.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">En concreto, los quiroprácticos utilizan la terapia manual, el ejercicio y la educación para mejorar su salud. También pueden usar otros tratamientos como la terapia de masajes, la terapia con láser, frío o el asesoramiento nutricional.</p>

                <div className="my-8 flex justify-center">
                    <div className="h-px bg-gray-200 w-1/3"></div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Como sabes, los quiroprácticos son profesionales de la salud que se especializan en el tratamiento de la columna vertebral y el sistema musculoesquelético. A menudo son consultados por dolor de espalda, dolor de cuello, espasmos musculares o cualquier otro tipo de molestia en la columna o muscular.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Y es que, la columna vertebral es una estructura compleja formada por huesos y articulaciones, discos, ligamentos y músculos. En este sentido, los discos actúan como cojines entre las vértebras para ayudar a absorber los golpes y distribuir el peso de manera uniforme. Por tanto, una columna sana requiere un equilibrio de movilidad y estabilidad para funcionar correctamente.</p>

                <h3 className="text-2xl font-bold text-[#759CB6] mt-10 mb-5">Síntomas del dolor de espalda y cómo puede ayudar la quiroterapia</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Aunque realmente, el dolor de espalda puede ser debilitante y puede tener un impacto significativo en la calidad de vida. En efecto, la mejor manera de tratar el dolor de espalda es consultar con un quiropráctico.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">De este modo, un quiropráctico evaluará al paciente para averiguar qué está causando los síntomas y luego recomendará un plan de tratamiento adecuado. Específicamente, existen diversas opciones de tratamiento diferentes disponibles. Pero todas tienen un objetivo: reducir el dolor y mejorar la movilidad.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Por tanto, los quiroprácticos utilizan varias técnicas diferentes, incluidos los ajustes de la columna, la terapia de masajes y varios ejercicios, como los que veremos a continuación:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">Manipulación espinal (HVLA)</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">HVLA es una técnica de manipulación espinal en la que el terapeuta aplica un empuje rápido y de baja amplitud en la espalda del paciente. Lo cierto es que no está claro cómo funciona HVLA, pero existen algunas teorías. En concreto, algunos quiroprácticos utilizan esta técnica para el dolor de cuello y de cabeza, así como para el dolor lumbar.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">Técnica sacrooccipital (TSO)</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">Realmente, el TSO es una técnica de ajuste quiropráctico que se utiliza para tratar muchos tipos diferentes de condiciones como el dolor lumbar, el dolor de cuello, dolores de cabeza, mareos e incluso trastornos mentales. Se ha informado que puede proporcionar alivio de los síntomas en tan solo 2 o 3 tratamientos.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">Flexión/distracción de Cox (CFDT)</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">También conocida como procedimiento de distracción de flexión de Cox, es un procedimiento manual para reducir el dolor y el espasmo muscular en pacientes con dolor lumbar agudo. La técnica es un procedimiento simple que se puede realizar mientras el paciente permanece en cama o sentado en una silla.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">Técnicas de liberación activa (ART)</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">Es una terapia práctica y no invasiva que implica el uso de presión sostenida sobre los tejidos blandos para liberar tensión. Ayuda con la rehabilitación de una lesión o cirugía: mejor rango de movimiento, disminución de espasmos musculares y disminución del dolor.</p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: "sindrome",
        title: "Síndrome del piramidal",
        date: "24.03.2021",
        excerpt: "El síndrome del piramidal o piriforme (SP) es una afección dolorosa del sistema musculoesquelético, caracterizada por una combinación de síntomas que incluyen dolor de glúteos o cadera. En varios artículos, el SP se define como una neuritis periférica de las ramas del nervio ciático causada por una condición anormal del músculo piriforme (PM), como...",
        imagePath: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        slug: "sindrome-del-piramidal",
        content: (
            <>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-5 border-l-4 border-[#759CB6] pl-4">Definición</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El síndrome del piramidal o piriforme (SP) es una afección dolorosa del sistema musculoesquelético, caracterizada por una combinación de síntomas que incluyen dolor de glúteos o cadera. En varios artículos, el SP se define como una neuritis periférica de las ramas del nervio ciático causada por una condición anormal del músculo piriforme (PM), como un músculo lesionado o irritado.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Frecuentemente se utilizan sinónimos para definir el SP y son: síndrome glúteo profundo, ciática extraespinal, neuritis de la cartera, etc. Hay más mujeres diagnosticadas con SP que hombres, con una proporción de mujeres a hombres de 6:1. Esta relación puede explicarse por el ángulo del músculo cuádriceps femoral más ancho en el hueso coxal de las mujeres.</p>

                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5 border-l-4 border-[#759CB6] pl-4">Relevancia anatómica clínica</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El músculo piriforme (PM) se origina en la superficie pélvica de los segmentos sacros S2-S4 en las regiones comprendidas entre y lateralmente al agujero sacro anterior, la articulación sacroilíaca, el ligamento sacroilíaco anterior y ocasionalmente la superficie anterior del ligamento sacro-tuberoso. Pasa a través de la escotadura ciática mayor para insertarse en el trocánter mayor del fémur.</p>

                <div className="bg-[#f2f6f8] p-6 rounded-lg my-6 text-[#3a586e] font-medium text-lg text-center shadow-inner">
                    El PM está involucrado funcionalmente con la rotación externa, abducción y extensión parcial de la cadera.
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El nervio ciático generalmente sale de la pelvis por debajo del vientre del músculo, sin embargo, pueden existir muchas variaciones congénitas.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Beaton y Anson han clasificado las relaciones entre el PM y el nervio ciático utilizando un sistema de clasificación de seis categorías. Una relación anómala se etiquetaría entre el tipo &quot;B&quot; y el tipo &quot;F&quot;, ya que se considera que el tipo &quot;A&quot; tiene una relación normal entre el PM y el nervio ciático.</p>

                <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-5 border-l-4 border-[#759CB6] pl-4">Epidemiología / Etiología</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">Según Boyajian- O &apos;Neill L.A. et al., Hay dos tipos de síndrome piriforme: primario y secundario.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">El síndrome piriforme primario tiene una causa anatómica, con variaciones como un músculo piriforme dividido, un nervio ciático dividido o un trayecto del nervio ciático anómalo. Entre los pacientes con síndrome piriforme, menos del 15% de los casos tienen causas primarias.</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">En la actualidad, no existen valores aceptados para la prevalencia de la anomalía y hay poca evidencia que respalde si la anomalía del nervio ciático causa el síndrome piriforme u otros tipos de ciática. Estos hallazgos sugieren que las anomalías piriformes y ciáticas pueden no ser tan importantes para la fisiopatología del síndrome piriforme como se pensaba anteriormente.</p>
            </>
        )
    },
    {
        id: "mitos",
        title: "Los 5 mitos más comunes sobre el tratamiento quiropráctico",
        date: "12.02.2021",
        excerpt: "Muchas personas siguen teniendo preguntas sobre el papel que desempeñan los quiroprácticos en el cuidado de la salud, y los beneficios que los tratamientos quiroprácticos tendrán en su salud. siempre tendrás la oportunidad de consultar un quiropráctico cerca de ti y platicar a cerca de tus necesidades específicas, hoy nos corresponde hablar de los...",
        imagePath: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
        slug: "5-mitos-tratamiento-quiropractico",
        content: (
            <>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">Muchas personas siguen teniendo preguntas sobre el papel que desempeñan los quiroprácticos en el cuidado de la salud, y los beneficios que los tratamientos quiroprácticos tendrán en su salud. Siempre tendrás la oportunidad de consultar un quiropráctico cerca de ti y platicar acerca de tus necesidades específicas, hoy nos corresponde hablar de los mitos más comunes sobre el tratamiento quiropráctico.</p>

                <div className="space-y-10">
                    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-[#759CB6] px-6 py-4 text-white">
                            <h3 className="text-xl font-bold flex items-center"><span className="text-3xl font-black text-white/30 mr-3 block">01</span> Un médico debe enviarte con el quiropráctico.</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 leading-relaxed text-lg">En muchos lugares, los quiroprácticos tienen la formación necesaria para atender a una persona como primer contacto, lo que quiere decir que puedes acudir directamente a ellos. Debido al extenso entrenamiento que los quiroprácticos poseen, serán capaces de realizar una primera impresión diagnóstica y dependiendo del resultado, el quiropráctico puede proponer un tratamiento indicado para cada problema específico o referirlo con algún otro profesional de la salud.</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-[#759CB6] px-6 py-4 text-white">
                            <h3 className="text-xl font-bold flex items-center"><span className="text-3xl font-black text-white/30 mr-3 block">02</span> Una vez que te atendió un quiropráctico deberás seguirlo viendo siempre.</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 leading-relaxed text-lg"><strong className="text-gray-800">Esto es falso.</strong> Cuando busques atención quiropráctica, se te realizará una evaluación que incluye un historial y un examen físico para determinar la causa de el dolor o disfunción. A partir de estas observaciones, se realizará un diagnóstico y se desarrollará el plan de tratamiento en colaboración con el paciente, de acuerdo a sus propias necesidades y objetivos.</p>
                            <p className="text-gray-600 leading-relaxed text-lg mt-4">Según el paciente y su padecimiento, el curso de atención puede variar. El plan de tratamiento inicial recomendará una serie de visitas para ver si el paciente responde adecuadamente al tratamiento. Como paciente, si se tienen dudas o preguntas sobre el tratamiento, debe sentirse cómodo para pedirle al quiropráctico toda la información que necesite sobre las recomendaciones hechas y abordar cualquier inquietud.</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-[#759CB6] px-6 py-4 text-white">
                            <h3 className="text-xl font-bold flex items-center"><span className="text-3xl font-black text-white/30 mr-3 block">03</span> Los ajustes quiroprácticos son dolorosos.</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 leading-relaxed text-lg">En general, los ajustes o manipulaciones articulares no duelen. De hecho, muchos pacientes refieren una mejoría del dolor inmediata. Algunos pacientes se muestran nerviosos por el &quot;crujido&quot; o sonido que se escucha al momento de una manipulación, se cree que el sonido es el resultado de la liberación de burbujas de gas de la articulación, ¡similar a hacer crujir los nudillos!</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-[#759CB6] px-6 py-4 text-white">
                            <h3 className="text-xl font-bold flex items-center"><span className="text-3xl font-black text-white/30 mr-3 block">04</span> Los quiroprácticos solo tratan dolores de espalda</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 leading-relaxed text-lg">Los quiroprácticos son expertos en el sistema musculoesquelético y están capacitados para evaluar, diagnosticar, tratar y prevenir los trastornos biomecánicos que se originan en el sistema muscular, esquelético y nervioso. Además de la evidencia que respalda el cuidado quiropráctico en el manejo de las molestias musculoesqueléticas de la columna, también hay evidencia de que respalda el manejo quiropráctico de las extremidades, dolores de cabeza e incluso el dolor de la articulación temporomandibular.</p>
                            <p className="text-gray-600 leading-relaxed text-lg mt-4">Los quiroprácticos también pueden brindar asesoramiento sobre el estilo de vida sobre nutrición, estado físico y ergonomía, entre otros, que pueden ser útiles para controlar o prevenir una variedad de condiciones de salud. La salud de su sistema musculoesquelético no solo comienza con una columna vertebral sana, ¡necesita ser plenamente consciente de su salud para mantener un estilo de vida saludable y completo!</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-[#759CB6] px-6 py-4 text-white">
                            <h3 className="text-xl font-bold flex items-center"><span className="text-3xl font-black text-white/30 mr-3 block">05</span> No existe evidencia que respalde la efectividad del tratamiento quiropráctico</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 leading-relaxed text-lg">El tratamiento quiropráctico a veces se cuestiona sobre su efectividad. Sin embargo, la profesión quiropráctica y otros han invertido importantes recursos para construir un sólido cuerpo de evidencia que estudie el impacto de las terapias manuales en las afecciones musculoesqueléticas.</p>
                            <p className="text-gray-600 leading-relaxed text-lg mt-4">Por ejemplo, se ha demostrado que la manipulación de la columna y las articulaciones es un tratamiento eficaz para afecciones musculoesqueléticas agudas y crónicas, como el dolor de espalda. De hecho, la terapia de manipulación espinal (SMT, por sus siglas en inglés) se recomienda como intervención de primera línea para el dolor de espalda en numerosas guías de práctica clínica que incluyen el Bone and Joint Decade Task Force, el American College of Physicians y la American Pain Society, así como el Instituto Nacional de Salud de Gran Bretaña y excelencia en el cuidado.</p>
                        </div>
                    </div>
                </div>

                <h4 className="text-lg font-bold text-gray-500 mt-16 mb-4 uppercase tracking-wider">Fuentes y Referencias bibliográficas</h4>
                <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-500 space-y-4 font-mono leading-relaxed break-words">
                    <p>Haldeman, S., Carroll, L., Cassidy, J., Schubert, J., & Nygren, A. (2008). The bone and joint decade 2000-2010 task force on neck pain and its associated disorders: Executive summary. Spine, 33(4S), S5-S7.</p>
                    <p>Chou, E., Qaseem, A., Snow, V., Casey, D., Cross, T., Shekelle, P., & Owens, D. (2007). Diagnosis and treatment of low back pain: A joint clinical practice guideline from the American College of Physicians and the American Pain Society. Annals of Internal Medicine, 147(7), 478-491.</p>
                    <p>National Institute for Health and Clinical Excellence. (2009). Low back pain early management of persistent non-specific low back pain. Londres, Angleterre.</p>
                    <p>Hoskins, W., McHardy, A., Pollard, H., Windsham, R., & Onley, R. (2006). Chiropractic treatment of lower extremity conditions: a literature review. Journal of manipulative and physiological therapeutics, 29(8), 658-671.</p>
                    <p>McHardy, A., Hoskins, W., Pollard, H., Onley, R., & Windsham, R. (2008). Chiropractic treatment of upper extremity conditions: a systematic review. Journal of manipulative and physiological therapeutics, 31(2), 146-159.</p>
                    <p>Bryans, R., Descarreaux, M., Duranleau, M., Marcoux, H., Potter, B., Reugg, R., White, E., & , (2011). Evidence-based guidelines for the chiropractic treatment of adults with headache. Journal of Manipulative and Physiological Therapeutics, 34(5), 274-289.</p>
                </div>
            </>
        )
    }
];
