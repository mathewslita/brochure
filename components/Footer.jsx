import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6';

export default function Footer() {
    return (
        /* 1. SECCIÓN PRINCIPAL (Misma lógica que el CTA):
           - flex items-center justify-center: Asegura que el contenido esté perfectamente centrado.
           - !pt-20 !pb-20: Forzamos el espacio arriba y abajo para que respire.
           - md:!pt-32 md:!pb-24: Ajuste para escritorio (un poco más de techo que de suelo).
        */
        <footer className="bg-neutral text-gray-300 !pt-6 !pb-6 md:!pt-8 md:!pb-8 px-6 lg:px-12 border-t border-white/5 relative z-20 flex items-center justify-center">

            {/* 2. CONTENEDOR GRID:
               - gap-16 md:gap-24: Reducimos ligeramente los huecos entre columnas para que no se estire de más.
            */}
            <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 reveal w-full">

                {/* --- COLUMNA 1: MARCA --- */}
                <div className="footer-brand flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="logo mb-8">
                        <Image
                            src="/assets/logocircuit.png"
                            alt="Circuit Store Logo"
                            width={240}
                            height={70}
                            priority
                            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                        />
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-gray-400 max-w-sm">
                        Su aliado estratégico para el futuro industrial. Venta, mantenimiento y servicios de ingeniería e instrumentación en campo.
                    </p>
                </div>

                {/* --- COLUMNA 2: ENLACES --- */}
                <div className="footer-links flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-6">Enlaces Rápidos</h3>
                    <Link href="#inicio" className="text-gray-400 hover:text-secondary transition-colors text-base md:text-lg py-1 block">Inicio</Link>
                    <Link href="#servicios" className="text-gray-400 hover:text-secondary transition-colors text-base md:text-lg py-1 block">Servicios Especializados</Link>
                    <Link href="#proyectos" className="text-gray-400 hover:text-secondary transition-colors text-base md:text-lg py-1 block">Proyectos Principales</Link>
                    <Link href="#nosotros" className="text-gray-400 hover:text-secondary transition-colors text-base md:text-lg py-1 block">Sobre Nosotros</Link>
                </div>

                {/* --- COLUMNA 3: CONTACTO --- */}
                <div className="footer-contact flex flex-col items-center md:items-start gap-8 text-center md:text-left">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Contacto Directo</h3>
                    <div className="flex flex-col items-center md:items-start gap-8 w-full">
                        {/* Email */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                            <div className="bg-white/10 backdrop-blur-md !p-4 rounded-xl border border-white/5 group-hover:bg-primary transition-colors duration-300">
                                <FaEnvelope className="text-secondary group-hover:text-white text-xl" />
                            </div>
                            <div className="text-base text-gray-300 mt-1">
                                <p className="mb-2 hover:text-white cursor-pointer hover:underline">marcotimbila1690@gmail.com</p>
                                <p className="hover:text-white cursor-pointer hover:underline">marvin_1690@hotmail.com</p>
                            </div>
                        </div>
                        {/* Ubicación */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                            <div className="bg-white/10 backdrop-blur-md !p-4 rounded-xl border border-white/5 group-hover:bg-primary transition-colors duration-300">
                                <FaLocationDot className="text-secondary group-hover:text-white text-xl" />
                            </div>
                            <div className="text-base text-gray-300 mt-1">
                                <p className="mb-3"><strong className="text-primary-light block mb-1">Quito:</strong> Av. Carapungo y Tupac Yupanqui.</p>
                                <p><strong className="text-primary-light block mb-1">Coca:</strong> Av. Aguarico pinas y turismo ecológico.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}