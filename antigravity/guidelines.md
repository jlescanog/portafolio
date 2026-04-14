# Guidelines del Proyecto: Portafolio Hub - Jhair Lescano

## 🎨 Identidad Visual (HomeTech)
- **Paleta de Colores:**
  - Rojo Principal: `#E31D2B` (Acentos, CTAs, bordes de tarjetas).
  - Negro: `#000000` (Banners de encabezado, texto principal).
  - Blanco: `#FFFFFF` (Fondo Light Mode).
  - Azul Oscuro/Negro: `#0B0F19` (Fondo Dark Mode).
  - Gris Neutro: `#4F4F4F` (Textos secundarios).
- **Tipografía:** Sans-serif moderna y limpia (Prioridad: Inter o Roboto).
- **Estilo:** Minimalismo técnico, tipo "Dashboard de Ingeniería".

## 🛠 Estructura de Desarrollo
- **Framework:** Next.js (App Router).
- **Estilos:** Tailwind CSS.
- **Idioma de Código:** Funciones y variables en **español**. Comentarios en español.
- **Arquitectura de Carpetas:**
  - `/components`: Componentes atómicos reutilizables (`TarjetaProyecto.js`, `BotonFiltro.js`).
  - `/config`: Archivos de datos (`proyectos.json`).
  - `/app`: Rutas y páginas.
  - `/public`: Assets, logos y fotos.

## ⚖️ Prioridades y Reglas
1. **Reutilización:** Si un elemento se repite más de dos veces, DEBE ser un componente.
2. **Responsividad:** El enfoque es Mobile-First (especialmente para la característica PWA).
3. **Control de Librerías:** No instalar dependencias externas (ej. Framer Motion, Lucide) sin previa consulta y aprobación.
4. **Data-Driven:** El contenido de los proyectos debe leerse siempre desde el JSON en `/config`.