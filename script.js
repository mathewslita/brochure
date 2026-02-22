document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. NAVBAR SCROLL EFFECT --- */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    /* --- 2. MOBILE MENU OVELAY --- */
    const mobileMenuBtn = document.getElementById('mobile-menuBtn');
    const closeMenuBtn = document.getElementById('close-menuBtn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    });

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeMenuBtn.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });


    /* --- 3. SCROLL REVEAL ANIMATIONS (Intersection Observer) --- */
    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');

    const revealOptions = {
        threshold: 0.15, // Porcentaje del elemento visible antes de activar (15%)
        rootMargin: "0px 0px -50px 0px" // Trigger un poco antes de llegar abajo
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* Opcional: Trigger un pequeño retraso inicial para elementos que ya están en pantalla al cargar */
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                el.classList.add('active');
                revealOnScroll.unobserve(el);
            }
        });
    }, 100);

});

/* --- 4. IMAGE LIGHTBOX MODAL LOGIC --- */
let currentImages = [];
let currentIndex = 0;

const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.getElementById('modal-close');
const prevBtn = document.getElementById('modal-prev');
const nextBtn = document.getElementById('modal-next');

// Define openGallery to extract dynamic Vite hashed URLs from sibling thumbnails
window.openGallery = function (imgElement) {
    const galleryContainer = imgElement.closest('.gallery-images');
    const allImages = Array.from(galleryContainer.querySelectorAll('img.gallery-thumb'));
    const imageArray = allImages.map(img => img.src);
    const index = allImages.indexOf(imgElement);
    window.openModal(imageArray, index);
};

// Define openModal variable globally so onclick can reach it
window.openModal = function (imageArray, index) {
    currentImages = imageArray;
    currentIndex = index;
    updateModalContent();

    // Configurar layout de botones dependiendo si hay mas de 1 imagen
    if (currentImages.length > 1) {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Block background scrolling
}

function updateModalContent() {
    modalImg.src = currentImages[currentIndex];
    if (currentImages.length > 1) {
        modalCaption.innerHTML = `Imagen ${currentIndex + 1} de ${currentImages.length}`;
    } else {
        modalCaption.innerHTML = '';
    }
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore background scrolling
    // Clear out image source so it doesn't blink old image on next open
    setTimeout(() => modalImg.src = "", 300);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }
    updateModalContent();
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }
    updateModalContent();
}

// Event Listeners for Modal
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Teclado para navegar en modal
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('show')) return;

    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft' && currentImages.length > 1) {
        prevImage();
    } else if (e.key === 'ArrowRight' && currentImages.length > 1) {
        nextImage();
    }
});

/* --- 5. E-COMMERCE SERVICE DETAIL MODAL --- */
const servicesData = {
    electrica: {
        title: "Área Eléctrica",
        category: "Instalación y Mantenimiento",
        description: `<ul>
            <li>Elaboramos empalmes de media y alta tensión en frío, caliente y con mísil de 15 kV hasta 69 kV.</li>
            <li>Puntas terminales en frío, caliente y PFISTERER de 15 kV - 69 kV.</li>
            <li>Instalación de equipos eléctricos, tableros, motores, bombas y equipos de superficie.</li>
            <li>Tendido, ingreso y conexionado de cables de fuerza y control.</li>
            <li>Sistema de iluminación interior y perimetral.</li>
            <li>Tendido y figurado de bandejas portacables y tubería conduit.</li>
            <li>Sistema de protección atmosférica, sistema de puesta a tierra.</li>
            <li>Circuito cerrado de CCTV.</li>
        </ul>`,
        images: [
            { src: "./assets/Tablerodecontrolcableadohacialabase.jpeg", caption: "Gabinete de media tensión y control." },
            { src: "./assets/Cableadointernodetableroconborneras.jpeg", caption: "Instalación y mantenimiento de tableros eléctricos." },
            { src: "./assets/Rackdecomunicaciones.jpeg", caption: "Instalación de racks de comunicación y CCTV." }
        ],
        whatsappMessage: "Hola, busco información sobre el Área Eléctrica"
    },
    instrumentacion: {
        title: "Área de Instrumentación",
        category: "Sistemas & Control",
        description: `<ul>
            <li>Montaje de sistema de inyección de químicos.</li>
            <li>Tendido figurado de TUBING para inyección de químicos.</li>
            <li>Sistemas neumáticos e hidráulicos.</li>
            <li>Tendido figurado de bandejas.</li>
            <li>Montaje de instrumentos.</li>
        </ul>`,
        images: [
            { src: "./assets/Técnicosobretanqueverde.jpeg", caption: "Técnico especialista sobre tanque industrial." },
            { src: "./assets/Técnico de naranja cableando instrumentos.jpeg", caption: "Cableado y verificación de instrumentos de campo." },
            { src: "./assets/CámaraindustrialPelco.jpeg", caption: "Montaje de sistemas de circuito cerrado industrial." },
            { src: "./assets/Detalledetransmisoresmanómetrosyválvulas.jpeg", caption: "Detalle de transmisores, manómetros y válvulas de control." }
        ],
        whatsappMessage: "Hola, busco información sobre Instrumentación"
    },
    medicion: {
        title: "Medición y Pruebas Eléctricas",
        category: "Diagnóstico Avanzado",
        description: `<ul>
            <li>Megger y VLF.</li>
            <li>Tangente delta.</li>
            <li>Descargas parciales.</li>
            <li>Medición de sistema de puesta a tierra.</li>
            <li>Multímetro.</li>
        </ul>`,
        images: [
            { src: "./assets/Equipo Megger probando cables.jpeg", caption: "Pruebas dieléctricas con equipo Megger avanzado." },
            { src: "./assets/maletinamarillofluck.jpeg", caption: "Instrumentos de medición y certificación Fluke." },
            { src: "./assets/TécnicooperandoequipoMegger.jpeg", caption: "Técnico especialista validando mediciones en campo." }
        ],
        whatsappMessage: "Hola, busco información sobre alquiler de equipos de Medición y Pruebas"
    },
    maquinaria: {
        title: "Maquinaria y Herramientas de Potencia",
        category: "Fuerza y Generación",
        description: `<ul>
            <li>Generadores.</li>
            <li>Machinadoras.</li>
            <li>Sacabocados.</li>
        </ul>`,
        images: [
            { src: "./assets/generadores.jpg", caption: "Generadores de potencia de alta capacidad." }
        ],
        whatsappMessage: "Hola, busco información sobre alquiler de Maquinaria y Potencia"
    },
    seguridad: {
        title: "Equipos de Seguridad y Accesorios",
        category: "Seguridad y Herramientas Operativas",
        description: `<ul>
            <li>Contenedor de empalmes.</li>
            <li>Etiquetadoras.</li>
            <li>Pértigas.</li>
            <li>Guantes dieléctricos.</li>
        </ul>`,
        images: [
            { src: "./assets/equipo_seguridad_personal.png", caption: "Implementos de seguridad personal y dieléctricos." },
            { src: "./assets/herramientas_operativas_seguridad.png", caption: "Herramientas operativas y accesorios de red." }
        ],
        whatsappMessage: "Hola, busco información sobre alquiler de equipos de Seguridad y Accesorios"
    },
    venta: {
        title: "Venta",
        category: "Comercialización",
        description: `
            <p><strong>Venta e Importación de Material Eléctrico, Electromecánico e Instrumentación</strong></p>
            <p>Ofrecemos un servicio especializado de importación y suministro de materiales, asegurando calidad, cumplimiento y eficiencia en cada entrega. Trabajamos con una red global de proveedores confiables que superan los altos estándares técnicos exigidos por la industria, brindando soluciones seguras, competitivas y oportunas para el éxito de sus proyectos.</p>
            
            <h4 style="margin-top: 1.5rem; color: var(--primary-color);">Suministro Global de Materiales</h4>
            <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style: none;">
                <li style="margin-bottom: 0.8rem;"><i class="fa-solid fa-bolt" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> <strong>Material eléctrico:</strong> Conductores, protecciones, transformadores y equipos de maniobra en media y alta tensión.</li>
                <li style="margin-bottom: 0.8rem;"><i class="fa-solid fa-gears" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> <strong>Material electromecánico:</strong> Motores, bombas, tableros y repuestos industriales.</li>
                <li style="margin-bottom: 0.8rem;"><i class="fa-solid fa-gauge" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> <strong>Instrumentación:</strong> Sensores, válvulas de control, tubing y equipos de medición de precisión.</li>
            </ul>

            <h4 style="margin-top: 1.5rem; color: var(--primary-color);">Nuestras Ventajas en Importación</h4>
            <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style: none;">
                <li style="margin-bottom: 0.8rem;"><i class="fa-solid fa-shield-check" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> <strong>Calidad certificada:</strong> Solo trabajamos con marcas que cumplen estrictamente las normativas vigentes.</li>
                <li style="margin-bottom: 0.8rem;"><i class="fa-solid fa-truck-fast" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> <strong>Eficiencia logística:</strong> Tiempos de entrega optimizados para evitar paradas innecesarias en su operación.</li>
                <li style="margin-bottom: 0.8rem;"><i class="fa-solid fa-user-tie" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> <strong>Asesoría técnica:</strong> No solo vendemos el material; le asesoramos sobre la mejor opción técnica para su necesidad específica.</li>
            </ul>`,
        images: [
            { src: "./assets/material_electrico_venta.png", caption: "Materiales y componentes eléctricos premium." },
            { src: "./assets/ventas.jpg", caption: "Suministro global de equipos a gran escala." },
            { src: "./assets/equipo_seguridad_personal.png", caption: "Garantía de calidad y respaldo logístico." }
        ],
        whatsappMessage: "Hola, quiero comprar materiales eléctricos"
    }
};

const serviceModal = document.getElementById('service-detail-modal');
const smMainImg = document.getElementById('sm-main-img');
const smThumbs = document.getElementById('sm-thumbs');
const smCategory = document.getElementById('sm-category');
const smTitle = document.getElementById('sm-title');
const smDescription = document.getElementById('sm-description');
const smWhatsappBtn = document.getElementById('sm-whatsapp-btn');

const smMainCaption = document.getElementById('sm-main-caption');

window.openServiceDetail = function (serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;

    // Populate Right Info
    smCategory.innerText = data.category;
    smTitle.innerText = data.title;
    smDescription.innerHTML = data.description;

    // Set WhatsApp link
    smWhatsappBtn.href = `https://wa.me/593988012730?text=${encodeURIComponent(data.whatsappMessage)}`;

    // Populate Left Gallery
    smMainImg.src = data.images[0].src;

    // Set initial caption
    if (data.images[0].caption) {
        smMainCaption.innerText = data.images[0].caption;
        smMainCaption.classList.add('show');
    } else {
        smMainCaption.innerText = '';
        smMainCaption.classList.remove('show');
    }

    smThumbs.innerHTML = '';

    // Variables for click-to-next-image on main image
    let currentImgIndex = 0;

    if (data.images.length > 1) {
        // Setup clicking on the main image to go to the next one
        smMainImg.style.cursor = 'pointer';
        smMainImg.onclick = function () {
            currentImgIndex = (currentImgIndex + 1) % data.images.length;
            const targetImgObj = data.images[currentImgIndex];
            smMainImg.src = targetImgObj.src;

            // Update caption
            if (targetImgObj.caption) {
                smMainCaption.innerText = targetImgObj.caption;
                smMainCaption.classList.add('show');
            } else {
                smMainCaption.innerText = '';
                smMainCaption.classList.remove('show');
            }

            // Update active state
            document.querySelectorAll('.sm-thumb').forEach((t, i) => {
                if (i === currentImgIndex) t.classList.add('active');
                else t.classList.remove('active');
            });
        };

        data.images.forEach((imgObj, index) => {
            const img = document.createElement('img');
            img.src = imgObj.src;
            img.className = 'sm-thumb' + (index === 0 ? ' active' : '');
            img.onclick = function () {
                currentImgIndex = index;
                smMainImg.src = imgObj.src;

                // Update caption
                if (imgObj.caption) {
                    smMainCaption.innerText = imgObj.caption;
                    smMainCaption.classList.add('show');
                } else {
                    smMainCaption.innerText = '';
                    smMainCaption.classList.remove('show');
                }

                // Update active state
                document.querySelectorAll('.sm-thumb').forEach(t => t.classList.remove('active'));
                img.classList.add('active');
            };
            smThumbs.appendChild(img);
        });
    } else {
        // If only 1 image, remove pointer cursor and click handler
        smMainImg.style.cursor = 'default';
        smMainImg.onclick = null;
    }

    // Show modal
    serviceModal.classList.add('show');

    document.body.style.overflow = 'hidden';
};

window.closeServiceDetail = function () {
    serviceModal.classList.remove('show');
    document.body.style.overflow = '';
};

// Close when clicking outside content
serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        window.closeServiceDetail();
    }
});

document.addEventListener('keydown', (e) => {
    if (serviceModal.classList.contains('show') && e.key === 'Escape') {
        window.closeServiceDetail();
    }
});

/* --- 6. GLOBAL IMAGE CLICK-TO-ENLARGE LOGIC --- */
document.addEventListener('DOMContentLoaded', () => {
    // Select images in About and Portfolio sections
    const clickableImages = document.querySelectorAll('.about-image img, .portfolio-image img');
    clickableImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            window.openModal([img.src], 0);
        });
    });
});