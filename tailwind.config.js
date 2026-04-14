/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================
      // 🎨 Paleta HomeTech — Identidad Visual
      // Fuente: guidelines.md + análisis de /referencias
      // ============================================
      colors: {
        // --- Colores de Marca (Brand) ---
        primary: {
          DEFAULT: "#B6171E",       // Rojo HomeTech principal (CTAs, acentos, bordes)
          container: "#DA3433",     // Rojo contenedor (hover de botones primarios)
          fixed: "#FFDAD6",         // Rojo muy suave (fondos sutiles)
          "fixed-dim": "#FFB3AC",   // Rojo suave atenuado (inverse-primary)
        },
        "on-primary": {
          DEFAULT: "#FFFFFF",       // Texto sobre primary
          container: "#FFFBFF",     // Texto sobre primary-container
          fixed: "#410003",         // Texto sobre primary-fixed
          "fixed-variant": "#930010", // Texto sobre primary-fixed variant
        },

        // --- Superficies (Fondos) ---
        surface: {
          DEFAULT: "#F9F9F9",       // Fondo principal Light Mode
          dim: "#DADADA",           // Superficie atenuada
          bright: "#F9F9F9",        // Superficie brillante
          container: {
            DEFAULT: "#EEEEEE",     // Contenedor estándar
            low: "#F3F3F3",         // Contenedor bajo
            lowest: "#FFFFFF",      // Contenedor mínimo (blanco puro)
            high: "#E8E8E8",        // Contenedor alto
            highest: "#E2E2E2",     // Contenedor máximo
          },
          variant: "#E2E2E2",       // Variante de superficie
          tint: "#BA1A20",          // Tinte de superficie (rojo)
        },
        "on-surface": {
          DEFAULT: "#1A1C1C",       // Texto principal sobre superficies
          variant: "#603E39",       // Texto secundario (warm variant)
        },

        // --- Secundarios ---
        secondary: {
          DEFAULT: "#5F5E5F",       // Gris neutro (textos secundarios)
          container: "#E2DFE0",     // Contenedor secundario
          fixed: "#E5E2E3",         // Secundario fijo
          "fixed-dim": "#C8C6C7",   // Secundario fijo atenuado
        },
        "on-secondary": {
          DEFAULT: "#FFFFFF",       // Texto sobre secundario
          container: "#636263",     // Texto sobre contenedor secundario
          fixed: "#1B1B1C",         // Texto sobre secundario fijo
          "fixed-variant": "#474647", // Texto sobre variante
        },

        // --- Terciarios (Azul de acento) ---
        tertiary: {
          DEFAULT: "#0059BA",       // Azul terciario
          container: "#0071E8",     // Contenedor terciario
          fixed: "#D7E2FF",         // Terciario fijo
          "fixed-dim": "#ACC7FF",   // Terciario fijo atenuado
        },
        "on-tertiary": {
          DEFAULT: "#FFFFFF",       // Texto sobre terciario
          container: "#FEFCFF",     // Texto sobre contenedor terciario
          fixed: "#001A40",         // Texto sobre terciario fijo
          "fixed-variant": "#004491", // Texto sobre variante terciaria
        },

        // --- Error ---
        error: {
          DEFAULT: "#BA1A1A",       // Color de error
          container: "#FFDAD6",     // Contenedor de error
        },
        "on-error": {
          DEFAULT: "#FFFFFF",       // Texto sobre error
          container: "#93000A",     // Texto sobre contenedor de error
        },

        // --- Bordes y contornos ---
        outline: {
          DEFAULT: "#956D67",       // Borde estándar
          variant: "#EBBBB4",       // Borde suave / divisores
        },

        // --- Inversiones (para elementos invertidos) ---
        inverse: {
          surface: "#2F3131",       // Superficie invertida (banners oscuros)
          "on-surface": "#F1F1F1",  // Texto sobre inversión
          primary: "#FFB3AC",       // Primary invertido
        },

        // --- Fondo de página ---
        background: "#F9F9F9",      // Light Mode
        "on-background": "#1A1C1C", // Texto sobre fondo

        // --- Dark Mode (aplicados en clases dark:) ---
        dark: {
          bg: "#0B0F19",            // Fondo Dark Mode (Azul Oscuro/Negro)
          surface: "#1A1C1C",       // Superficie oscura
          "surface-high": "#2F3131", // Superficie oscura elevada
        },
      },

      // ============================================
      // 🔤 Tipografía — Sans-serif moderna
      // ============================================
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
      },

      // ============================================
      // 📐 Bordes redondeados (estilo ingenieril, mínimo)
      // ============================================
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
