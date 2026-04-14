import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PWARegistration from "@/components/PWARegistration";

// Tipografías configuradas según guidelines.md
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "JHAIR LESCANO | Ingeniería de Software para Negocios",
  description:
    "Portafolio profesional de Jhair Lescano — HomeTech. Soluciones integrales de ingeniería: Data Engineering, Web & PWAs, e Infraestructura.",
  manifest: "/manifest.json",
  themeColor: "#B6171E",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HomeTech",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Script para evitar flash de tema incorrecto (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var tema = localStorage.getItem('tema');
                  if (tema === 'dark' || (!tema && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Material Symbols para iconos */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-surface text-on-surface dark:bg-dark-bg dark:text-surface antialiased transition-colors duration-300">
        <PWARegistration />
        {children}
      </body>
    </html>
  );
}
