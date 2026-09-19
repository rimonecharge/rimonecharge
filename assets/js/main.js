/**
 * Rimone EV Charging — Core Scripts
 * (GSAP handles animations & scroll behavior in gsap-animations.js)
 */

// Runs once include.js has injected the shared header and footer.
RimoneLayout.onReady(() => {
  initMobileNav();
  initHeaderState();
});

// ---------- Mobile Menu Toggle ----------
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Keep the fixed header readable on inner pages and after the hero.
function initHeaderState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeader = () => {
    const hero = document.querySelector('.hero-section');
    const threshold = hero ? Math.max(hero.offsetHeight - 80, 0) : 0;
    header.classList.toggle('scrolled', !hero || window.scrollY >= threshold);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
}
