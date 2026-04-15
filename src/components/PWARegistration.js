'use client';

import { useEffect } from 'react';

/**
 * PWARegistration — Componente para el registro del Service Worker.
 * Solo se ejecuta en el cliente y habilita la funcionalidad PWA.
 */
const PWARegistration = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
      // Registrar el SW solo en producción/entornos reales para evitar problemas de desarrollo
      // Opcional: habilitar en localhost si se requiere pruebas locales estrictas de PWA
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          // Registro exitoso
        })
        .catch((error) => {
          console.error('Fallo en el registro del Service Worker:', error);
        });
    } else if ('serviceWorker' in navigator && window.location.hostname === 'localhost') {
        // Habilitamos también en localhost para que el usuario pueda validar
        navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return null;
};

export default PWARegistration;
