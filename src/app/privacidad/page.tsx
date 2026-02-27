import Image from "next/image";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function PrivacidadPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Banner Superior Standard */}
            <div className="relative w-full h-[250px] min-h-[250px] md:h-[350px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/Sala CEAS.JPG"
                        alt="Privacidad Background"
                        fill
                        className="object-cover blur-[4px] md:blur-[6px] scale-110 opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center animate-fade-in-up mt-8 md:mt-0">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='top bottom+=20%'
                        scrollEnd='bottom bottom-=20%'
                        stagger={0.03}
                        as="h1"
                        textClassName="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-6"
                    >
                        Aviso de Privacidad
                    </ScrollFloat>
                    <div className="h-1.5 w-24 bg-secondary rounded-full shadow-sm"></div>
                </div>
            </div>

            {/* Main Content Centered */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow flex flex-col items-center">

                <div className="w-full text-gray-600 text-sm leading-relaxed space-y-6 text-justify pb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-3xl text-[#1a5fb4] font-medium text-left mb-6">
                        Aviso de privacidad
                    </h2>

                    <p>
                        Con Fundamento en los artículos 15 y 16 y demás aplicables en la Ley Federal de Protección de Datos Personales en Posesión de Particulares hacemos de su conocimiento que el Centro de Estudios Avanzados en Salud, a través de su representante legal y colaboradores, con domicilio en Calle 49 Poniente # 721 Colonia Prados Agua Azul C.P. 72430 en la ciudad de Puebla, Puebla, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
                    </p>

                    <p>
                        Su información personal será utilizada para proveer los servicios e información que ha solicitado, comunicarle sobre cambios de estos y evaluar la calidad del servicio que le brinda.
                    </p>

                    <p>
                        Para las finalidades antes mencionadas requerimos los siguientes datos personales:
                    </p>

                    <ul className="space-y-3 list-none p-0">
                        <li>* Nombre</li>
                        <li>* Teléfono fijo y/o Celular</li>
                        <li>* Correo electrónico</li>
                        <li>* Dirección</li>
                        <li>* CURP</li>
                        <li>* Firma autógrafa</li>
                        <li>* Acta de Nacimiento</li>
                    </ul>

                    <p>
                        Serán recopilados sus datos personales con el objeto de utilizarlos para los siguientes fines:
                    </p>

                    <ul className="space-y-3 list-none p-0">
                        <li>* Contactarle y enviarle información sobre nuestros servicios</li>
                        <li>* Identificarlo como alumno</li>
                        <li>* Realizar todas las gestiones internas y externas relacionadas con los servicios brindados.</li>
                    </ul>

                    <p>
                        Para prevenir el acceso no autorizado a sus datos personales y con el fin de asegurar que la información sea utilizada para los fines establecidos en este aviso de privacidad, hemos establecido diversos procedimientos con la finalidad de evitar el uso o divulgación no autorizados de sus datos, permitiéndonos tratarlos debidamente. Todos sus datos personales son tratados de acuerdo con la legislación aplicable y vigente en el país, por ello le informamos que usted tiene en todo momento los derechos (ARCO) de acceder, rectificar, cancelar u oponerse al tratamiento que le damos a sus datos personales; derecho que podrá hacer valer a través del Teléfono (222) 237-3407 o correo electrónico contacto@ceas.com.mx
                    </p>

                    <p>
                        A través de estos canales usted podrá actualizar sus datos y especificar el medio por el cual desea recibir información, ya que, en caso de no contar con esta especificación de su parte, el Centro de Estudios Avanzados en Salud, establecerá libremente el canal que considere pertinente para enviarle información. Este aviso de privacidad podrá ser modificado por el Centro de Estudios Avanzados en Salud, dichas modificaciones serán oportunamente informadas a través de correo electrónico, teléfono, página web o cualquier otro medio de comunicación que El Centro de Estudios Avanzados en Salud determine para tal efecto.
                    </p>
                </div>
            </div>
        </div>
    );
}
