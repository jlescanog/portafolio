'use client';

import { useEffect } from 'react';

/**
 * PWARegistration — Componente para el registro del Service Worker.
 * Solo se ejecuta en el cliente y habilita la funcionalidad PWA.
 */
/**
 * PWARegistration — Componente para el registro del Service Worker.
 * Optimizado para no interferir con la carga inicial (LCP/FCP).
 */
const PWARegistration = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const registerSW = () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(() => {
            // Registro silencioso y exitoso
          })
          .catch((error) => {
            if (process.env.NODE_ENV === 'development') {
              console.error('Error al registrar SW:', error);
            }
          });
      };

      // Esperar a que la ventana cargue completamente para no bloquear el hilo principal
      if (document.readyState === 'complete') {
        registerSW();
      } else {
        window.addEventListener('load', registerSW);
        return () => window.removeEventListener('load', registerSW);
      }
    }
  }, []);

  return null;
};

export default PWARegistration;
