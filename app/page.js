'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ImageModal from '../components/ui/ImageModal';
import ServiceModal from '../components/ui/ServiceModal';

// IMPORTAMOS LOS DATOS (El Array que acabamos de crear)
import { servicesData } from '../data/services';

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);

    const [serviceModalOpen, setServiceModalOpen] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const [smMainImgIndex, setSmMainImgIndex] = useState(0);

    // Animaciones de Scroll (Reveal)
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal, .reveal-up');
        const revealOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach((el) => revealOnScroll.observe(el));
    }, []);

    // Lógica Modal Imágenes (Portfolio)
    const openImageModal = (images, index) => {
        setModalImages(images);
        setModalIndex(index);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closeImageModal = () => {
        setModalOpen(false);
        document.body.style.overflow = '';
    };
    const nextImage = () => setModalIndex((prev) => (prev + 1) % modalImages.length);
    const prevImage = () => setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);

    // Lógica Modal Servicios (AQUÍ ESTÁ LA MAGIA)
    const openServiceModal = (serviceId) => {
        // Usamos .find() porque servicesData ahora es un Array
        const selectedService = servicesData.find(s => s.id === serviceId);

        if (selectedService) {
            setCurrentService(selectedService);
            setSmMainImgIndex(0);
            setServiceModalOpen(true);
            document.body.style.overflow = 'hidden';
        }
    };
    const closeServiceModal = () => {
        setServiceModalOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <Header />
            <Hero />
            <TrustBanner />
            {/* Le pasamos la función al componente Services */}
            <Services openServiceModal={openServiceModal} />
            <Portfolio openImageModal={openImageModal} />
            <About openImageModal={openImageModal} />
            <Clients />
            <CTA />
            <Footer />

            <ImageModal
                modalOpen={modalOpen}
                closeImageModal={closeImageModal}
                modalImages={modalImages}
                modalIndex={modalIndex}
                prevImage={prevImage}
                nextImage={nextImage}
            />

            <ServiceModal
                currentService={currentService}
                serviceModalOpen={serviceModalOpen}
                closeServiceModal={closeServiceModal}
                smMainImgIndex={smMainImgIndex}
                setSmMainImgIndex={setSmMainImgIndex}
            />
        </>
    );
}