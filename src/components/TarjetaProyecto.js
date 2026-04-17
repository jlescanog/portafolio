"use client";

import { useState } from "react";

/**
 * TarjetaProyecto — Tarjeta estilo dashboard de ingeniería.
 * Renderiza la data de cada proyecto desde proyectos.json.
 *
 * Props:
 *   - proyecto: objeto con la estructura definida en proyectos.json
 */
export default function TarjetaProyecto({ proyecto }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    titulo,
    categoria,
    descripcion,
    descripcionCorta,
    desafio,
    solucion,
    arquitectura,
    detalles_tecnicos,
    metricas,
    tecnologias,
    etiquetas,
    destacado,
    enlaceRepositorio,
  } = proyecto;

  // Mapeo de categoría a color del badge
  const coloresBadge = {
    "Data Engineering": "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-fixed-dim",
    "Web & PWAs": "bg-tertiary/10 text-tertiary dark:bg-tertiary/20 dark:text-tertiary-fixed-dim",
    "Infraestructura": "bg-on-surface/10 text-on-surface dark:bg-white/10 dark:text-surface",
  };

  const claseBadge = coloresBadge[categoria] || coloresBadge["Data Engineering"];

  return (
    <article
      className={`
        group relative
        bg-surface-container-lowest dark:bg-dark-surface
        border-t-[3px] border-t-primary
        border border-outline-variant/20 dark:border-white/5
        rounded-lg
        overflow-hidden
        transition-all duration-300 ease-out
        hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/5
        hover:-translate-y-1
        hover:border-outline-variant/40 dark:hover:border-primary/30
      `}
    >
      {/* Contenido principal */}
      <div className="p-6 md:p-8 flex flex-col h-full">
        {/* Header: Badge + Protocolo */}
        <div className="flex items-center justify-between mb-5">
          <span
            className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded ${claseBadge}`}
          >
            {categoria}
          </span>
          {destacado && (
            <span className="material-symbols-outlined text-primary/40 text-sm">
              star
            </span>
          )}
        </div>

        {/* Título */}
        <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface dark:text-surface tracking-tight mb-3 group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors duration-300">
          {titulo}
        </h3>

        {/* Descripción corta */}
        <p className="font-body text-sm text-secondary dark:text-secondary-fixed-dim leading-relaxed mb-6 flex-grow">
          {descripcionCorta}
        </p>

        {/* Sección de Métricas */}
        {metricas && metricas.metricaPrincipal && (
          <div className="bg-surface-container dark:bg-dark-surface-high rounded p-4 mb-5 border border-outline-variant/10 dark:border-white/5">
            <span className="block font-label text-[10px] uppercase tracking-widest text-secondary dark:text-secondary-fixed-dim mb-2">
              Métrica Clave
            </span>
            <div className="flex items-baseline gap-2">
              {metricas.valor !== null && (
                <span className="font-label text-3xl font-bold text-primary dark:text-primary-fixed-dim leading-none">
                  {metricas.valor}
                  <span className="text-lg">{metricas.unidad}</span>
                </span>
              )}
              <span className="font-label text-xs text-on-surface dark:text-surface uppercase tracking-wider">
                {metricas.valor !== null ? metricas.etiqueta : metricas.metricaPrincipal}
              </span>
            </div>
          </div>
        )}

        {/* Tecnologías (Badges) */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 mb-4">
          {tecnologias.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-surface-container dark:bg-dark-surface-high text-[10px] font-label font-medium text-secondary dark:text-secondary-fixed-dim uppercase tracking-wider border border-outline-variant/15 dark:border-white/5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón Expansible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 border border-outline-variant/30 hover:bg-surface-container dark:border-white/10 dark:hover:bg-dark-surface-high rounded transition-colors text-xs font-label uppercase tracking-widest text-secondary dark:text-secondary-fixed-dim"
        >
          {isExpanded ? "Ocultar Detalles" : "Ver Caso de Estudio"}
          <span className="material-symbols-outlined text-sm">
            {isExpanded ? "expand_less" : "expand_more"}
          </span>
        </button>

        {/* Contenedor Expandible (Caso de Estudio) */}
        <div 
          className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-outline-variant/20 dark:border-white/10 pt-6 space-y-6">
              {/* Descripción larga */}
              {descripcion && (
                <div>
                  <h4 className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">Visión General</h4>
                  <p className="font-body text-sm text-secondary dark:text-secondary-fixed-dim leading-relaxed">
                    {descripcion}
                  </p>
                </div>
              )}
              
              {/* Desafío y Solución */}
              {(desafio || solucion) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {desafio && (
                    <div className="bg-error/5 border border-error/10 p-4 rounded">
                      <h4 className="font-label text-[10px] uppercase tracking-widest text-error mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">warning</span> Desafío
                      </h4>
                      <p className="font-body text-xs text-secondary dark:text-secondary-fixed-dim leading-relaxed">
                        {desafio}
                      </p>
                    </div>
                  )}
                  {solucion && (
                    <div className="bg-success/5 border border-success/10 p-4 rounded">
                      <h4 className="font-label text-[10px] uppercase tracking-widest text-success mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Solución
                      </h4>
                      <p className="font-body text-xs text-secondary dark:text-secondary-fixed-dim leading-relaxed">
                        {solucion}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Arquitectura y Detalles Técnicos */}
              {(arquitectura || detalles_tecnicos) && (
                <div>
                  <h4 className="font-label text-[10px] uppercase tracking-widest text-primary mb-3">Implementación</h4>
                  <ul className="space-y-3 font-body text-xs text-secondary dark:text-secondary-fixed-dim leading-relaxed">
                    {arquitectura && (
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">architecture</span>
                        <span><strong className="text-on-surface dark:text-surface font-label text-[11px] tracking-wider uppercase">Arquitectura:</strong><br />{arquitectura}</span>
                      </li>
                    )}
                    {detalles_tecnicos && (
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">code_blocks</span>
                        <span><strong className="text-on-surface dark:text-surface font-label text-[11px] tracking-wider uppercase">Detalles Clínicos:</strong><br />{detalles_tecnicos}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Enlace al Repositorio */}
              {enlaceRepositorio && enlaceRepositorio !== "#" && (
                <div className="pt-2">
                  <a
                    href={enlaceRepositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-widest text-primary hover:text-primary-fixed-dim border border-primary/20 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">terminal</span>
                    Ver Código Fuente
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Línea de acento inferior (visible en hover) */}
      <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
    </article>
  );
}
