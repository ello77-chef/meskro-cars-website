/* ── Nav scroll ── */
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Hamburger ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

// On mobile: move nav-links to <body> so the navbar's backdrop-filter
// stacking context doesn't trap position:fixed children inside 72px height
function reparentNavIfMobile() {
  if (!navLinks) return;
  if (window.innerWidth <= 768 && navLinks.parentElement !== document.body) {
    document.body.appendChild(navLinks);
  }
}
reparentNavIfMobile();

function closeNav() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  document.body.classList.remove('nav-open');
}

hamburger?.addEventListener('click', () => {
  const opening = !navLinks.classList.contains('open');
  if (opening) {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    document.body.classList.add('nav-open');
  } else {
    closeNav();
  }
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

/* ── Hero entrance animations ── */
function animateHero() {
  document.querySelectorAll('.hero-label, .hero-content h1, .hero-sub, .hero-actions, .hero-scroll, .hero-red-line').forEach(el => {
    el.classList.add('animate');
  });

  // Character-by-character reveal for hero title
  let globalCharIdx = 0;
  const BASE_DELAY  = 300;  // ms before first char
  const CHAR_STEP   = 38;   // ms between each char

  document.querySelectorAll('.hero-line-inner').forEach(lineEl => {
    const text = lineEl.textContent;
    lineEl.innerHTML = '';
    Array.from(text).forEach(ch => {
      const span = document.createElement('span');
      span.className = 'hero-char';
      span.textContent = ch === ' ' ? ' ' : ch;
      lineEl.appendChild(span);
      const delay = BASE_DELAY + globalCharIdx * CHAR_STEP;
      setTimeout(() => span.classList.add('visible'), delay);
      if (ch !== ' ') globalCharIdx++;
    });
  });

  // Trigger hero stat counters manually — bypasses IntersectionObserver entirely
  setTimeout(() => {
    const fahrzeuge = document.getElementById('hero-stat-fahrzeuge');
    const erreichbar = document.getElementById('hero-stat-erreichbar');
    if (fahrzeuge) countUpDirect(fahrzeuge, 10, '+');
    if (erreichbar) countUpDirect(erreichbar, 24, '/7');
  }, 2200);
}
window.addEventListener('load', () => setTimeout(animateHero, 80));

/* ── Hero scroll parallax + fade ── */
const heroBg = document.querySelector('.ad-hero-bg');
if (heroBg) {
  const heroSection = heroBg.closest('.ad-hero');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroH = heroSection ? heroSection.offsetHeight : window.innerHeight;
    const progress = Math.min(scrolled / heroH, 1);
    // Scale up from 1 → 1.12, opacity 1 → 0.35
    const scale = 1 + progress * 0.12;
    const opacity = 1 - progress * 0.65;
    heroBg.style.transform = `scale(${scale})`;
    heroBg.style.opacity = opacity;
  }, { passive: true });
}

/* ── Hero "Scroll Down" click — scrolls to fleet section ── */
const heroScrollEl = document.querySelector('.ad-hero-scroll');
const fleetSection = document.getElementById('fleet-section');
if (heroScrollEl && fleetSection) {
  heroScrollEl.style.cursor = 'pointer';
  heroScrollEl.addEventListener('click', () => {
    fleetSection.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ── Sticky Mobile CTA — appears after hero scrolls out ── */
const adHero = document.querySelector('.ad-hero');
const stickyCta = document.getElementById('mobile-sticky-cta');
if (adHero && stickyCta) {
  const ctaObs = new IntersectionObserver(([entry]) => {
    stickyCta.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0 });
  ctaObs.observe(adHero);
}

/* ── Hero video → image transition ── */
const heroVideo  = document.getElementById('hero-video');
const heroBgImg  = document.getElementById('hero-bg-img');
if (heroVideo && heroBgImg) {
  heroVideo.addEventListener('ended', () => {
    heroVideo.classList.add('fade-out');
    heroBgImg.classList.add('visible', 'loaded');
  });
  // Fallback: if video fails to load, show image immediately
  heroVideo.addEventListener('error', () => {
    heroVideo.style.display = 'none';
    heroBgImg.classList.add('visible', 'loaded');
  });
}

/* ── Hero image scale-in ── */
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  const url = heroImage.style.backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
  if (url) {
    const img = new Image();
    img.onload = () => heroImage.classList.add('loaded');
    img.src = url;
  }
}

/* ── Page hero scale-in ── */
const pageHeroBg = document.querySelector('.page-hero-bg');
if (pageHeroBg) {
  const url = pageHeroBg.style.backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
  if (url) {
    const img = new Image();
    img.onload = () => {
      pageHeroBg.classList.add('loaded');
      document.querySelectorAll('.page-hero-content .hero-label, .page-hero-content h1').forEach(el => {
        el.classList.add('animate');
      });
    };
    img.src = url;
  } else {
    document.querySelectorAll('.page-hero-content .hero-label, .page-hero-content h1').forEach(el => {
      el.classList.add('animate');
    });
  }
}

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Staggered grid children reveal ── */
document.querySelectorAll('.feature-grid, .why-grid, .values-grid, .fleet-grid').forEach(grid => {
  const children = grid.children;
  Array.from(children).forEach((child, i) => {
    child.classList.add('reveal');
    child.style.transitionDelay = `${i * 0.08}s`;
    revealObserver.observe(child);
  });
});

/* ── Fleet filter ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const fleetCards  = document.querySelectorAll('.fleet-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    fleetCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeInUp 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ── Cursor glow (desktop only) ── */
if (window.innerWidth > 768) {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}

/* ── Number count-up animation ── */
function countUpDirect(el, target, suffix, duration) {
  duration = duration || 1400;
  el.textContent = '0' + suffix;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function countUp(el) {
  const target = parseInt(el.dataset.target, 10);
  if (!target) return;
  countUpDirect(el, target, el.dataset.suffix || '');
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => countObserver.observe(el));

/* ── Contact form ── */
const form        = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
form?.addEventListener('submit', () => {
  setTimeout(() => {
    if (formSuccess) {
      form.style.display = 'none';
      formSuccess.style.display = 'block';
    }
  }, 500);
});

/* ── Fade-in animation keyframe injection ── */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

/* ── Card Stack ── */
(function () {
  const stackEl = document.getElementById('card-stack');
  if (!stackEl) return;

  const cards = Array.from(stackEl.querySelectorAll('.stack-card'));
  const total = cards.length;
  let current = 0;
  let animating = false;

  const data = [
    { title: 'Mercedes C63S AMG Cabrio', desc: '510 PS V8 Biturbo. Elektrisches Cabriodach. Der AMG, der keine Fragen offen lässt.', ps: '510', time: '4.0', motor: 'V8', href: 'mercedes-c63s-cabrio.html' },
    { title: 'Mercedes G63 AMG',         desc: '585 PS. Ikonisches Kastendesign. Das Status-Symbol auf vier Rädern — überall.', ps: '585', time: '4.5', motor: 'V8', href: 'mercedes-g63.html' },
    { title: 'Mercedes GLE 450d',        desc: '367 PS Diesel. 7 Sitze. Luftfederung. Der SUV für alle Lebenslagen.', ps: '367', time: '5.5', motor: 'V6D', href: 'mercedes-gle450d.html' },
    { title: 'Mercedes S400',            desc: '333 PS Hybrid. Massagesitze. Burmester Sound. Die Kunst des Reisens.', ps: '333', time: '5.5', motor: 'V6H', href: 'mercedes-s400.html' },
    { title: 'BMW M5 F90',               desc: '600 PS V8 Biturbo. 3,4 Sek. auf 100. Die schnellste Limousine der Flotte.', ps: '600', time: '3.4', motor: 'V8', href: 'bmw-m5.html' },
    { title: 'Mercedes C200',            desc: '204 PS Mild-Hybrid. Elegantes Auftreten. Der stilvolle Alltagsbegleiter.', ps: '204', time: '7.3', motor: '1.5T', href: 'mercedes-c200.html' },
    { title: 'Audi R8 Spyder',           desc: '570 PS V10 Saugmotor. Quattro. Das reinste Fahrerlebnis mit offenem Verdeck.', ps: '570', time: '3.5', motor: 'V10', href: 'audi-r8.html' },
    { title: 'BMW M4',                   desc: '530 PS Reihensechszylinder. Hinterradantrieb. Fahren als Kunst.', ps: '530', time: '3.5', motor: 'R6T', href: 'bmw-m4.html' },
  ];

  function updatePositions(dir) {
    cards.forEach((c, i) => {
      c.classList.remove('is-top', 'is-second', 'is-third', 'fly-left', 'fly-right');
    });

    // Position relative to current
    cards.forEach((c, i) => {
      const rel = ((i - current) % total + total) % total;
      if (rel === 0) c.classList.add('is-top');
      else if (rel === 1) c.classList.add('is-second');
      else if (rel === 2) c.classList.add('is-third');
      // rest stay hidden (no class)
    });
  }

  function updateInfo() {
    const d = data[current];
    const titleEl = document.getElementById('stack-title');
    const descEl  = document.getElementById('stack-desc');
    const specsEl = document.getElementById('stack-specs');
    const linkEl  = document.getElementById('stack-link');
    const curEl   = document.getElementById('stack-current');

    // Fade out
    titleEl.classList.add('changing');
    specsEl.classList.add('changing');

    setTimeout(() => {
      titleEl.textContent = d.title;
      descEl.textContent  = d.desc;
      specsEl.innerHTML = `
        <div class="stack-spec"><span class="stack-spec-val">${d.ps}</span><span class="stack-spec-lbl">PS</span></div>
        <div class="stack-spec"><span class="stack-spec-val">${d.time}</span><span class="stack-spec-lbl">0–100</span></div>
        <div class="stack-spec"><span class="stack-spec-val">${d.motor}</span><span class="stack-spec-lbl">Motor</span></div>
      `;
      linkEl.href = d.href;
      curEl.textContent = current + 1;
      titleEl.classList.remove('changing');
      specsEl.classList.remove('changing');
    }, 200);
  }

  function advance(dir) {
    if (animating) return;
    animating = true;

    const topCard = cards[current];

    // Fly out the top card
    topCard.classList.add(dir > 0 ? 'fly-left' : 'fly-right');

    setTimeout(() => {
      current = ((current + dir) % total + total) % total;
      updatePositions(dir);
      updateInfo();
      setTimeout(() => { animating = false; }, 100);
    }, 380);
  }

  // Init
  document.getElementById('stack-total').textContent = total;
  updatePositions(0);
  updateInfo();

  // Buttons
  document.getElementById('stack-next').addEventListener('click', () => advance(1));
  document.getElementById('stack-prev').addEventListener('click', () => advance(-1));

  // Click top card → go to page
  stackEl.addEventListener('click', (e) => {
    if (animating) return;
    const top = stackEl.querySelector('.is-top');
    if (top && !e.target.closest('button')) {
      window.location.href = data[current].href;
    }
  });

  // Touch/drag swipe on stack
  let startX = 0;
  stackEl.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  stackEl.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) advance(dx < 0 ? 1 : -1);
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') advance(1);
    if (e.key === 'ArrowLeft')  advance(-1);
  });
})();

/* ── Magnetic CTA buttons (desktop only) ── */
if (window.innerWidth > 768) {
  const MAG_STRENGTH = 0.28; // 0 = no pull, 1 = follows fully
  const MAG_RADIUS   = 90;   // px around button edge that activates magnet

  const magTargets = document.querySelectorAll(
    '.btn-primary, .nav-book-btn, .nav-cta, .mag-cta, .ad-explore-btn'
  );

  magTargets.forEach(el => {
    el.classList.add('mag-btn-active');

    let rafId = null;
    let currentX = 0;
    let currentY = 0;
    let targetX  = 0;
    let targetY  = 0;
    let inside   = false;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);
      el.style.transform = `translate(${currentX}px, ${currentY}px)`;
      if (Math.abs(currentX - targetX) > 0.1 || Math.abs(currentY - targetY) > 0.1) {
        rafId = requestAnimationFrame(tick);
      } else {
        el.style.transform = `translate(${targetX}px, ${targetY}px)`;
        rafId = null;
      }
    }

    function startTick() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    document.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = e.clientX - cx;
      const dy   = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const edge = Math.max(rect.width, rect.height) / 2 + MAG_RADIUS;

      if (dist < edge) {
        inside   = true;
        targetX  = dx * MAG_STRENGTH;
        targetY  = dy * MAG_STRENGTH;
        el.classList.add('mag-hovered');
      } else if (inside) {
        inside   = false;
        targetX  = 0;
        targetY  = 0;
        el.classList.remove('mag-hovered');
      }
      startTick();
    }, { passive: true });
  });
}
