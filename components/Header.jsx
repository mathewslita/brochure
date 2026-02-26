import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Configuración de los enlaces (Edita esto para cambiar el menú)
const MENU_ITEMS = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Clientes', href: '#clientes' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    // Manejo del Scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloquear scroll cuando el menú móvil está abierto
    useEffect(() => {
        if (mobileMenuActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuActive]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container-main flex justify-between items-center px-6 lg:px-12">

                {/* --- 1. LOGO (Con Link al inicio) --- */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/assets/logocircuit.png"
                        alt="Circuit Store Logo"
                        width={60}
                        height={60}
                        className="object-contain transition-transform group-hover:scale-105 w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                        priority
                    />
                    {/* Texto del Logo Estilizado */}
                    <div className="flex flex-col leading-none">
                        <span className="text-primary font-extrabold text-xl md:text-2xl tracking-wide">CIRCUIT</span>
                        <span className="text-secondary font-black text-xl md:text-2xl tracking-wide -mt-1">STORE</span>
                    </div>
                </Link>

                {/* --- 2. MENÚ ESCRITORIO --- */}
                <nav className="hidden lg:flex items-center gap-8">
                    {MENU_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-dark font-semibold text-lg hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Botón de Contacto Destacado */}
                    <a
                        href="https://wa.me/593988012730"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary ml-2 !px-7 !py-2.5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        Contacto <i className="fa-brands fa-whatsapp text-xl"></i>
                    </a>
                </nav>

                {/* --- 3. BOTÓN HAMBURGUESA (Móvil) --- */}
                <button
                    className="lg:hidden text-dark text-3xl focus:outline-none"
                    onClick={() => setMobileMenuActive(true)}
                    aria-label="Abrir menú"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            {/* --- 4. MENÚ MÓVIL (Overlay) --- */}
            <div
                className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col justify-center items-center transition-all duration-500 ${mobileMenuActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
                    }`}
            >
                {/* Botón Cerrar */}
                <button
                    className="absolute top-8 right-8 text-dark text-4xl hover:text-secondary hover:rotate-90 transition-all duration-300"
                    onClick={() => setMobileMenuActive(false)}
                    aria-label="Cerrar menú"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {/* Enlaces Móvil */}
                <nav className="flex flex-col items-center gap-8">
                    {MENU_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-dark text-3xl font-bold hover:text-primary transition-colors"
                            onClick={() => setMobileMenuActive(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    <a
                        href="https://wa.me/593988012730"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary w-full justify-center mt-6 shadow-lg shadow-secondary/20 hover:-translate-y-1"
                        onClick={() => setMobileMenuActive(false)}
                    >
                        Contacto <i className="fa-brands fa-whatsapp text-2xl"></i>
                    </a>
                </nav>
            </div>
        </header>
    );
}