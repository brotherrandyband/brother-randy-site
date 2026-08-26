// BROTHER RANDY — shared behavior

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    }));
  }

  // Fade-up on scroll — progressive enhancement. Elements are visible
  // by default (see CSS); we only hide+animate them if this JS actually
  // runs and IntersectionObserver actually fires, so content never gets
  // stuck invisible in an environment where scripts behave differently.
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); e.target.classList.remove('pending'); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => {
    el.classList.add('pending');
    io.observe(el);
  });
});
