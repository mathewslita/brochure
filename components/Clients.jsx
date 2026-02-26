import React from 'react';
import Image from 'next/image';

// 1. MEJORA DE RENDIMIENTO: Datos fuera del componente
const clientsData = [
    { src: "/assets/cyfoil.webp", alt: "CYFOIL" },
    { src: "/assets/arlift.png", alt: "ARLIFT" },
    { src: "/assets/logo-final-argus-lateral.png", alt: "ARGUS" },
    { src: "/assets/logo-sedemi.png", alt: "SEDEMI" },
    // ⚠️ IMPORTANTE: Ajustando la renderizacion del logo de PCA
    { src: "/assets/logo-pca.png", alt: "PCA Mantenimiento", isWhite: true },
    { src: "/assets/conduto-logo-web.png", alt: "CONDUTO" },
    { text: "IESCO ENERGY" },
    { src: "/assets/logo-heron.png", alt: "HERON", imageClass: "object-center translate-x-3 translate-y-1 scale-110" },
    { text: "PEC PROJECT" },
    { src: "/assets/logosimbolo-Proctek-Group-04-_1_-Photoroom.png", alt: "PIL Proctek" },
    { src: "/assets/tectotal.png", alt: "TECTOTAL" },
    { text: "WELDING" },
    { src: "/assets/logo-procopet-blanco.png", alt: "PROCOPET" },
];

export default function Clients() {
    return (
        // 2. AJUSTE GENERAL: Usa el padding global de las sections
        <section className="px-6 lg:px-12 bg-white relative z-20 mt-0 scroll-mt-24" id="clientes">

            <div className="container-main"> {/* Asegúrate de tener esta clase CSS o usa 'max-w-7xl mx-auto' */}

                <div className="w-full flex flex-col items-center justify-center text-center section-header reveal">

                    {/* 3. TÍTULO MEJORADO: Más grande y con colores corporativos */}
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-primary">Nuestros</span> <span className="text-secondary">Clientes</span>
                    </h2>

                    {/* 4. ESPACIO AÑADIDO: Aumenté el margen inferior (mb-10) para separar la línea del texto */}
                    <div className="w-24 h-1.5 bg-accent rounded-full mb-10"></div>

                    {/* 5. TEXTO DESCRIPCIÓN MÁS GRANDE: Se aumentó a text-xl y md:text-2xl */}
                    <p className="text-gray-600 text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
                        Marcas de primer nivel que confían en nuestra excelencia y calidad.
                    </p>
                </div>

                <div className="w-full flex justify-center mt-4 px-4">
                    <div className="w-full relative px-0 overflow-hidden reveal-up">

                        <div className="w-full h-full flex flex-wrap justify-center items-center gap-6 md:gap-8">
                            {clientsData.map((client) => (
                                <div
                                    key={client.alt || client.text}
                                    className="group flex justify-center items-center w-36 h-24 sm:w-40 md:w-48 sm:h-28 md:h-32 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden px-4 py-2 bg-white border border-gray-100 hover:border-gray-200"
                                >
                                    {client.src ? (
                                        // 6. LÓGICA DE LOGOS LIMPIA: Gris por defecto -> Color al hover (funciona para todos)
                                        // Aplicamos 'invert' si el logo es blanco puro para que se vea negro
                                        <div className={`relative w-full h-full transition-all duration-300 ${client.isWhite ? 'invert opacity-60 group-hover:opacity-100' : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'}`}>
                                            <Image
                                                src={client.src}
                                                alt={client.alt}
                                                fill
                                                className={`object-contain p-2 ${client.imageClass || ''}`}
                                                sizes="(max-width: 768px) 150px, 200px"
                                            />
                                        </div>
                                    ) : (
                                        // Texto estilizado para parecer logo
                                        <span className="font-extrabold text-gray-500 group-hover:text-primary text-center leading-tight transition-colors uppercase tracking-wider text-lg">
                                            {client.text}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}