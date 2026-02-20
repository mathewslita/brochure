document.addEventListener('DOMContentLoaded', function () {

    const flipBookElement = document.getElementById('flip-book');

    // Verificación de seguridad básica
    if (!flipBookElement) {
        console.error("No se encontró el elemento #flip-book");
        return;
    }

    // --- CONFIGURACIÓN OPTIMIZADA DINÁMICA ---
    // En PC la proporción será más ancha (500x650).
    // En Celulares será deliberadamente más delgada y alta (e.g., 400x730).
    const isMobile = window.innerWidth < 768;
    const baseWidth = isMobile ? 400 : 500;
    const baseHeight = isMobile ? 730 : 650;

    function initFlipbook() {
        const pageFlip = new St.PageFlip(flipBookElement, {
            width: baseWidth,
            height: baseHeight,

            // --- MODO FIJO (ANTIFALLOS) ---
            // "fixed" es OBLIGATORIO para evitar el bug cósmico de pantallas gigantes
            size: "fixed",

            maxShadowOpacity: 0.5,
            showCover: false,
            // --- PROTECCIONES PARA MÓVILES (Mantenidas) ---
            usePortrait: true, // Crucial: pasa a 1 hoja en celulares
            mobileScrollSupport: true // Crucial: Soporte para poder hacer scroll bajando
        });

        pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    }

    // --- PROTECCIÓN DE ARRANQUE ---
    // Es CRÍTICO esperar a que el navegador decodifique la primera foto. Si inicias el
    // el canvas 3D cuando la foto mide 0x0 bytes (cargando), StPageFlip enloquece e imprime zoom infinito.
    const firstImg = flipBookElement.querySelector('img');
    if (firstImg && !firstImg.complete) {
        firstImg.onload = initFlipbook;
        firstImg.onerror = initFlipbook;
    } else {
        initFlipbook();
    }
});