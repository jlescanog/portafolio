/**
 * BotonFiltro — Botón reutilizable para el sistema de filtrado por categoría.
 * Componente de presentación. Recibe estado activo desde el padre.
 *
 * Props:
 *   - etiqueta: texto visible del botón
 *   - activo: boolean que indica si este filtro está seleccionado
 *   - icono: nombre del Material Symbol (opcional)
 *   - onClick: callback al hacer click
 */
export default function BotonFiltro({ etiqueta, activo, icono, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        px-5 py-2.5
        font-label text-xs font-bold uppercase tracking-widest
        border
        transition-all duration-200 ease-out
        active:scale-95
        rounded
        ${
          activo
            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
            : "bg-surface-container-lowest dark:bg-dark-surface text-secondary dark:text-secondary-fixed-dim border-outline-variant/30 dark:border-white/10 hover:text-on-surface dark:hover:text-surface hover:border-on-surface/30 dark:hover:border-white/30"
        }
      `}
    >
      {icono && (
        <span className={`material-symbols-outlined text-base ${activo ? "text-white" : "text-primary"}`}>
          {icono}
        </span>
      )}
      {etiqueta}
    </button>
  );
}
