import React from 'react';
import Image from 'next/image';
import { FaBullseye, FaCircleCheck, FaUsersGear, FaHelmetSafety, FaOilWell, FaIndustry } from 'react-icons/fa6';

export default function About({ openImageModal }) {
    return (
        <section className="px-6 lg:px-12 bg-[#f8fafc] scroll-mt-32" id="nosotros">
            <div className="container-main">
                <div className="w-full flex flex-col items-center justify-center text-center section-header reveal">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 text-center">
                        Quiénes <span className="text-secondary">Somos</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-accent rounded-full mb-12 mx-auto"></div>
                    <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed text-center mx-auto">
                        Somos expertos en el desarrollo y ejecución de proyectos eléctricos y de instrumentación para el sector industrial. Integramos tecnología, eficiencia y altos estándares de calidad para brindar soluciones operativas totalmente seguras y confiables.
                    </p>
                </div>

                <div className="w-full space-y-20 md:space-y-24">
                    {/* Visión */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 reveal-up">
                        <div className="flex-1 w-full relative h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border border-neutral/10" onClick={() => openImageModal(['/assets/Zanjalargaconductosnegros.png'], 0)}>
                            <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                            <Image src="/assets/Zanjalargaconductosnegros.png" alt="Visión" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-1 lg:pl-8 xl:pl-12">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 flex items-center gap-5">
                                <div className="bg-white/95 backdrop-blur-md w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-neutral/10 shadow-xl flex items-center justify-center shrink-0">
                                    <FaBullseye className="text-primary text-3xl md:text-4xl" />
                                </div>
                                Visión
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed text-left">
                                Proveer servicios integrales de ingeniería eléctrica, instrumentación y automatización, asegurando la continuidad y eficiencia operativa de nuestros clientes. Cumplimos con los plazos comprometidos, normativas vigentes, y garantizamos operaciones que salvaguardan la salud laboral y el medio ambiente.
                            </p>
                        </div>
                    </div>

                    {/* Misión */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 reveal-up">
                        <div className="flex-1 w-full relative h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border border-neutral/10" onClick={() => openImageModal(['/assets/Linierosentransformadordeposte.jpeg'], 0)}>
                            <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                            <Image src="/assets/Linierosentransformadordeposte.jpeg" alt="Misión" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-1 lg:pr-8 xl:pr-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-5">
                                <div className="bg-white/95 backdrop-blur-md w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-neutral/10 shadow-xl flex items-center justify-center shrink-0">
                                    <FaBullseye className="text-primary text-2xl md:text-3xl" />
                                </div>
                                Misión
                            </h3>
                            <ul className="space-y-6 md:space-y-8 text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                                <li className="flex items-start gap-4 md:gap-5 text-left">
                                    <div className="mt-1 min-w-[28px] flex justify-center">
                                        <FaCircleCheck className="text-secondary text-2xl" />
                                    </div>
                                    <span>Proveer soluciones integrales de ingeniería, montaje electromecánico, instrumentación y pruebas con los más altos estándares.</span>
                                </li>
                                <li className="flex items-start gap-5 text-left">
                                    <div className="mt-1 min-w-[28px] flex justify-center">
                                        <FaCircleCheck className="text-secondary text-2xl" />
                                    </div>
                                    <span>Ejecutar cada proyecto integrando equipos de vanguardia tecnológica y personal altamente capacitado.</span>
                                </li>
                                <li className="flex items-start gap-5 text-left">
                                    <div className="mt-1 min-w-[28px] flex justify-center">
                                        <FaCircleCheck className="text-secondary text-2xl" />
                                    </div>
                                    <span>Optimizar los procesos del sector industrial y energético operando como un verdadero aliado estratégico para sus metas.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Público Objetivo / A quién atendemos */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 reveal-up">
                        <div className="flex-1 w-full relative h-[300px] md:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border border-neutral/10" onClick={() => openImageModal(['/assets/sectorpetrolero.jpg'], 0)}>
                            <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                            <Image src="/assets/sectorpetrolero.jpg" alt="Sector Petrolero e Industrial" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-1 lg:pl-8 xl:pl-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-5">
                                <div className="bg-white/95 backdrop-blur-md w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-neutral/10 shadow-xl flex items-center justify-center shrink-0">
                                    <FaUsersGear className="text-primary text-2xl md:text-3xl" />
                                </div>
                                A quién atendemos
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed text-left mb-8 md:mb-10">
                                Nuestros servicios están diseñados y dirigidos para satisfacer las altas exigencias de los siguientes sectores productivos:
                            </p>
                            <ul className="space-y-8 md:space-y-10">
                                <li className="flex items-start gap-5 md:gap-6 border-l-4 border-transparent hover:border-secondary pl-4 transition-colors">
                                    <div className="bg-primary/5 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0">
                                        <FaHelmetSafety className="text-secondary text-xl md:text-2xl" />
                                    </div>
                                    <div>
                                        <strong className="text-dark text-lg md:text-xl block mb-2">Sector Minero</strong>
                                        <span className="text-gray-600 text-base md:text-lg leading-relaxed block text-left">Soluciones robustas diseñadas especialmente para entornos de alta exigencia y operación continua.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5 md:gap-6 border-l-4 border-transparent hover:border-secondary pl-4 transition-colors">
                                    <div className="bg-primary/5 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0">
                                        <FaOilWell className="text-secondary text-xl md:text-2xl" />
                                    </div>
                                    <div>
                                        <strong className="text-dark text-lg md:text-xl block mb-2">Sector Petrolero</strong>
                                        <span className="text-gray-600 text-base md:text-lg leading-relaxed block text-left">Cumplimiento estricto de normas de seguridad, instrumentación precisa y mantenimiento especializado.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5 md:gap-6 border-l-4 border-transparent hover:border-secondary pl-4 transition-colors">
                                    <div className="bg-primary/5 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0">
                                        <FaIndustry className="text-secondary text-xl md:text-2xl" />
                                    </div>
                                    <div>
                                        <strong className="text-dark text-lg md:text-xl block mb-2">Sector Industrial</strong>
                                        <span className="text-gray-600 text-base md:text-lg leading-relaxed block text-left">Optimización, mantenimiento predictivo y montaje integral para garantizar la producción ininterrumpida.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
