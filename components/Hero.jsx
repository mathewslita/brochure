import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-900" id="inicio">
            <div className="hero-background-wrapper absolute inset-0 z-[1]">
                <Image
                    src="/assets/Tuberías industriales con mechero al fondo.jpeg"
                    alt="Fondo de Tuberías Industriales"
                    fill
                    sizes="100vw"
                    priority
                    fetchPriority="high"
                    quality={90}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>
            <div className="absolute inset-0 bg-blue-950/80 z-[2]"></div>
            <div className="hero-content relative z-10 px-6 lg:px-12 flex flex-col items-center text-center w-full container-main max-w-6xl mt-8">
                <p className="text-secondary font-bold tracking-[0.25em] mb-6 text-xs md:text-base lg:text-lg uppercase">Venta & Servicios Eléctricos</p>
                <h1 className="text-white mb-6 leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tight drop-shadow-2xl">
                    Soluciones Seguras y <br className="hidden md:block" /> <span className="text-secondary mt-2 inline-block">Confiables</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-6 sm:my-10 font-semibold leading-relaxed max-w-5xl mx-auto drop-shadow-md text-gray-200">
                    Especialistas en la ejecución de trabajos eléctricos e instrumentación de alta calidad y eficiencia para cada proyecto.
                </p>
                <div className="w-full flex justify-center">
                    <Link href="#servicios" className="btn-primary large pulse shadow-2xl hover:-translate-y-1 transition-transform w-[90%] sm:w-auto flex justify-center">
                        Explorar Servicios <i className="fa-solid fa-arrow-down ml-3"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
