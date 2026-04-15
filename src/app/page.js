"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TarjetaProyecto from "@/components/TarjetaProyecto";
import BotonFiltro from "@/components/BotonFiltro";
import datosPortafolio from "@/config/proyectos.json";

/**
 * Página Principal — Hub del Portafolio HomeTech.
 * Componente cliente por el filtrado dinámico de proyectos.
 */

// Configuración de filtros con iconos
const FILTROS = [
  { clave: "Todos", etiqueta: "Todos", icono: "apps" },
  { clave: "Data Engineering", etiqueta: "Data", icono: "database" },
  { clave: "Web & PWAs", etiqueta: "Web & PWAs", icono: "devices" },
  { clave: "Infraestructura", etiqueta: "Infra", icono: "hub" },
];

export default function PaginaPrincipal() {
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  // Filtrar proyectos según la categoría seleccionada
  const proyectosFiltrados =
    filtroActivo === "Todos"
      ? datosPortafolio.proyectos
      : datosPortafolio.proyectos.filter(
        (proyecto) => proyecto.categoria === filtroActivo
      );

  return (
    <>
      <Navbar />

      <main className="pt-20 md:pt-24">
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="px-6 md:px-8 py-16 md:py-28 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Contenido textual */}
            <div className="md:col-span-7 lg:col-span-8 order-2 md:order-1">
              <p className="font-label text-primary font-bold tracking-widest mb-4 uppercase text-xs md:text-sm">
                Arquitecto de Sistemas // Full-Stack Developer
              </p>

              <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-on-surface dark:text-surface mb-6 md:mb-8">
                Ingeniería de Software para{" "}
                <span className="text-primary">Negocios</span>
              </h2>

              <p className="font-body text-lg md:text-xl lg:text-2xl text-secondary dark:text-secondary-fixed-dim max-w-2xl leading-relaxed">
                Soluciones Integrales desde el Dato hasta la Experiencia del
                Usuario, con rigor técnico y enfoque de negocio.
              </p>

              {/* Botones de acción */}
              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href="#proyectos"
                  className="bg-on-surface dark:bg-surface text-surface dark:text-on-surface px-6 md:px-8 py-3 md:py-4 font-label font-bold text-xs md:text-sm tracking-widest hover:bg-primary dark:hover:bg-primary hover:text-white transition-colors duration-200 text-center"
                >
                  EXPLORAR SOLUCIONES
                </a>
                <a
                  href="https://github.com/jlescanog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2 border-on-surface dark:border-surface px-4 py-3 md:py-4 font-label font-bold text-xs md:text-sm tracking-widest text-on-surface dark:text-surface hover:text-primary hover:border-primary dark:hover:text-primary-fixed-dim dark:hover:border-primary-fixed-dim transition-all duration-200 text-center"
                >
                  VER REPOSITORIO
                </a>
              </div>
            </div>

            {/* Foto de perfil */}
            <div className="md:col-span-5 lg:col-span-4 order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative group w-full max-w-xs md:max-w-none">
                {/* Marco decorativo */}
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border-2 border-primary/20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

                {/* Imagen de perfil */}
                <div className="relative z-10 aspect-[4/5] overflow-hidden bg-surface-container dark:bg-dark-surface">
                  <Image
                    alt="Jhair Lescano — Software Engineer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="/perfil.webp"
                    width={500}
                    height={625}
                    priority
                  />
                </div>

                {/* Badge flotante */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 bg-primary text-white p-3 md:p-4 font-label text-[10px] tracking-tighter leading-none">
                  ST_ID: 9942-JL
                  <br />
                  ACTIVE_STATUS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SPECIALTY CARDS (Categorías) */}
        {/* ============================================ */}
        <section className="bg-surface-container dark:bg-dark-surface py-16 md:py-24 transition-colors duration-300">
          <div className="px-6 md:px-8 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px md:gap-1">
              {datosPortafolio.categorias.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-surface-container-lowest dark:bg-dark-bg p-8 md:p-10 border-l-4 border-primary group hover:bg-primary transition-colors duration-500 cursor-pointer"
                  onClick={() => {
                    setFiltroActivo(cat.nombre);
                    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-6 md:mb-8 block group-hover:text-white transition-colors">
                    {cat.icono}
                  </span>
                  <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 md:mb-4 text-on-surface dark:text-surface group-hover:text-white transition-colors">
                    {cat.nombre}
                  </h3>
                  <p className="font-body text-sm md:text-base text-secondary dark:text-secondary-fixed-dim mb-6 md:mb-8 group-hover:text-white/80 transition-colors">
                    {cat.descripcion}
                  </p>
                  <div className="font-label text-[10px] md:text-xs text-primary font-bold group-hover:text-white/60 transition-colors">
                    {cat.protocolo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROYECTOS — Filtrado + Grid de Tarjetas */}
        {/* ============================================ */}
        <section
          id="proyectos"
          className="px-6 md:px-8 py-16 md:py-24 max-w-screen-2xl mx-auto"
        >
          {/* Header de sección */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 md:w-12 h-[2px] bg-primary" />
                <h2 className="font-headline text-2xl md:text-3xl font-black tracking-tight uppercase text-on-surface dark:text-surface">
                  CASOS DE ESTUDIO TÉCNICO
                </h2>
              </div>
              <p className="font-body text-sm text-secondary dark:text-secondary-fixed-dim ml-14 md:ml-16">
                Proyectos seleccionados{" "}
                <span className="font-label text-xs tracking-widest">
                  {datosPortafolio.meta.periodoGeneral}
                </span>
              </p>
            </div>

            {/* Sistema de filtrado */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {FILTROS.map((filtro) => (
                <BotonFiltro
                  key={filtro.clave}
                  etiqueta={filtro.etiqueta}
                  icono={filtro.icono}
                  activo={filtroActivo === filtro.clave}
                  onClick={() => setFiltroActivo(filtro.clave)}
                />
              ))}
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mb-8 flex items-center gap-3">
            <span className="font-label text-[10px] md:text-xs uppercase tracking-widest text-secondary dark:text-secondary-fixed-dim">
              Mostrando {proyectosFiltrados.length} de{" "}
              {datosPortafolio.proyectos.length} proyectos
            </span>
            <div className="flex-1 h-px bg-outline-variant/20 dark:bg-white/5" />
          </div>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {proyectosFiltrados.map((proyecto) => (
              <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>

          {/* Indicador vacío (si no hay resultados) */}
          {proyectosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-outline-variant/30 mb-4 block">
                search_off
              </span>
              <p className="font-label text-sm text-secondary dark:text-secondary-fixed-dim uppercase tracking-widest">
                No se encontraron proyectos en esta categoría
              </p>
            </div>
          )}
        </section>

        {/* ============================================ */}
        {/* BANNER DE IMPACTO */}
        {/* ============================================ */}
        <section className="relative overflow-hidden bg-on-surface dark:bg-inverse-surface">
          <div className="px-6 md:px-8 py-16 md:py-24 max-w-screen-2xl mx-auto text-center relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-white font-black tracking-tighter mb-4">
              INGENIERÍA SIN CONCESIONES
            </h2>
            <p className="font-label text-white/70 tracking-widest text-xs md:text-sm uppercase">
              Código Optimizado. Arquitectura Escalable. Impacto de Negocio.
            </p>
          </div>
          {/* Acento decorativo */}
          <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
        </section>

        {/* ============================================ */}
        {/* FOOTER */}
        {/* ============================================ */}
        <footer
          id="contacto"
          className="bg-surface-container dark:bg-dark-bg w-full py-10 md:py-12 px-6 md:px-8 border-t border-outline-variant/10 dark:border-white/5 transition-colors duration-300"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
            {/* Logo o Marca */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-label font-bold text-on-surface dark:text-surface text-lg tracking-widest uppercase">
                JHAIR LESCANO
              </span>
              <p className="font-label text-[10px] uppercase text-secondary dark:text-secondary-fixed-dim tracking-wider">
                © {new Date().getFullYear()} // ENGINEERED FOR IMPACT
              </p>
            </div>

            {/* Enlaces y Acción Principal */}
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
              <div className="flex gap-6">
                <a
                  href="https://github.com/jlescanog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label text-xs tracking-wider uppercase text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/jhair-lescano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label text-xs tracking-wider uppercase text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200"
                >
                  LINKEDIN
                </a>
              </div>

              <a
                href={`https://wa.me/51933243356?text=${encodeURIComponent("Hola Jhair, me gustaría agendar una consultoría de software.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-on-surface dark:bg-surface text-surface dark:text-on-surface px-6 py-3 font-label font-bold text-xs tracking-widest hover:bg-primary dark:hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-base">calendar_month</span>
                AGENDAR CONSULTORÍA
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
