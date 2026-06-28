// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Hero image scale-in on load
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  const bg = heroImage.style.backgroundImage.slice(5, -2);
  const img = new Image();
  img.onload = () => heroImage.classList.add('loaded');
  img.src = bg;
}

// Fleet filter
const filterBtns = document.querySelectorAll('.filter-btn');
const fleetCards  = document.querySelectorAll('.fleet-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    fleetCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// Contact form — simple mailto fallback + success message
const form        = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
// Form submits via mailto action; show message after a short delay
form?.addEventListener('submit', () => {
  setTimeout(() => {
    if (formSuccess) {
      form.style.display = 'none';
      formSuccess.style.display = 'block';
    }
  }, 500);
});
