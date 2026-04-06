/**
 * 📁 src/data/content.js
 * ─────────────────────────────────────────────
 * Todos los textos, listas y datos de contenido de la landing.
 * Edita aquí sin tocar el HTML ni el CSS.
 */

/* ─── VENTAJAS ───────────────────────────────── */
const VENTAJAS = [
  {
    icon: '⚡',
    title: 'Aprobación Rápida',
    body: 'Revisamos tu documentación en pocas horas. Sin filas, sin trámites interminables. Respuesta ágil y directa.',
  },
  {
    icon: '🙅',
    title: 'Sin Codeudor',
    body: 'Tu inmueble es tu única garantía. No necesitas involucrar a familiares ni comprometer a terceros.',
  },
  {
    icon: '💎',
    title: 'Tasas Competitivas',
    body: 'Tasa fija del 2% mensual. Sin sorpresas ni variaciones. Sabes exactamente cuánto pagarás desde el día uno.',
  },
  {
    icon: '🤝',
    title: 'Atención Personalizada',
    body: 'Acompañamiento personalizado en todo el proceso.',
  },
  {
    icon: '🏦',
    title: 'Desembolso Inmediato',
    body: 'Una vez firmados los documentos, el dinero llega a tu cuenta en máximo un día hábil. Dinero real, rápido.',
  },
  {
    icon: '✅',
    title: 'Aplica con Historial Negativo',
    body: 'Estar reportado en centrales de riesgo no es impedimento. Lo que importa es tu inmueble, no tu historial.',
  },
];

/* ─── USOS DEL PRÉSTAMO ──────────────────────── */
const USOS_PRESTAMO = [
  'Compra de carro o moto',
  'Especializaciones y estudios',
  'Viajes a otros países',
  'Mejoras del inmueble',
  'Consolidación de deudas',
  'Tratamientos médicos',
];

/* ─── REQUISITOS ─────────────────────────────── */
const REQUISITOS = [
  'Visitar el inmueble a hipotecar',
  'Certificado de tradición del apartamento o casa',
  'Certificado de tradición del parqueadero',
  'Escritura auténtica del apartamento o casa',
  'Escritura auténtica del parqueadero',
  'Paz y salvo de predial',
  'Paz y salvo de valorización',
  'Paz y salvo de administración (si aplica)',
  'Fotocopia de cédula al 150% del propietario',
];

/* ─── TESTIMONIOS ────────────────────────────── */
const TESTIMONIOS = [
  {
    nombre: 'Carlos Henao',
    ciudad: 'Dosquebradas, Risaralda',
    foto: 'images/clientes/carlos-henao.PNG',
    quote: 'Estamos profundamente agradecidos por la paciencia y el acompañamiento durante todo el proceso. Teníamos una hipoteca de hace más de 20 años con el banco que financió la propiedad, y ni siquiera sabíamos con qué entidad estaba registrada. El equipo se encargó de todo: coordinaron con abogados y notarías en Pereira y en Bogotá. El proceso tomó aproximadamente 2 meses, fue económico y no lo habríamos logrado sin su ayuda.',
  },
  {
    nombre: 'Marcela Ríos',
    ciudad: 'Pereira, Risaralda',
    foto: 'images/clientes/marcela-rios.PNG',
    quote: 'Solicité un préstamo hipotecario para comprar un vehículo en Bogotá. Durante el proceso embargaron mi cuenta por una deuda de predial. Gracias a su respaldo, gestionaron con el banco y levantaron el embargo sin que yo tuviera que regresar a Dosquebradas. Pude completar la compra sin inconvenientes. Son muy profesionales y tienen un conocimiento profundo de todo el proceso.',
  },
  {
    nombre: 'Yuliana Ospina',
    ciudad: 'Pereira, Eje Cafetero',
    foto: 'images/clientes/yuliana-ospina.PNG',
    quote: 'Mi propiedad del barrio El Jardín estaba hipotecada al 50% y el otro 50% era de mis hijos menores, lo que hacía el proceso legal muy complejo. Con su ayuda negociaron la venta, gestionaron el cambio por una propiedad de menor valor y coordinaron con notarías, abogados y Bienestar Familiar. Gracias a su acompañamiento pude salir adelante en una situación muy difícil.',
  },
];

/* ─── FAQ ────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: '¿Qué es un préstamo con garantía hipotecaria?',
    a: 'Es un crédito en el que usas tu inmueble (apartamento, casa o local) como respaldo. El inmueble queda como garantía mientras pagas el préstamo, pero tú sigues viviendo o usando la propiedad con total normalidad.',
  },
  {
    q: '¿Cuánto tiempo tarda la aprobación?',
    a: 'Una vez recibimos tus documentos completos, la aprobación puede darse en pocas horas. El desembolso del dinero se realiza de forma inmediata después de firmar.',
  },
  {
    q: '¿Necesito codeudor para solicitar el préstamo?',
    a: 'No. Tu inmueble es suficiente garantía. No necesitas comprometer a ningún familiar ni tercero para acceder al crédito.',
  },
  {
    q: '¿Puedo solicitar el préstamo si estoy en Datacrédito?',
    a: 'Sí. Evaluamos tu solicitud sin importar tu historial crediticio. Lo que nos importa es el valor y la documentación de tu inmueble, no tu reporte en centrales de riesgo.',
  },
  {
    q: '¿Cuál es la tasa de interés mensual?',
    a: 'Manejamos una tasa fija del 2% mensual sobre el capital prestado. Pagas únicamente intereses cada mes y el capital lo devuelves al vencimiento del plazo acordado.',
  },
  {
    q: '¿Cómo funciona la promo sin comisión?',
    a: 'Para préstamos menores a $50 millones de pesos, no cobramos ningún valor de comisión. Solo pagas los intereses del 2% mensual sobre el monto solicitado. ¡Sin cobros ocultos ni sorpresas!',
  },
  {
    q: '¿Qué pasa si no puedo pagar una cuota?',
    a: 'Lo más importante es que nos contactes antes de que se venza el plazo. Estudiamos tu caso y buscamos la mejor solución. La comunicación oportuna es clave para evitar inconvenientes.',
  },
  {
    q: '¿Qué inmuebles aceptan como garantía?',
    a: 'Aceptamos apartamentos y casas ubicados en Pereira y Dosquebradas. El inmueble debe estar libre de embargos, al día en predial y con escritura pública registrada.',
  },
  {
    q: '¿En qué ciudades operan?',
    a: 'Actualmente atendemos en Pereira y Dosquebradas, en el Eje Cafetero colombiano. Si tienes un inmueble en estas ciudades, ¡podemos ayudarte!',
  },
  {
    q: '¿Se otorgan préstamos sobre lotes?',
    a: 'Sí, se pueden otorgar préstamos sobre lotes. Sin embargo, aplican condiciones específicas: la tasa de interés es del 4% y el lote debe estar ubicado sobre vía principal o con acceso directo a carretera.',
  },
  {
    q: '¿Se puede obtener un préstamo hipotecando un porcentaje de una propiedad?',
    a: 'Sí, es posible. Se pueden otorgar préstamos sobre un porcentaje de la propiedad con una tasa de interés del 4%, siempre que el porcentaje a hipotecar sea igual o superior al 50%.',
  },
];

/* ─── MARQUEE ITEMS ──────────────────────────── */
const MARQUEE_ITEMS = [
  'Sin codeudor requerido',
  'Aprobación en horas',
  'Aplica con Datacrédito negativo',
  'Tasa fija 2% mensual',
  'Préstamos hasta $100 millones',
  'Desembolso Inmediato',
  'Pereira y Dosquebradas',
  'Sin comisión préstamos <$50M 🎉',
];

/* ─── STATS HERO ─────────────────────────────── */
const HERO_STATS = [
  { num: 'Inmediato', label: 'Desembolso', isText: true },
  { num: 100, prefix: '$', suffix: 'M+', label: 'Hasta $100M' },
  { num: 5, suffix: ' años', label: 'Plazo máximo' },
  { num: 2, suffix: '%', label: 'Desde 2% mensual' },
];
