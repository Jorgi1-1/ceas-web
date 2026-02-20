import Image from "next/image";

export default function PrivacidadPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Banner Superior */}
            <div className="bg-[#12a1bd] py-20 shadow-sm w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
                        Privacidad
                    </h1>
                </div>
            </div>

            {/* Main Content Centered */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow flex flex-col items-center">

                {/* Hero Image */}
                <div className="w-full max-w-2xl aspect-video relative mb-12 shadow-sm animate-fade-in-up">
                    <Image
                        src="https://images.unsplash.com/photo-1571260899304-425dea4cf865?q=80&w=1400&auto=format&fit=crop"
                        alt="Aviso de Privacidad"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="w-full text-gray-600 text-sm leading-relaxed space-y-6 text-justify pb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-3xl text-[#1a5fb4] font-medium text-left mb-6">
                        Aviso de privacidad
                    </h2>

                    <p>
                        Con Fundamento en los artículos 15 y 16 y demás aplicables en la Ley Federal de Protección de Datos Personales en Posesión de Particulares hacemos de su conocimiento que el Colegio de Estudios Alternativos en Salud, a través de su representante legal y colaboradores, con domicilio en Calle 49 Poniente # 721 Colonia Prados Agua Azul C.P. 72430 en la ciudad de Puebla, Puebla, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
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
                        A través de estos canales usted podrá actualizar sus datos y especificar el medio por el cual desea recibir información, ya que, en caso de no contar con esta especificación de su parte, el Colegio de Estudios Alternativos en Salud, establecerá libremente el canal que considere pertinente para enviarle información. Este aviso de privacidad podrá ser modificado por el Colegio de Estudios Alternativos en Salud, dichas modificaciones serán oportunamente informadas a través de correo electrónico, teléfono, página web o cualquier otro medio de comunicación que El Colegio de Estudios Alternativos en Salud determine para tal efecto.
                    </p>
                </div>
            </div>
        </div>
    );
}
