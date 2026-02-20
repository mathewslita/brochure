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
    modalCaption.innerHTML = `Imagen ${currentIndex + 1} de ${currentImages.length}`;
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