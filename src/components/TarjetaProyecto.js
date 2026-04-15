/**
 * TarjetaProyecto — Tarjeta estilo dashboard de ingeniería.
 * Componente de servidor (sin 'use client').
 * Renderiza la data de cada proyecto desde proyectos.json.
 *
 * Props:
 *   - proyecto: objeto con la estructura definida en proyectos.json
 */
export default function TarjetaProyecto({ proyecto }) {
  const {
    titulo,
    categoria,
    descripcionCorta,
    metricas,
    tecnologias,
    etiquetas,
    destacado,
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
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tecnologias.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-surface-container dark:bg-dark-surface-high text-[10px] font-label font-medium text-secondary dark:text-secondary-fixed-dim uppercase tracking-wider border border-outline-variant/15 dark:border-white/5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Línea de acento inferior (visible en hover) */}
      <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
    </article>
  );
}
