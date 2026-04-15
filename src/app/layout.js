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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#B6171E",
};

export const metadata = {
  title: "Jhair Lescano | Ingeniería de Software para Negocios",
  description: "Especialista en Data Engineering, Desarrollo Web PWA e Infraestructura. Soluciones escalables desde Tacna para el mundo.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Jhair Lescano | Ingeniería de Software para Negocios",
    description: "Especialista en Data Engineering, Desarrollo Web PWA e Infraestructura. Soluciones escalables desde Tacna para el mundo.",
    siteName: "HomeTech Engineering",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYr0TR_0gJFMQPONuJzxD6YyHp5UzYymBMnQJ1YkPbkOlH6EePMjW_0SsOLLtM1hqgxo2J4CcUBl0tKATK1yg-lJfj_K2j4nc7a-HZ1jXNHeYCXIZszujvxl2x4D8mDmvpVCjbk_oCtnUacF2JVUt9lFbhjJ5vNGuzitrgM2Y1KD5WiJptDSSVEf41udvv53-T4fOd4pzhjbKQwptKop2BWsZS1J0cOr8HlpOE8rkvprI4ViACyZ91Wj85eiI-5gG-pA07ErcpL7I", // Foto de perfil usada en el App
        width: 500,
        height: 625,
        alt: "Jhair Lescano - Software Engineer HomeTech",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
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
