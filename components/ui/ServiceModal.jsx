import React from 'react';
import Image from 'next/image';

export default function ServiceModal({ currentService, serviceModalOpen, closeServiceModal, smMainImgIndex, setSmMainImgIndex }) {
    if (!currentService) return null;

    return (
        <div id="service-detail-modal" className={`service-modal-overlay ${serviceModalOpen ? 'show' : ''}`} onClick={(e) => { if (e.target.id === 'service-detail-modal') closeServiceModal(); }}>
            <div className="service-modal-content">
                <button className="service-modal-close" onClick={closeServiceModal}><i className="fa-solid fa-xmark"></i></button>
                <div className="service-modal-grid">
                    <div className="service-modal-gallery">
                        <div
                            className="service-main-image-container group"
                            style={{ position: 'relative', width: '100%', height: '300px', cursor: 'pointer', marginBottom: '0.5rem' }}
                            onClick={() => {
                                setSmMainImgIndex((prev) => (prev + 1) % currentService.images.length);
                            }}
                        >
                            <Image src={currentService.images[smMainImgIndex].src} alt={currentService.title} fill style={{ objectFit: 'contain', backgroundColor: '#f1f5f9' }} />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 z-10">
                                <span className="bg-white/90 text-primary font-bold px-4 py-2 rounded-full shadow border border-slate-200 flex items-center gap-2 text-sm whitespace-nowrap"><i className="fa-solid fa-arrow-right"></i></span>
                            </div>
                        </div>
                        <p className="text-center italic text-slate-500 text-[0.95rem] mb-4 font-medium px-2">{currentService.images[smMainImgIndex].caption}</p>
                        <div className="service-thumb-container">
                            {currentService.images.map((img, idx) => (
                                <div key={idx} className={`sm-thumb ${idx === smMainImgIndex ? 'active' : ''}`} onClick={() => setSmMainImgIndex(idx)} style={{ position: 'relative', width: 80, height: 60, cursor: 'pointer' }}>
                                    <Image src={img.src} alt="thumb" fill style={{ objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="service-modal-info">
                        <span className="service-modal-category">{currentService.category}</span>
                        <h2 className="service-modal-title">{currentService.title}</h2>
                        <div className="service-modal-description" dangerouslySetInnerHTML={{ __html: currentService.description }}></div>
                        <div className="service-modal-pricing">
                            <p className="pricing-note">Servicios y equipos bajo cotización formal.</p>
                            <a href={`https://wa.me/593988012730?text=${encodeURIComponent(currentService.whatsappMessage)}`} target="_blank" rel="noreferrer" className="btn-primary large pulse w-100" style={{ justifyContent: 'center', width: '100%' }}>
                                Cotizar por WhatsApp <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
