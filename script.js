document.addEventListener('DOMContentLoaded', function () {

    const flipBookElement = document.getElementById('flip-book');

    // Verificación de seguridad básica
    if (!flipBookElement) {
        console.error("No se encontró el elemento #flip-book");
        return;
    }

    // --- CONFIGURACIÓN OPTIMIZADA (FIJA) ---
    // En monitores y layouts modernos, las imágenes gigantes A4 (1241x1755) rompen el calculo de StPageFlip al usar "fit"
    // Usaremos un modo de escala fija y dócil que el CSS pueda manejar:
    const baseWidth = 500; // Ancho base relajado (1000px totales)
    const baseHeight = 650; // Alto proporcional A4 (500 / 0.707)

    let pageFlip;

    function initFlipbook() {
        pageFlip = new St.PageFlip(flipBookElement, {
            width: baseWidth,
            height: baseHeight,

            // --- CAMBIO CLAVE PARA CELULARES ---
            // "fit" recalcula correctamente el canvas al tamaño del celular
            size: "fit",

            // --- PROTECCIONES PARA MÓVILES ---
            minWidth: 280, // Celular pequeño
            minHeight: 364, // Proporción al celular
            maxWidth: 1000, // Topes para que no sea gigante
            maxHeight: 1300,

            maxShadowOpacity: 0.5,
            showCover: false,
            usePortrait: true, // Crucial: pasa a 1 hoja en móviles
            mobileScrollSupport: true // Crucial: Soporte para poder hacer scroll bajando
        });

        pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    }

    // --- RECALCULAR AL VOLTEAR EL MÓVIL ---
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (pageFlip) {
                pageFlip.update();
            }
        }, 200);
    });

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