import React from 'react';
import Image from 'next/image';

export default function Portfolio({ openImageModal }) {
    return (
        <section className="px-6 lg:px-12 bg-white scroll-mt-32" id="proyectos">
            <div className="container-main">
                <div className="w-full flex flex-col items-center justify-center text-center section-header reveal">
                    <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
                        Proyectos <span className="text-secondary">Principales</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-accent rounded-full mb-10"></div>
                    <p className="text-gray-600 text-xl md:text-2xl max-w-4xl">Conozca algunos de nuestros trabajos más destacados ejecutados directamente en campo.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full reveal-up">
                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral/5 flex flex-col h-full transform hover:-translate-y-2 group">
                        <div className="relative h-[280px] w-full cursor-pointer overflow-hidden" onClick={() => openImageModal(['/assets/proyectocablesempalme.jpg'], 0)}>
                            <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                            <Image src="/assets/proyectocablesempalme.jpg" alt="Sistemas de Potencia" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:px-10 md:pt-8 md:pb-10 flex flex-col flex-grow bg-white relative z-20 items-center !text-center">
                            <h3 className="w-full !text-center text-xl md:text-[22px] font-bold text-primary !mb-4 leading-tight">Sistemas de Potencia 15kV y Certificación</h3>
                            <div className="inline-block bg-secondary/30 text-accent font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full !mb-6 mt-auto self-center">
                                PROYECTO PUCUNA D / PROCOPET
                            </div>
                            <p className="text-gray-600 !px-2 sm:!px-4 text-base md:text-[1.1rem] leading-relaxed !text-center !mb-2">
                                Provisión e instalación especializada de empalmes térmicos en caliente para cables de poder tripolar armado (15kV - 500 KCMIL). El proyecto concluye con la certificación de integridad del cableado mediante pruebas VLF de altísima precisión.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral/5 flex flex-col h-full transform hover:-translate-y-2 group" style={{ transitionDelay: '0.1s' }}>
                        <div className="relative h-[280px] w-full cursor-pointer overflow-hidden" onClick={() => openImageModal(['/assets/Equipo Megger probando cables.jpeg'], 0)}>
                            <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                            <Image src="/assets/Equipo Megger probando cables.jpeg" alt="Empalmes Controlados" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:px-10 md:pt-8 md:pb-10 flex flex-col flex-grow bg-white relative z-20 items-center !text-center">
                            <h3 className="w-full !text-center text-xl md:text-[22px] font-bold text-primary !mb-4 leading-tight">Empalmes Controlados y Diagnóstico Avanzado</h3>
                            <div className="inline-block bg-secondary/30 text-accent font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full !mb-6 mt-auto self-center">
                                MONTAJE Y PRUEBAS / CONDUTO
                            </div>
                            <p className="text-gray-600 !px-2 sm:!px-4 text-base md:text-[1.1rem] leading-relaxed !text-center !mb-2">
                                Elaboración de empalmes eléctricos de 15kV bajo ambientes climatizados y estrictamente controlados. Ejecución de pruebas no destructivas de vanguardia para asegurar la continuidad operativa: VLF, Tangente Delta (TD) y Descargas Parciales (PD).
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral/5 flex flex-col h-full transform hover:-translate-y-2 group" style={{ transitionDelay: '0.2s' }}>
                        <div className="relative h-[280px] w-full cursor-pointer overflow-hidden" onClick={() => openImageModal(['/assets/Cableadointernodetableroconborneras.jpeg'], 0)}>
                            <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                            <Image src="/assets/Cableadointernodetableroconborneras.jpeg" alt="Integración de Tableros" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:px-10 md:pt-8 md:pb-10 flex flex-col flex-grow bg-white relative z-20 items-center !text-center">
                            <h3 className="w-full !text-center text-xl md:text-[22px] font-bold text-primary !mb-4 leading-tight">Integración de Tableros de Control</h3>
                            <div className="inline-block bg-secondary/30 text-accent font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full !mb-6 mt-auto self-center">
                                AUTOMATIZACIÓN Y CONTROL
                            </div>
                            <p className="text-gray-600 !px-2 sm:!px-4 text-base md:text-[1.1rem] leading-relaxed !text-center !mb-2">
                                Armado, cableado estructurado e identificación normativa de tableros de control (BMS/PLC). Garantizamos conexiones de alta precisión, absoluto orden y limpieza para facilitar el mantenimiento preventivo de sistemas críticos industriales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
