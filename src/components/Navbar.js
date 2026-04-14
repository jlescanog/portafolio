"use client";

import { useState, useEffect } from "react";

/**
 * Navbar — Barra de navegación fija con glassmorphism.
 * Incluye logo HomeTech, nombre y toggle de tema (Light/Dark).
 * Componente cliente por la interactividad del toggle.
 */
export default function Navbar() {
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Sincronizar estado inicial con el DOM (evitar hydration mismatch)
  useEffect(() => {
    const estaOscuro = document.documentElement.classList.contains("dark");
    setTemaOscuro(estaOscuro);
  }, []);

  // Alternar entre Light y Dark mode
  const alternarTema = () => {
    const nuevoTema = !temaOscuro;
    setTemaOscuro(nuevoTema);

    if (nuevoTema) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema", "light");
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm shadow-surface-container/50 dark:shadow-none border-b border-outline-variant/10 dark:border-white/5 transition-colors duration-300">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 w-full max-w-screen-2xl mx-auto">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Ícono de terminal como logo HomeTech */}
          <div className="w-9 h-9 md:w-10 md:h-10 bg-primary flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-white text-xl md:text-2xl">
              terminal
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-label font-bold text-base md:text-lg tracking-widest text-on-surface dark:text-surface uppercase leading-tight">
              JHAIR LESCANO
            </h1>
            <span className="font-label text-[9px] md:text-[10px] tracking-widest text-secondary dark:text-secondary-fixed-dim uppercase">
              HomeTech Engineering
            </span>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          <a
            href="#proyectos"
            className="font-headline tracking-tight uppercase font-bold text-sm text-primary border-b-2 border-primary pb-1"
          >
            ENGINEERING
          </a>
          <a
            href="#stack"
            className="font-headline tracking-tight uppercase font-bold text-sm text-secondary dark:text-secondary-fixed-dim pb-1 hover:text-on-surface dark:hover:text-surface transition-colors duration-200"
          >
            STACK
          </a>
          <a
            href="#contacto"
            className="font-headline tracking-tight uppercase font-bold text-sm text-secondary dark:text-secondary-fixed-dim pb-1 hover:text-on-surface dark:hover:text-surface transition-colors duration-200"
          >
            CONTACT
          </a>

          {/* Toggle de tema (Desktop) */}
          <button
            onClick={alternarTema}
            className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 dark:border-white/10 hover:bg-surface-container dark:hover:bg-dark-surface-high transition-all duration-200 active:scale-95"
            aria-label={temaOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            title={temaOscuro ? "Modo Claro" : "Modo Oscuro"}
          >
            <span className="material-symbols-outlined text-on-surface dark:text-surface text-xl">
              {temaOscuro ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </nav>

        {/* Controles Mobile */}
        <div className="flex md:hidden items-center gap-2">
          {/* Toggle de tema (Mobile) */}
          <button
            onClick={alternarTema}
            className="w-9 h-9 flex items-center justify-center border border-outline-variant/30 dark:border-white/10 hover:bg-surface-container dark:hover:bg-dark-surface-high transition-all duration-200 active:scale-95"
            aria-label={temaOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <span className="material-symbols-outlined text-on-surface dark:text-surface text-lg">
              {temaOscuro ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Botón de menú hamburguesa */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="w-9 h-9 flex items-center justify-center border border-outline-variant/30 dark:border-white/10 hover:bg-surface-container dark:hover:bg-dark-surface-high transition-all duration-200 active:scale-95"
            aria-label="Menú de navegación"
          >
            <span className="material-symbols-outlined text-on-surface dark:text-surface text-lg">
              {menuAbierto ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menú Mobile Expandido */}
      {menuAbierto && (
        <div className="md:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-lg border-t border-outline-variant/10 dark:border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-1">
            <a
              href="#proyectos"
              onClick={() => setMenuAbierto(false)}
              className="font-headline tracking-tight uppercase font-bold text-sm text-primary py-3 border-b border-outline-variant/10 dark:border-white/5"
            >
              ENGINEERING
            </a>
            <a
              href="#stack"
              onClick={() => setMenuAbierto(false)}
              className="font-headline tracking-tight uppercase font-bold text-sm text-secondary dark:text-secondary-fixed-dim py-3 border-b border-outline-variant/10 dark:border-white/5 hover:text-on-surface dark:hover:text-surface transition-colors"
            >
              STACK
            </a>
            <a
              href="#contacto"
              onClick={() => setMenuAbierto(false)}
              className="font-headline tracking-tight uppercase font-bold text-sm text-secondary dark:text-secondary-fixed-dim py-3 hover:text-on-surface dark:hover:text-surface transition-colors"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
