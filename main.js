/* ── Nav scroll ── */
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Hamburger ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger?.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Hero entrance animations ── */
function animateHero() {
  document.querySelectorAll('.hero-label, .hero-content h1, .hero-sub, .hero-actions, .hero-scroll, .hero-red-line').forEach(el => {
    el.classList.add('animate');
  });
  // Staggered line reveal for ad-hero
  document.querySelectorAll('.hero-line-inner').forEach(el => {
    el.classList.add('visible');
  });
  // Trigger counter for hero stats after fade-in completes (1s delay + 1s duration = 2s)
  setTimeout(() => {
    document.querySelectorAll('.ad-hero-stats [data-target]').forEach(el => countUp(el));
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
function countUp(el) {
  const target = parseInt(el.dataset.target, 10);
  if (!target) return;
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
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
