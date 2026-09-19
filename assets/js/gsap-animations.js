/**
 * Rimone — GSAP Premium Animations
 * Uses GSAP + ScrollTrigger for smooth, premium micro-interactions
 * All card/element animations use fromTo to ensure visibility before scroll trigger fires.
 */

gsap.registerPlugin(ScrollTrigger);

// Runs once include.js has injected the shared header and footer, so the
// header/footer animations below always find their elements.
RimoneLayout.onReady(() => {
  if (prefersSimpleMotion()) {
    revealContentWithoutScrollTriggers();
    return;
  }

  // ── Detect if it's the home page ──
  const isHome = document.querySelector('.hero-section') !== null;

  if (isHome) {
    initHomeAnimations();
  } else {
    initInnerPageAnimations();
  }

  initGlobalAnimations();
});

function prefersSimpleMotion() {
  return window.matchMedia('(max-width: 768px)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealContentWithoutScrollTriggers() {
  gsap.set([
    '.feature-card',
    '.two-col',
    '.two-col > *',
    '.col-text > *',
    '.check-list li',
    '.stat-item',
    '.step-card',
    '.section img',
    '.page-header h1',
    '.page-header p',
    '.info-card',
    '.contact-form',
    '.site-footer'
  ].join(','), {
    clearProps: 'all',
    autoAlpha: 1,
    opacity: 1,
    visibility: 'visible',
    x: 0,
    y: 0,
    scale: 1
  });
}

// ═══════════════════════════════════════
// Helper: animate elements with ScrollTrigger using fromTo
// ═══════════════════════════════════════
function animateOnScroll(selector, fromVars, toVars, staggerAmount) {
  const elements = gsap.utils.toArray(selector);
  if (!elements.length) return;
  elements.forEach((el) => {
    gsap.fromTo(el, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
  // Note: we don't use stagger here because each element gets its own ScrollTrigger
  // For true stagger, we handle it separately below
}

// ═══════════════════════════════════════
// HOME PAGE ANIMATIONS
// ═══════════════════════════════════════

function initHomeAnimations() {
  // ── Hero Content Reveal ──
  const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const heroBrand = document.querySelector('.hero-brand-wrap');
  const heroButtons = document.querySelectorAll('.hero-section .hero-actions .btn');

  if (heroBrand) {
    heroTL.fromTo(heroBrand,
      { y: 42, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1, duration: 0.9 }
    );
  }

  if (heroButtons.length) {
    heroTL.fromTo(heroButtons,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }
    , heroBrand ? '-=0.25' : 0);
  }

  // ── Hero Parallax ──
  gsap.to('.hero-bg video', {
    y: 120,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  gsap.to('.hero-overlay', {
    opacity: 0.3,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  // ── Header glassmorphism on scroll (triggers after hero ends) ──
  ScrollTrigger.create({
    trigger: '.hero-section',
    start: 'bottom 80px',
    end: 99999,
    toggleClass: { className: 'scrolled', targets: '.site-header' }
  });

  // ── Feature Cards — use fromTo so cards are VISIBLE before scroll ──
  gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.fromTo(card,
      { y: 80, autoAlpha: 0, scale: 0.92 },
      {
        y: 0, autoAlpha: 1, scale: 1,
        duration: 0.9,
        delay: i * 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card.closest('.card-grid') || card,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ── Two-col Section — Split Reveal (fromTo for visibility) ──
  gsap.utils.toArray('.two-col').forEach((section) => {
    const img = section.querySelector('.col-image');
    const label = section.querySelector('.col-text .section-label');
    const title = section.querySelector('.section-title');
    const para = section.querySelector('.col-text p');
    const listItems = section.querySelectorAll('.check-list li');
    const stats = section.querySelectorAll('.stat-item');
    const btn = section.querySelector('.col-text .btn');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 72%',
        toggleActions: 'play none none none'
      }
    });

    if (img) tl.fromTo(img, { x: -80, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' });
    if (label) tl.fromTo(label, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' }, '-=0.6');
    if (title) tl.fromTo(title, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' }, '-=0.3');
    if (para) tl.fromTo(para, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    if (listItems.length) tl.fromTo(listItems, { x: -20, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out' }, '-=0.1');
    if (stats.length) tl.fromTo(stats, { y: 30, autoAlpha: 0, scale: 0.8 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.1');
    if (btn) tl.fromTo(btn, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power3.out' }, '-=0.1');
  });

  // ── Stats Counter Animation ──
  document.querySelectorAll('.stat-number').forEach(el => {
    const raw = el.textContent.replace(/[^0-9]/g, '');
    const suffix = el.textContent.replace(/[0-9]/g, '');
    const target = parseInt(raw);
    if (!target) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          snap: { value: 1 },
          onUpdate: () => {
            el.textContent = Math.round(counter.value) + suffix;
          }
        });
      }
    });
  });

  // ── Steps — use fromTo for visibility ──
  gsap.utils.toArray('.step-card').forEach((card, i) => {
    gsap.fromTo(card,
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.7,
        delay: i * 0.2,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: card.closest('.steps-grid') || card,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ── CTA Parallax ──
  const ctaSection = document.querySelector('.cta-section');
  if (ctaSection) {
    gsap.fromTo(ctaSection,
      { y: 50, opacity: 0.6 },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaSection,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }
}

// ═══════════════════════════════════════
// INNER PAGE ANIMATIONS (Pricing, Solution, About, Contact)
// ═══════════════════════════════════════

function initInnerPageAnimations() {
  // ── Page Header Reveal (immediate, no scroll trigger needed) ──
  gsap.fromTo('.page-header h1',
    { y: 50, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out' }
  );

  gsap.fromTo('.page-header p',
    { y: 30, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.7, delay: 0.15, ease: 'power3.out' }
  );

  // ── Feature Cards — fromTo for visibility on all inner pages ──
  gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.fromTo(card,
      { y: 60, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.7,
        delay: i * 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card.closest('.card-grid') || card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ── Two-col sections — fromTo ──
  document.querySelectorAll('.two-col').forEach((el) => {
    const img = el.querySelector('.col-image');
    const txt = el.querySelector('.col-text');
    if (!img || !txt) return;

    const isReversed = el.classList.contains('reverse');

    gsap.fromTo(img,
      { x: isReversed ? 80 : -80, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(txt,
      { x: isReversed ? -80 : 80, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ── Contact Info Cards — fromTo ──
  gsap.utils.toArray('.info-card').forEach((card, i) => {
    gsap.fromTo(card,
      { x: -40, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1,
        duration: 0.6,
        delay: i * 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card.closest('.contact-info') || card,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ── Contact Form — fromTo ──
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    gsap.fromTo(contactForm,
      { x: 40, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactForm,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ── Pricing / content images — fromTo ──
  gsap.utils.toArray('.section img').forEach((img) => {
    // Skip images inside cards, header, footer, hero
    if (img.closest('.feature-card') || img.closest('.site-header') || img.closest('.site-footer') || img.closest('.hero-section') || img.closest('.page-header')) return;
    gsap.fromTo(img,
      { y: 40, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

// ═══════════════════════════════════════
// GLOBAL ANIMATIONS (shared across pages)
// ═══════════════════════════════════════

function initGlobalAnimations() {
  // ── Footer reveal — fromTo ──
  const footer = document.querySelector('.site-footer');
  if (footer) {
    gsap.fromTo(footer,
      { y: 60, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ── Brand logo pulse on hover ──
  const brandLogo = document.querySelector('.brand-logo img');
  if (brandLogo) {
    brandLogo.addEventListener('mouseenter', () => {
      gsap.to(brandLogo, { scale: 1.12, duration: 0.4, ease: 'back.out(2)' });
    });
    brandLogo.addEventListener('mouseleave', () => {
      gsap.to(brandLogo, { scale: 1, duration: 0.4, ease: 'power2.out' });
    });
  }

  // ── Nav link underline reveal on hover ──
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { y: -2, duration: 0.25, ease: 'power2.out' });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { y: 0, duration: 0.25, ease: 'power2.out' });
    });
  });

  // ── Button hover micro-interactions ──
  document.querySelectorAll('.btn').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale: 1.06, y: -3, duration: 0.3, ease: 'back.out(2)' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
    });
  });

  // ── Feature card 3D tilt on hover ──
  document.querySelectorAll('.feature-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { rotateX: 2, rotateY: -2, duration: 0.4, ease: 'power2.out' });
    });
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, { rotateX: -y * 6, rotateY: x * 6, duration: 0.5, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
    });
  });

  // ── Step card pop on hover ──
  document.querySelectorAll('.step-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.05, y: -6, duration: 0.35, ease: 'back.out(2)' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, y: 0, duration: 0.35, ease: 'power2.out' });
    });
  });

  // ── Section label subtle float animation ──
  document.querySelectorAll('.section-label').forEach((label) => {
    gsap.fromTo(label,
      { y: 0 },
      {
        y: -6,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 1.5
      }
    );
  });

  // ── Stats bounce on scroll ──
  document.querySelectorAll('.stat-item').forEach((stat) => {
    gsap.fromTo(stat,
      { y: 30, autoAlpha: 0, scale: 0.85 },
      {
        y: 0, autoAlpha: 1, scale: 1,
        duration: 0.6,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: stat,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ── Image reveal on scroll (lazy-like) ──
  document.querySelectorAll('.col-image img, .section img').forEach((img) => {
    if (img.closest('.hero-section') || img.closest('.site-header') || img.closest('.site-footer')) return;
    gsap.fromTo(img,
      { scale: 0.94, autoAlpha: 0 },
      {
        scale: 1, autoAlpha: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ── Footer social icon hover ──
  document.querySelectorAll('.footer-social a').forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, { y: -6, scale: 1.2, duration: 0.35, ease: 'back.out(2)' });
    });
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, { y: 0, scale: 1, duration: 0.35, ease: 'power2.out' });
    });
  });

  // ── Footer app store badges hover ──
  document.querySelectorAll('.footer-apps a img').forEach((badge) => {
    badge.addEventListener('mouseenter', () => {
      gsap.to(badge, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
    });
    badge.addEventListener('mouseleave', () => {
      gsap.to(badge, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });

  // ── Form input focus animation ──
  document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach((input) => {
    input.addEventListener('focus', () => {
      gsap.to(input, { scale: 1.01, duration: 0.3, ease: 'power2.out' });
    });
    input.addEventListener('blur', () => {
      gsap.to(input, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: target, offsetY: 80 },
          ease: 'power3.inOut'
        });
      }
    });
  });
}
