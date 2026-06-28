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
}
window.addEventListener('load', () => setTimeout(animateHero, 100));

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
