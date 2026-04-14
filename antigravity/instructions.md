# Instructions: Migración de Portafolio HTML a Next.js

## 🎯 Objetivo del Proyecto
Convertir el prototipo estático (archivos index.html, index_data.html, index_web.html, index_support.html) en una aplicación web dinámica y escalable usando **Next.js (App Router)** y **Tailwind CSS**. El portafolio debe proyectar una imagen de "Ingeniería de Software para Negocios" bajo la marca personal **HomeTech**.

## 🚀 Tareas Iniciales
1. **Análisis de Prototipos:** Analizar los archivos `.html` proporcionados para extraer la estructura, los textos y la jerarquía de información.
2. **Configuración de Tailwind:** Configurar `tailwind.config.js` con la paleta de colores definida en `guidelines.md`.
3. **Creación del Layout Base:** Implementar el `layout.js` con un banner negro superior (Logo HomeTech + Foto de Jhair) y un sistema de Toggle para Light/Dark mode.
4. **Implementación del Data Hub:** - Crear un archivo `proyectos.json` con la data de los proyectos actuales (Dome Scoop, OCI, etc.).
   - Crear la lógica de filtrado en la página principal para alternar entre las categorías: Data Engineering, Web & PWAs, e Infraestructura.
5. **Componente de Tarjeta (Inspiración Dashboard):** Replicar el estilo visual de la referencia (tarjetas técnicas con métricas y badges) usando solo Tailwind.

## 💡 Nota de Autor
Este proyecto es el portafolio de un Ingeniero Híbrido. El diseño debe ser impecable, rápido y reflejar autoridad técnica. No es solo una página web, es una herramienta de ventas de servicios de ingeniería.