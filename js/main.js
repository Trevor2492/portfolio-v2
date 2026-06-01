/**
 * main.js — nav scroll behavior, burger menu, scroll animations, footer year
 */

// ── Footer year ──────────────────────────────────────────────
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Nav scroll effect ────────────────────────────────────────
const nav = document.getElementById('nav');
const onScroll = () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Burger menu ──────────────────────────────────────────────
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav__links');

burger?.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  navLinks?.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});

// Close on link click (mobile)
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger?.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Intersection Observer — fade-in on scroll ────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Also observe featured card and section headings
document.querySelectorAll('.featured__card, .section-title, .contact__title').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
