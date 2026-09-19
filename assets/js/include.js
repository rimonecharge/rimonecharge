/**
 * Rimone — Shared Layout Includes
 *
 * Pulls partials/header.html and partials/footer.html into the
 * <div data-include="..."> placeholders on every page, so the header and
 * footer markup lives in exactly one file each. After injecting it marks the
 * active nav link and stamps the current year into the footer.
 *
 * Load this before main.js / gsap-animations.js: those scripts start their
 * work from RimoneLayout.onReady() so they only run once the header and
 * footer are actually in the DOM.
 *
 * Note: browsers block fetch() on file:// URLs, so preview with `npm run dev`
 * rather than by opening the .html files directly.
 */

(function () {
  const ready = new Promise((resolve) => {
    whenDocumentParsed(() => {
      const slots = Array.from(document.querySelectorAll('[data-include]'));

      Promise.all(slots.map(fillSlot))
        .then(() => {
          markActiveNavLink();
          stampCurrentYear();
        })
        .catch((err) => console.error('[layout] include failed:', err))
        .then(resolve);
    });
  });

  window.RimoneLayout = {
    ready,
    onReady: (fn) => ready.then(fn)
  };

  function whenDocumentParsed(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  // ---------- Inject one partial in place of its placeholder ----------
  function fillSlot(slot) {
    const url = `partials/${slot.dataset.include}.html`;

    return fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
        return res.text();
      })
      .then((html) => {
        slot.outerHTML = html;
      });
  }

  // ---------- Highlight the nav entry for the current page ----------
  function markActiveNavLink() {
    const currentPage = fileNameOf(window.location.pathname) || 'index.html';

    document.querySelectorAll('.site-header .nav-link').forEach((link) => {
      const target = new URL(link.getAttribute('href'), window.location.href);
      if (target.origin !== window.location.origin) return; // external links (app CTA)

      if (fileNameOf(target.pathname) === currentPage) {
        link.classList.add('active');
      }
    });
  }

  function fileNameOf(pathname) {
    return pathname.split('/').pop();
  }

  // ---------- Copyright year from the system date ----------
  function stampCurrentYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll('[data-current-year]').forEach((el) => {
      el.textContent = year;
    });
  }
})();
