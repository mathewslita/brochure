export default function TrustBanner() {
    return (
        <section className="bg-primary !py-3 md:!py-4 relative z-10 -mt-8 md:-mt-12 shadow-xl mb-12 md:mb-24">
            <div className="container-main w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 reveal">

                {/* Ítem 1 */}
                <div className="flex flex-row items-center gap-4 transform hover:scale-105 transition-transform duration-300 w-[240px] md:w-[260px] lg:w-[280px]">
                    <div className="flex justify-center shrink-0 w-12">
                        <i className="fa-solid fa-briefcase text-3xl md:text-4xl text-secondary drop-shadow-md"></i>
                    </div>
                    <div className="flex flex-col text-center md:text-left items-center md:items-start flex-1">
                        <p className="text-2xl md:text-3xl font-bold text-white leading-tight mb-0.5">+30</p>
                        <p className="text-blue-100 text-sm md:text-base font-medium tracking-wide">Proyectos Realizados</p>
                    </div>
                </div>

                {/* Separador (Solo PC) */}
                <div className="hidden md:block w-px h-12 bg-white/20 self-center"></div>

                {/* Ítem 2 */}
                <div className="flex flex-row items-center gap-4 transform hover:scale-105 transition-transform duration-300 w-[240px] md:w-[260px] lg:w-[280px]">
                    <div className="flex justify-center shrink-0 w-12">
                        <i className="fa-solid fa-calendar-check text-3xl md:text-4xl text-secondary drop-shadow-md"></i>
                    </div>
                    <div className="flex flex-col text-center md:text-left items-center md:items-start flex-1">
                        <p className="text-2xl md:text-3xl font-bold text-white leading-tight mb-0.5">+3 Años</p>
                        <p className="text-blue-100 text-sm md:text-base font-medium tracking-wide">De Experiencia</p>
                    </div>
                </div>

                {/* Separador (Solo PC) */}
                <div className="hidden md:block w-px h-12 bg-white/20 self-center"></div>

                {/* Ítem 3 */}
                <div className="flex flex-row items-center gap-4 transform hover:scale-105 transition-transform duration-300 w-[240px] md:w-[260px] lg:w-[280px]">
                    <div className="flex justify-center shrink-0 w-12">
                        <i className="fa-solid fa-shield-halved text-3xl md:text-4xl text-secondary drop-shadow-md"></i>
                    </div>
                    <div className="flex flex-col text-center md:text-left items-center md:items-start flex-1">
                        <p className="text-2xl md:text-3xl font-bold text-white leading-tight mb-0.5">Garantía</p>
                        <p className="text-blue-100 text-sm md:text-base font-medium tracking-wide">Calidad y Seguridad</p>
                    </div>
                </div>

            </div>
        </section>
    );
}