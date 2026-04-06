# Préstamos en Hipoteca — Landing Page

Landing page para préstamos hipotecarios en Pereira y Dosquebradas, Eje Cafetero, Colombia.

## 🗂 Estructura de carpetas

```
landing/
├── index.html                  ← Punto de entrada principal
│
├── public/                     ← Archivos estáticos públicos
│   ├── favicon.svg             ← Ícono SVG (navegadores modernos)
│   ├── favicon.ico             ← Ícono ICO (fallback legacy)
│   ├── favicon-32x32.png       ← Ícono PNG 32×32
│   └── robots.txt              ← Directivas para crawlers SEO
│
├── images/                     ← Imágenes de contenido
│   └── clientes/               ← Fotos de testimonios
│       ├── carlos-henao.PNG    ← (agrega tu imagen aquí)
│       ├── marcela-rios.PNG    ← (agrega tu imagen aquí)
│       └── yuliana-ospina.PNG  ← (agrega tu imagen aquí)
│
├── src/
│   ├── styles/
│   │   └── main.css            ← Todos los estilos CSS
│   │
│   ├── utils/
│   │   └── main.js             ← Toda la lógica JavaScript
│   │
│   ├── data/
│   │   └── content.js          ← Textos, FAQ, testimonios, requisitos
│   │
│   ├── config/
│   │   └── site.js             ← Configuración: teléfono, URL, tasas
│   │
│   ├── components/
│   │   ├── sections/           ← Futuras secciones componentizadas
│   │   └── ui/                 ← Futuras UI components
│   │
│   ├── assets/
│   │   ├── images/             ← Imágenes de uso general
│   │   └── icons/              ← Íconos SVG
│   │
│   ├── layouts/                ← Layouts reutilizables (multi-página)
│   ├── pages/                  ← Páginas adicionales (términos, etc.)
│   ├── services/               ← Integración con APIs externas
│   ├── hooks/                  ← Hooks JS reutilizables
│   └── types/                  ← Definiciones de tipos (JSDoc)
│
├── tests/                      ← Pruebas automatizadas
├── docs/                       ← Documentación del proyecto
├── scripts/                    ← Scripts de automatización
│
├── .env.example                ← Variables de entorno (plantilla)
├── .env.local                  ← Variables de entorno (NO subir a Git)
├── .gitignore                  ← Archivos ignorados por Git
├── package.json                ← Metadatos y scripts npm
└── vite.config.js              ← Config Vite (reservado para migración futura)
```

## 🚀 Inicio rápido

### Ver la landing localmente (sin instalar nada)
Abre `index.html` directamente en tu navegador.

### Con servidor local (recomendado para evitar CORS)
```bash
npx serve . -p 3000
# Abre: http://localhost:3000
```

### Con live-reload en desarrollo
```bash
npx live-server --port=3000 --open=index.html
```

## 📸 Agregar imágenes de clientes

Copia tus fotos a la carpeta `/images/clientes/` con exactamente estos nombres:
- `carlos-henao.PNG`
- `marcela-rios.PNG`
- `yuliana-ospina.PNG`

## ✏️ Editar contenido sin tocar código

Todos los textos están en `src/data/content.js`:
- `VENTAJAS` — Tarjetas de ventajas
- `USOS_PRESTAMO` — Lista de usos del préstamo
- `REQUISITOS` — Lista de documentos requeridos
- `TESTIMONIOS` — Testimonios de clientes
- `FAQ_ITEMS` — Preguntas frecuentes
- `MARQUEE_ITEMS` — Banda animada de beneficios

## ⚙️ Cambiar número de WhatsApp o tasas

Edita `src/config/site.js` — un solo lugar para toda la configuración global.

## 🌐 Deploy en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub
2. Ve a **Settings → Pages**
3. Selecciona rama `main` y carpeta `/root`
4. Tu landing estará en `https://tuusuario.github.io/nombre-repo`

## 🔧 Tecnologías

- HTML5 semántico
- CSS3 con variables y animaciones nativas
- JavaScript ES5+ Vanilla (sin frameworks)
- Google Fonts (Playfair Display + DM Sans)
- Schema.org para SEO estructurado
