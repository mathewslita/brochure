// src/data/services.js (VERSIÓN ARRAY DEFINITIVA)

export const servicesData = [
    {
        id: 'electrica',
        title: 'Área Eléctrica',
        category: 'Instalación y Mantenimiento',
        description: `<ul>
            <li>Elaboración de empalmes de media y alta tensión en frío, caliente y con micil de 15 kV hasta 69 kV.</li>
            <li>Instalación de equipos eléctricos,tableros, motores, bombas y equipos de superficie.</li>
            <li>Sistema de iluminación interior y perimetral.</li>
            <li>Puntas terminales en frio,caliente y PFISTERET de 15KV hasta 69KV.</li>
            <li>Tendido, ingreso y conexionado de cables de fuerza.</li>
            <li>Tendido y figurado de bandejas portacables y tuberia conduit.</li>
            <li>Sistema de proteccion atmosférica y sistema de puesta a tierra.</li>
            <li>Circuito Cerrado CCTV.</li>
        </ul>`,
        images: [
            { src: '/assets/Tablerodecontrolcableadohacialabase.jpeg', caption: 'Gabinete de media tensión.' },
            { src: '/assets/Cableadointernodetableroconborneras.jpeg', caption: 'Mantenimiento de tableros.' },
            { src: '/assets/Válvulasdepozorojoconinstrumentos.png', caption: 'Valvulas de Pozo.' },
            { src: '/assets/CámaraindustrialPelco.jpeg', caption: 'Circuito Cerrado de CCTV.' },
            { src: '/assets/proyectocablesempalme.jpg', caption: 'Cables de poder tripolar armado (15kV - 500 KCMIL).' },
            { src: '/assets/cablesnegros.jpeg', caption: 'Cables de poder armados' },
            { src: '/assets/casadecontrol.jpeg', caption: 'Montaje de PCR' },
            { src: '/assets/tubosrojos.jpeg', caption: 'Tubos Rojos' },
            { src: '/assets/Zanjaconmaquinariapesadaenlaselva.jpeg', caption: 'zanjas' },
            { src: '/assets/Rackdecomunicaciones.jpeg', caption: 'Rack de comunicaciones' },

        ],
        image: '/assets/Linierosentransformadordeposte.jpeg', // Imagen principal para la tarjeta
        whatsappMessage: 'Hola, busco información sobre el Área Eléctrica',
    },
    {
        id: 'instrumentacion',
        title: 'Área de Instrumentación',
        category: 'Sistemas & Control',
        description: `<ul>
            <li>Montaje de sistema de inyección: Químicos.</li>
            <li>Tendido figurado de TUBING para inyección de quimicos.</li>
            <li>Sistemas neumáticos e hidráulicos.</li>
            <li>Tendido y figurado de bandejas portacables.</li>
            <li>Montaje de instrumentos: Instalación de instrumentos de campo para medición de presión, temperatura, caudal y nivel.</li>
            <li>Sistema de control.</li>
            <li>Montaje de tableros de control PCl (Controladores Lógicos Programables) y JB (Cajas de Conexión).</li>
            <li>Tendido figurado de portacables control.</li>
            <li>Tuberia CONDUIT.</li>
            <li>Instalación de instrumentos de campo para medición de presión, temperatura, caudal y nivel.</li>
            <li>Instalación y mantenimiento de válvulas de control.</li>  
            <li>Contrastación y verificación de equipos de medición(Presión,Temperatura,Caudal,Nivel,Presión diferencial).</li>         
        </ul>`,
        images: [
            { src: '/assets/Técnicosobretanqueverde.jpeg', caption: 'Técnico especialista.' },
            { src: '/assets/Válvulasdepozorojoconinstrumentos.png', caption: 'Cruz Roja.' },
            { src: '/assets/Tuberías industriales con mechero al fondo.jpeg', caption: 'mechero.' },
            { src: '/assets/cilindrogrande.jpeg', caption: 'Cilindro.' },

        ],
        image: '/assets/calentadorestrifacicos.jpeg',
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
        title: 'Alquiler de Equipos y Herramientas',
        category: 'Alquiler',
        description: `<p>Asegure la precisión y eficiencia en sus proyectos con nuestro servicio especializado. Disponemos de un amplio catálogo de equipos y herramientas calibrados y listos para operar en las condiciones más exigentes.</p>

        <div style="margin-top: 1.5rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; color: #374151;">
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
                    <h4 style="font-weight:600; color:#0f172a; margin-bottom: 0.5rem;">Equipos de Medición</h4>
                    <ul style="list-style-type: none; padding-left: 0; font-size: 0.95rem; margin: 0;">
                        <li style="margin-bottom: 0.25rem;">• VLF</li>
                        <li style="margin-bottom: 0.25rem;">• Multímetro</li>
                        <li style="margin-bottom: 0.25rem;">• Termohidrómetro</li>
                        <li style="margin-bottom: 0.25rem;">• Telurómetro</li>
                        <li style="margin-bottom: 0.25rem;">• Megger</li>
                        <li style="margin-bottom: 0.25rem;">• Comunicadores de Campo</li>
                        <li>• Módulos de Presión</li>
                    </ul>
                </div>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
                    <h4 style="font-weight:600; color:#0f172a; margin-bottom: 0.5rem;">Herramientas Neumáticas</h4>
                    <ul style="list-style-type: none; padding-left: 0; font-size: 0.95rem; margin: 0;">
                        <li style="margin-bottom: 0.25rem;">• Hidráulicas</li>
                        <li style="margin-bottom: 0.25rem;">• Sacabocados</li>
                        <li style="margin-bottom: 0.25rem;">• Machinadoras</li>
                        <li style="margin-bottom: 0.25rem;">• Bombas de Presión</li>
                        <li>• Bombas de Achique</li>
                    </ul>
                </div>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
                    <h4 style="font-weight:600; color:#0f172a; margin-bottom: 0.5rem;">Herramientas de Potencia</h4>
                    <ul style="list-style-type: none; padding-left: 0; font-size: 0.95rem; margin: 0;">
                        <li style="margin-bottom: 0.25rem;">• Taladros</li>
                        <li>• Amoladoras</li>
                    </ul>
                </div>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
                    <h4 style="font-weight:600; color:#0f172a; margin-bottom: 0.5rem;">Equipos a Combustión</h4>
                    <ul style="list-style-type: none; padding-left: 0; font-size: 0.95rem; margin: 0;">
                        <li style="margin-bottom: 0.25rem;">• Generadores Eléctricos</li>
                        <li>• Bombas de Presión para PH</li>
                    </ul>
                </div>
            </div>
        </div>

        <div style="margin-top:2rem; padding: 1rem; background-color: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
            <p style="font-weight:700; color:#166534; display: flex; align-items: center; gap: 0.5rem;">
                <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                NOTA IMPORTANTE
            </p>
            <p style="margin-top: 0.5rem; color: #15803d; font-size: 0.95rem;">
                Todos nuestros equipos cuentan con <strong>certificados vigentes</strong>. Además, brindamos soporte técnico especializado durante todo el periodo de alquiler.
            </p>
        </div>`,
        images: [
            { src: '/assets/maletinamarillofluck.jpeg', caption: 'Equipos y Herramientas.' },
        ],
        image: '/assets/maletinamarillofluck.jpeg',
        whatsappMessage: 'Hola, requiero información y precios de alquiler de Equipos y Herramientas.',
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
        description: `<p>Ofrecemos un servicio especializado de <strong>importación y venta</strong> de materiales y suministros, garantizando calidad, cumplimiento y eficiencia en cada entrega. Trabajamos con una red global de proveedores confiables para brindar soluciones competitivas a sus proyectos.</p>

        <div style="margin-top: 1.5rem; background: #f8fafc; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
            <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0; color: #374151; display: flex; flex-direction: column; gap: 1.25rem;">
                <li>
                    <strong style="color: #1e40af; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; font-size: 1.05rem;">
                        <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        Material Eléctrico
                    </strong>
                    Conductores, protecciones, transformadores y equipos de maniobra en media y alta tensión.
                </li>
                <li>
                    <strong style="color: #1e40af; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; font-size: 1.05rem;">
                        <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Material Electromecánico
                    </strong>
                    Motores, bombas, tableros y repuestos industriales.
                </li>
                <li>
                    <strong style="color: #1e40af; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; font-size: 1.05rem;">
                        <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                        Instrumentación
                    </strong>
                    Sensores, válvulas de control, tubing y equipos de medición de precisión.
                </li>
            </ul>
        </div>

        <div style="margin-top:2rem; padding: 1rem; background-color: #eff6ff; border-left: 4px solid #2563eb; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
            <p style="font-weight:700; color:#1e3a8a; display: flex; align-items: center; gap: 0.5rem;">
                <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                CALIDAD GARANTIZADA
            </p>
            <p style="margin-top: 0.5rem; color: #1e40af; font-size: 0.95rem;">
                Solo trabajamos con marcas que cumplen todas las normativas técnicas internacionales. Brindamos asesoramiento completo durante todo el proceso de adquisición hasta la post-venta.
            </p>
        </div>`,
        images: [
            { src: '/assets/material_electrico_venta.png', caption: 'Venta e Importación de Materiales.' },
        ],
        image: '/assets/material_electrico_venta.png',
        whatsappMessage: 'Hola, deseo información sobre Compra e Importación de materiales.',
    },
];