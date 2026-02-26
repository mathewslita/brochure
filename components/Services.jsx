import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

// ==========================================
// 1. DATOS DE LOS SERVICIOS (Configuración)
// ==========================================
// Aquí defines la información de cada tarjeta. 
// Si necesitas agregar, quitar o editar un servicio, SOLO tocas esta lista.
const servicesData = [
    {
        id: 'electrica', // Identificador único para abrir el modal correcto
        title: 'Área Eléctrica',
        description: 'Elaboración de empalmes, instalación de equipos eléctricos y sistemas de protección para alta y media tensión.',
        image: '/assets/Linierosentransformadordeposte.jpeg',
    },
    {
        id: 'instrumentacion',
        title: 'Área de Instrumentación',
        description: 'Montaje de sistemas de inyección de químicos, tubing y sistemas neumáticos o hidráulicos.',
        image: '/assets/Paneldeaceroconmanómetrosypalancasrojas.jpeg',
    },
    {
        id: 'medicion',
        title: 'Medición y Pruebas',
        description: 'Equipos de precisión, diagnóstico y pruebas eléctricas avanzadas certificadas para alquiler por día o proyecto.',
        image: '/assets/pruebasdieléctricas.jpeg',
    },
    {
        id: 'maquinaria',
        title: 'Maquinaria y Fuerza',
        description: 'Maquinaria de fuerza pesada: generadores de alta capacidad, machinadoras y sacabocados para trabajos exigentes.',
        image: '/assets/generadores.jpg',
    },
    {
        id: 'seguridad',
        title: 'Seguridad y Accesorios',
        description: 'Equipos de seguridad operativa, protección personal certificada, herramientas y accesorios de red.',
        image: '/assets/equipo_seguridad_personal.png',
    },
    {
        id: 'venta',
        title: 'Venta',
        description: 'Venta e importación de material eléctrico, electromecánico e instrumentación de las mejores marcas.',
        image: '/assets/material_electrico_venta.png',
    },
];

export default function Services({ openServiceModal }) {
    return (
        <section className="px-6 lg:px-12 bg-[#f8fafc] scroll-mt-32" id="servicios">
            <div className="container-main">

                {/* --- HEADER (Título y Descripción) --- */}
                <div className="w-full flex flex-col items-center justify-center text-center section-header reveal">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                        <span className="text-primary text-4xl md:text-5xl">Nuestros</span>
                        <span className="text-secondary text-4xl md:text-5xl">Servicios</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-accent rounded-full mb-8"></div>
                    <p className="text-gray-500 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
                        Conozca nuestras especialidades en construcción y mantenimiento industrial a nivel eléctrico, instrumentación y control.
                    </p>
                </div>

                {/* --- GRILLA DE TARJETAS GENERADA AUTOMÁTICAMENTE --- */}
                <div className="w-full flex justify-center !mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full reveal-up items-stretch">

                        {/* USO DE .MAP():
                           Recorremos el array 'servicesData'. Por cada 'service' (servicio),
                           renderizamos el HTML de una tarjeta.
                        */}
                        {servicesData.map((service) => (
                            <div
                                key={service.id} // Clave única obligatoria en React
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral/5 flex flex-col h-full transform hover:-translate-y-2 group"
                            >
                                {/* IMAGEN */}
                                <div
                                    className="relative h-[240px] w-full cursor-pointer overflow-hidden"
                                    onClick={() => openServiceModal(service.id)} // Usamos el ID del servicio actual
                                >
                                    <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        className="group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* CONTENIDO DE TEXTO */}
                                <div className="p-8 md:px-10 md:pt-10 md:pb-10 flex flex-col flex-grow bg-white relative z-20 items-start !text-left">
                                    <h3 className="w-full !text-center text-xl md:text-[22px] font-bold text-primary !mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 !px-2 sm:!px-4 text-base md:text-[1.1rem] leading-relaxed !mb-6">
                                        {service.description}
                                    </p>

                                    {/* BOTÓN */}
                                    <div className="w-full flex justify-center mt-auto !pt-2 !pb-2">
                                        <button
                                            className="btn-primary large shadow-lg hover:shadow-xl hover:-translate-y-1"
                                            onClick={() => openServiceModal(service.id)}
                                        >
                                            Leer más <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}