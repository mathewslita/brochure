// src/data/services.js (VERSIÓN ARRAY DEFINITIVA)

export const servicesData = [
    {
        id: 'electrica',
        title: 'Área Eléctrica',
        category: 'Instalación y Mantenimiento',
        description: `<ul>
            <li>Elaboramos empalmes de media y alta tensión en frío, caliente y con micil de 15KV hasta 69KV.</li>
            <li>Instalación de equipos eléctricos,tableros, motores, bombas y equipos de superficie.</li>
            <li>Sistema de iluminación interior y perimetral.</li>
            <li>Puntas terminales en frio,caliente y PFISTETET de 15KV hasta 69KV.</li>
            <li>Tendido, ingreso y conexionado de cables de fuerza y control.</li>
            <li>Tendido y figurado de bandejas portacables y tuberia conduit.</li>
            <li>Sistema de proteccion atmosférica, sistema puesta tierra.</li>
            <li>Circuito Cerrado CCTV.</li>
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
             <li>Tendido figurado de TUBING para inyección de quimicos.</li>
            <li>Sistemas neumáticos e hidráulicos.</li>
            <li>Tendido figurado de bandejas.</li>
            <li>Montaje de instrumentos.</li>
            <li>Sistema de control.</li>
            <li>Montaje de tableros de control PCl y JB.</li>
            <li>Tendido figurado de portacables control.</li>
            <li>Tuberia CONDUIT.</li>
            <li>Instalación de instrumentos presion, temperatura, caudal y nivel.</li>
            <li>Valvulas de control.</li>            
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
        title: 'Equipos de Medición',
        category: 'Diagnóstico Avanzado',
        description: `<ul>
            <li>Megger y VLF.</li>
            <li>Medición de sistema de puesta a tierra.</li>
            <li>Tangente Delta.</li>
            <li>Descargas Parciales.</li>
            <li>Multimetro.</li>
            <li>Machinadora.</li>
            <li>Sacabocados.</li>
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
        title: 'Alquiler de Equipos',
        category: 'Alquiler',
        description: `<p>Disponibilidad de equipos de medición y pruebas para instrumentos (certificados y calibrados). Asegure la precisión en su proyecto eléctrico y de instrumentación con nuestro servicio de alquiler.</p>
        <ul>
            <li>Equipos de medición, calibración y pruebas eléctricas.</li>
            <li>Herramientas especializadas para diagnóstico avanzado.</li>
            <li>Soporte técnico integral durante el periodo de alquiler.</li>
        </ul>
        <p style="margin-top:1.5rem; font-weight:700; color:#1d4ed8;">
           👉 Escríbanos para consultar disponibilidad y pedir cotización inmediata.
        </p>`,
        images: [
            { src: '/assets/maletinamarillofluck.jpeg', caption: 'Equipos de medición certificados.' },
        ],
        image: '/assets/maletinamarillofluck.jpeg',
        whatsappMessage: 'Hola, requiero disponibilidad y precios de alquiler para equipos de medición y pruebas.',
    },
    {
        id: 'Herramientas y Equipos',
        title: 'Herramientas y Equipos Certificados',
        category: 'Herramientas y Equipos',
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
        title: 'Venta e Importación de Material Eléctrico, Electromecánico e Instrumentación',
        category: 'Comercialización',
        description: `<p>Ofrecemos un servicio especializado de importación y suministro de materiales, garantizando calidad, cumplimiento y eficiencia en cada entrega. Trabajamos con una red global de proveedores confiables para ofrecer productos que superan los estándares técnicos exigidos por la industria, brindando soluciones seguras, competitivas y oportunas para el éxito de sus proyectos.</p>`,
        images: [
            { src: '/assets/material_electrico_venta.png', caption: 'Materiales eléctricos.' },
        ],
        image: '/assets/material_electrico_venta.png',
        whatsappMessage: 'Hola, quiero comprar materiales',
    },
];