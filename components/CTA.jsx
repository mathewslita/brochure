import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function CTA() {
    return (
        // 1. EL "TECHO" Y EL "SUELO" AZUL (Padding Vertical)
        // He puesto '!py-6' y '!py-8'. Esto obliga a que haya 240px (móvil) 
        // y 320px (PC) de azul puro arriba y abajo del texto.
        <section className="w-full px-6 text-center bg-primary bg-gradient-warm relative overflow-hidden z-10 flex items-center justify-center">

            {/* Luces de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-black/20 rounded-full blur-[120px]"></div>
            </div>

            {/* 2. EL CONTENIDO (Tight Group)
               Bajamos drásticamente los 'mb-' (márgenes inferiores). 
               Ahora el espacio se queda en los "bordes" azules y no "en el centro" entre las frases.
            */}
            <div className="relative z-10 container-main max-w-4xl mx-auto flex flex-col items-center justify-center reveal-up">

                {/* 'mb-4': Espacio pequeño con la línea */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                    ¿Listo para optimizar su industria?
                </h2>

                <div className="w-20 h-1.5 bg-secondary rounded-full mb-6"></div>

                {/* 'mb-10': El párrafo ya no está a kilómetros de los botones */}
                <p className="text-lg sm:text-xl md:text-2xl text-secondary font-bold max-w-4xl mb-10 leading-relaxed px-4">
                    Contáctenos hoy para recibir una evaluación y cotización personalizada.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full">
                    <a href="https://wa.me/593988012730" target="_blank" rel="noreferrer"
                        className="btn-primary !px-12 !py-4 shadow-xl hover:scale-105 transition-all font-bold">
                        <FaWhatsapp className="text-2xl" /> Hablar con Asesor
                    </a>

                    <a href="https://wa.me/593987024974" target="_blank" rel="noreferrer"
                        className="btn-secondary !px-12 !py-4 border-2 hover:bg-white/10 transition-all font-bold">
                        <FaWhatsapp className="text-2xl" /> Soporte
                    </a>
                </div>
            </div>
        </section>
    );
}