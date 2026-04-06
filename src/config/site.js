/**
 * 📁 src/config/site.js
 * ─────────────────────────────────────────────
 * Configuración global del sitio.
 * Cambia aquí el teléfono, URL y nombre sin tocar otros archivos.
 */

const SITE_CONFIG = {
  /** Nombre del negocio */
  name: 'Préstamos en Hipoteca',

  /** Ciudades de cobertura */
  region: 'Pereira · Dosquebradas · Eje Cafetero',

  /** URL canónica del sitio */
  url: 'https://prestamoshipotecapereira.com/',

  /** Número de WhatsApp (formato internacional sin +) */
  whatsappNumber: '573019308389',

  /** Mensaje por defecto al abrir WhatsApp */
  whatsappMessage: 'Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20pr%C3%A9stamos%20hipotecarios.%20Vengo%20de%20la%20p%C3%A1gina%20web.',

  /** Tasa de interés mensual estándar (%) */
  tasaEstandar: 2,

  /** Tasa de interés para lotes / porcentajes (%) */
  tasaEspecial: 4,

  /** Monto máximo del préstamo (en millones COP) */
  montoMaximo: 100,

  /** Monto mínimo del préstamo (en millones COP) */
  montoMinimo: 10,

  /** Umbral sin comisión (en millones COP) */
  umbralSinComision: 50,

  /** Horario de atención */
  horario: 'Mo-Fr 08:00-18:00',
};

/**
 * Genera la URL completa de WhatsApp
 * @returns {string}
 */
function getWhatsAppURL() {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${SITE_CONFIG.whatsappMessage}`;
}
