import './globals.css';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata = {
    title: 'Catálogo - Circuit Store',
    description: 'Especialistas en la ejecución de trabajos eléctricos e instrumentación de alta calidad.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${inter.variable} ${roboto.variable} font-sans`}>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body>{children}</body>
        </html>
    );
}
