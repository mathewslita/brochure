// src/data/services.js (VERSIÓN ARRAY DEFINITIVA)

export const servicesData = [
    {
        id: 'electrica',
        title: 'Área Eléctrica',
        category: 'Instalación y Mantenimiento',
        description: `<ul>
            <li>Elaboramos empalmes de media y alta tensión.</li>
            <li>Instalación de equipos eléctricos y tableros.</li>
            <li>Sistema de iluminación interior y perimetral.</li>
        </ul>`,
        images: [
            { src: '/assets/Tablerodecontrolcableadohacialabase.jpeg', caption: 'Gabinete de media tensión.' },
            { src: '/assets/Cableadointernodetableroconborneras.jpeg', caption: 'Mantenimiento de tableros.' },
        ],
        image: '/assets/Linierosentransformadordeposte.jpeg', // Imagen principal para la tarjeta
        whatsappMessage: 'Hola, busco información sobre el Área Eléctrica',
    },
    {
        id: 'instrumentacion',
        title: 'Área de Instrumentación',
        category: 'Sistemas & Control',
        description: `<ul>
            <li>Montaje de sistema de inyección de químicos.</li>
            <li>Sistemas neumáticos e hidráulicos.</li>
        </ul>`,
        images: [
            { src: '/assets/Técnicosobretanqueverde.jpeg', caption: 'Técnico especialista.' },
            { src: '/assets/CámaraindustrialPelco.jpeg', caption: 'Circuitos cerrados.' },
        ],
        image: '/assets/Paneldeaceroconmanómetrosypalancasrojas.jpeg',
        whatsappMessage: 'Hola, busco información sobre Instrumentación',
    },
    {
        id: 'medicion',
        title: 'Medición y Pruebas',
        category: 'Diagnóstico Avanzado',
        description: `<ul>
            <li>Megger y VLF.</li>
            <li>Medición de sistema de puesta a tierra.</li>
        </ul>`,
        images: [
            { src: '/assets/Equipo Megger probando cables.jpeg', caption: 'Pruebas dieléctricas.' },
            { src: '/assets/maletinamarillofluck.jpeg', caption: 'Equipos Fluke.' },
        ],
        image: '/assets/pruebasdieléctricas.jpeg',
        whatsappMessage: 'Hola, info sobre alquiler de equipos de Medición',
    },
    {
        id: 'maquinaria',
        title: 'Maquinaria y Fuerza',
        category: 'Fuerza y Generación',
        description: `<ul>
            <li>Generadores de alta capacidad.</li>
            <li>Machinadoras y sacabocados.</li>
        </ul>`,
        images: [
            { src: '/assets/generadores.jpg', caption: 'Generadores de potencia.' },
        ],
        image: '/assets/generadores.jpg',
        whatsappMessage: 'Hola, info sobre alquiler de Maquinaria',
    },
    {
        id: 'seguridad',
        title: 'Seguridad y Accesorios',
        category: 'Seguridad Operativa',
        description: `<ul>
            <li>Equipos de protección personal certificada.</li>
            <li>Herramientas y accesorios de red.</li>
        </ul>`,
        images: [
            { src: '/assets/equipo_seguridad_personal.png', caption: 'EPP Certificado.' },
        ],
        image: '/assets/equipo_seguridad_personal.png',
        whatsappMessage: 'Hola, info sobre Equipos de Seguridad',
    },
    {
        id: 'venta',
        title: 'Venta',
        category: 'Comercialización',
        description: `<p>Venta e Importación de Material Eléctrico e Instrumentación.</p>`,
        images: [
            { src: '/assets/material_electrico_venta.png', caption: 'Materiales eléctricos.' },
        ],
        image: '/assets/material_electrico_venta.png',
        whatsappMessage: 'Hola, quiero comprar materiales',
    },
];