import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PWARegistration from "@/components/PWARegistration";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "Jhair Lescano | Ingeniería de Software para Negocios | Data Engineer & Full Stack",
  description: "Especialista en Data Engineering, Desarrollo Web PWA e Infraestructura. Soluciones escalables desde Tacna para el mundo.",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Jhair Lescano | Ingeniería de Software para Negocios | Data Engineer & Full Stack",
    description: "Especialista en Data Engineering, Desarrollo Web PWA e Infraestructura. Soluciones escalables desde Tacna para el mundo.",
    siteName: "HomeTech Engineering",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Logo HomeTech - Jhair Lescano",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhair Lescano | Ingeniería de Software para Negocios",
    description: "Especialista en Data Engineering, Desarrollo Web PWA e Infraestructura.",
    images: ["/icon-512x512.png"],
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
        {/* Optimizaciones de conexión para fuentes externas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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
      </head>
      <body className="font-body bg-surface text-on-surface dark:bg-dark-bg dark:text-surface antialiased transition-colors duration-300">
        <PWARegistration />
        {children}
        {/* Monitoreo de rendimiento y métricas Core Web Vitals en tiempo real */}
        <SpeedInsights />
      </body>
    </html>
  );
}
