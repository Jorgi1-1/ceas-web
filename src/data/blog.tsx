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
        id: "quiroterapia",
        title: "Quiroterapia",
        date: "26.04.2022",
        excerpt: "El término quiroterapia es un término compuesto por dos palabras, del griego \"Cheir (Quiro)\" que significa mano y del griego \"Therapeia\" que significa tratamiento, se basa en los medios que posibilitan la curación o el alivio de las enfermedades o los síntomas que provoca una dolencia.",
        imagePath: "/ESPALDA.JPG",
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
        imagePath: "/FEMOROTIBIAL.jpg",
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
        imagePath: "/PIERNA.JPG",
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
