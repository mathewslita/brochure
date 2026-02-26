import React, { useEffect } from 'react';
import Image from 'next/image';

export default function ImageModal({ modalOpen, closeImageModal, modalImages, modalIndex, prevImage, nextImage }) {
    // Keyboard navigation for image modal
    useEffect(() => {
        const handleKeydown = (e) => {
            if (!modalOpen) return;
            if (e.key === 'Escape') closeImageModal();
            if (e.key === 'ArrowLeft' && modalImages.length > 1) prevImage();
            if (e.key === 'ArrowRight' && modalImages.length > 1) nextImage();
        };
        document.addEventListener('keydown', handleKeydown);
        return () => document.removeEventListener('keydown', handleKeydown);
    }, [modalOpen, modalImages, closeImageModal, prevImage, nextImage]);

    return (
        <div id="image-modal" className={`modal ${modalOpen ? 'show' : ''}`} onClick={(e) => { if (e.target.id === 'image-modal') closeImageModal(); }}>
            <span className="modal-close" onClick={closeImageModal}>&times;</span>
            <div className="modal-content" style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
                {modalImages.length > 0 && (
                    <div style={{ position: 'relative', width: '90vw', height: '80vh', maxWidth: '1000px' }}>
                        <Image id="modal-image" src={modalImages[modalIndex]} alt="Enlarged Image" fill style={{ objectFit: 'contain', margin: 'auto' }} />
                    </div>
                )}
                {modalImages.length > 1 && (
                    <>
                        <div id="modal-caption" className="modal-caption">{`Imagen ${modalIndex + 1} de ${modalImages.length}`}</div>
                        <button className="modal-prev" onClick={prevImage} style={{ display: 'block', position: 'absolute', top: '50%', left: 0 }}>&#10094;</button>
                        <button className="modal-next" onClick={nextImage} style={{ display: 'block', position: 'absolute', top: '50%', right: 0 }}>&#10095;</button>
                    </>
                )}
            </div>
        </div>
    );
}
