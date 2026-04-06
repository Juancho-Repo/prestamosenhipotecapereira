/**
 * 📁 src/utils/main.js
 * ─────────────────────────────────────────────
 * Toda la lógica JavaScript de la landing page.
 * Importado desde: index.html (raíz del proyecto)
 *
 * Módulos internos:
 *   1. Seguridad: sanitización de inputs + rate limiting
 *   2. Cursor personalizado
 *   3. Navegación hamburger (mobile)
 *   4. Efecto typewriter en el hero
 *   5. Partículas flotantes (hero)
 *   6. Contador animado de estadísticas
 *   7. Spotlight en cards de ventajas (mouse tracking)
 *   8. Calculadora de cuota mensual
 *   9. FAQ accordion
 *  10. Popup de WhatsApp
 *  11. Año dinámico en el footer
 *  12. Animaciones de scroll (IntersectionObserver)
 *
 * Dependencias externas: ninguna (Vanilla JS puro)
 */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     1. SEGURIDAD
     ══════════════════════════════════════════ */

  /**
   * Escapa caracteres peligrosos para evitar XSS
   * en cualquier texto que se inyecte al DOM.
   * @param {string} str
   * @returns {string}
   */
  function sanitizeText(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/[<>"'&]/g, function (c) {
        return { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' }[c];
      })
      .slice(0, 500);
  }

  /**
   * Rate limiting del lado del cliente (complementario al servidor).
   * Máximo 10 interacciones por minuto.
   */
  var _rl = { count: 0, reset: Date.now() + 60000 };
  function checkRateLimit() {
    if (Date.now() > _rl.reset) {
      _rl.count = 0;
      _rl.reset = Date.now() + 60000;
    }
    _rl.count++;
    return _rl.count <= 10;
  }

  /* ══════════════════════════════════════════
     2. CURSOR PERSONALIZADO
     Solo activo en dispositivos con hover (escritorio).
     ══════════════════════════════════════════ */
  var cursor = document.getElementById('cursor');
  var ring   = document.getElementById('cursorRing');

  if (cursor && ring && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', function (e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      ring.style.left   = e.clientX + 'px';
      ring.style.top    = e.clientY + 'px';
    });
    document.addEventListener('mousedown', function () {
      cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
    });
    document.addEventListener('mouseup', function () {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  }

  /* ══════════════════════════════════════════
     3. HAMBURGER (MOBILE NAV)
     Abre y cierra el menú de navegación en móvil.
     ══════════════════════════════════════════ */
  var ham      = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  if (ham && navLinks) {
    ham.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
    });
    // Cerrar al hacer click en cualquier enlace
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ══════════════════════════════════════════
     4. TYPEWRITER — HERO HEADLINE
     Cicla palabras con efecto de escritura/borrado.
     ══════════════════════════════════════════ */
  var twEl     = document.getElementById('tw');
  var words    = ['el dinero que necesitas', 'liquidez inmediata', 'tu préstamo hoy'];
  var wi       = 0;   // índice de palabra actual
  var ci       = 0;   // índice de carácter actual
  var deleting = false;

  function typeLoop() {
    var word = words[wi];
    if (!deleting) {
      // Escribir letra por letra
      twEl.textContent = word.slice(0, ++ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(typeLoop, 1800); // pausa antes de borrar
        return;
      }
      setTimeout(typeLoop, 70);
    } else {
      // Borrar letra por letra
      twEl.textContent = word.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        setTimeout(typeLoop, 300); // pausa antes de escribir siguiente
        return;
      }
      setTimeout(typeLoop, 40);
    }
  }

  if (twEl) setTimeout(typeLoop, 600);

  /* ══════════════════════════════════════════
     5. PARTÍCULAS FLOTANTES — HERO
     Genera partículas doradas/teal que suben por el fondo.
     ══════════════════════════════════════════ */
  var particlesContainer = document.getElementById('particles');

  if (particlesContainer) {
    var colors = [
      'rgba(201,168,76,0.6)',
      'rgba(29,158,117,0.5)',
      'rgba(228,201,126,0.4)',
    ];

    for (var i = 0; i < 18; i++) {
      (function () {
        var p    = document.createElement('div');
        p.className = 'particle';
        var size = Math.random() * 5 + 2;

        p.style.cssText = [
          'width:'              + size + 'px',
          'height:'             + size + 'px',
          'left:'               + (Math.random() * 100) + '%',
          'background:'         + colors[Math.floor(Math.random() * 3)],
          '--dx:'               + (Math.random() * 80 - 40) + 'px',
          'animation-duration:' + (Math.random() * 12 + 8) + 's',
          'animation-delay:'    + (Math.random() * 12) + 's',
        ].join(';');

        particlesContainer.appendChild(p);
      })();
    }
  }

  /* ══════════════════════════════════════════
     6. CONTADOR ANIMADO — ESTADÍSTICAS HERO
     Anima los números desde 0 al valor objetivo
     cuando el bloque entra al viewport.
     ══════════════════════════════════════════ */

  /**
   * Anima un elemento de número del 0 al target.
   * @param {HTMLElement} el      Elemento a actualizar
   * @param {number}      target  Valor final
   * @param {string}      prefix  Prefijo (ej: '$')
   * @param {string}      suffix  Sufijo (ej: 'M+')
   * @param {number}      duration Milisegundos
   */
  function animateCount(el, target, prefix, suffix, duration) {
    var start = 0;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var prog = Math.min((ts - startTime) / duration, 1);
      var ease = 1 - Math.pow(1 - prog, 3); // ease-out cubic
      el.textContent = (prefix || '') + Math.round(ease * target) + (suffix || '');
      if (prog < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  var statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            document.querySelectorAll('.stat-num[data-target]').forEach(function (el) {
              animateCount(
                el,
                parseInt(el.dataset.target),
                el.dataset.prefix || '',
                el.dataset.suffix || '',
                1400
              );
              delete el.dataset.target; // evitar re-animación
            });
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    statsObserver.observe(statsSection);
  }

  /* ══════════════════════════════════════════
     7. SPOTLIGHT CARDS — VENTAJAS
     Mueve un glow radial siguiendo al cursor
     dentro de cada card.
     ══════════════════════════════════════════ */
  document.querySelectorAll('.spotlight-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--y', (e.clientY - r.top)  + 'px');
    });
  });

  /* ══════════════════════════════════════════
     8. CALCULADORA DE CUOTA MENSUAL
     Tasa fija: 2% mensual sobre el capital.
     El capital se devuelve íntegro al vencimiento.
     ══════════════════════════════════════════ */
  var slider    = document.getElementById('loanRange');
  var amountEl  = document.getElementById('calcAmount');
  var cuotaEl   = document.getElementById('calcCuota');
  var capitalEl = document.getElementById('calcCapital');
  var badgeEl   = document.getElementById('badgeSinComision');

  /**
   * Formatea un número en pesos colombianos.
   * Ej: 10000000 → '$10.000.000'
   * @param {number} n
   * @returns {string}
   */
  function formatCOP(n) {
    var s      = String(Math.round(n));
    var result = '';
    var count  = 0;
    for (var i = s.length - 1; i >= 0; i--) {
      if (count > 0 && count % 3 === 0) result = '.' + result;
      result = s[i] + result;
      count++;
    }
    return '$' + result;
  }

  function updateCalc() {
    // Leer y sanitizar valor del slider
    var m = Math.min(100, Math.max(10, Math.floor(Number(slider.value))));
    if (!isFinite(m)) m = 10;

    var monto = m * 1_000_000;        // en pesos
    var cuota = Math.round(monto * 0.02); // 2% mensual

    amountEl.textContent  = formatCOP(monto);
    cuotaEl.textContent   = formatCOP(cuota);
    capitalEl.textContent = formatCOP(monto);

    // Mostrar badge sin comisión si monto < $50M
    badgeEl.classList.toggle('visible', m < 50);
  }

  if (slider) {
    slider.addEventListener('input',  updateCalc);
    slider.addEventListener('change', updateCalc);
    updateCalc(); // valor inicial
  }

  /* ══════════════════════════════════════════
     9. FAQ ACCORDION
     Un ítem abierto a la vez (comportamiento acordeón).
     Soporta teclado (Enter / Espacio).
     ══════════════════════════════════════════ */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    function toggle() {
      var item   = q.parentElement;
      var isOpen = item.classList.contains('open');

      // Cerrar todos los ítems abiertos
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });

      // Abrir el actual (si estaba cerrado)
      if (!isOpen) {
        item.classList.add('open');
        q.setAttribute('aria-expanded', 'true');
      }
    }

    q.addEventListener('click', toggle);
    q.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  /* ══════════════════════════════════════════
     10. POPUP DE WHATSAPP
     Aparece automáticamente a los 10 segundos.
     El botón flotante actúa como toggle.
     ══════════════════════════════════════════ */
  var popup      = document.getElementById('waPopup');
  var waBtn      = document.getElementById('waButton');
  var waClose    = document.getElementById('waClose');
  var popupShown = false;

  /** Muestra el popup (solo una vez automáticamente) */
  function showPopup() {
    if (!popupShown) {
      popup.classList.add('show');
      popupShown = true;
    }
  }

  // Aparece después de 10 segundos de inactividad
  setTimeout(showPopup, 10000);

  if (waBtn) {
    waBtn.addEventListener('click', function () {
      popup.classList.toggle('show');
    });
  }

  if (waClose) {
    waClose.addEventListener('click', function (e) {
      e.stopPropagation();
      popup.classList.remove('show');
    });
  }

  /* ══════════════════════════════════════════
     11. AÑO DINÁMICO — FOOTER
     Actualiza el año de copyright automáticamente.
     ══════════════════════════════════════════ */
  var yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ══════════════════════════════════════════
     12. ANIMACIONES DE SCROLL
     Usa IntersectionObserver para revelar elementos
     con clases .reveal y .reveal-zoom.
     ══════════════════════════════════════════ */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target); // solo una vez
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Aplicar delay escalonado para efecto cascada
  document.querySelectorAll('.reveal, .reveal-zoom').forEach(function (el, i) {
    el.style.transitionDelay = (i % 6) * 0.08 + 's';
    revealObserver.observe(el);
  });

})(); // fin IIFE
