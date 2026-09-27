/**
 * Rimone — Content Protection
 *
 * Disables the right-click / long-press context menu everywhere on the page,
 * including inside form fields, plus image dragging and the usual view-source
 * and devtools keyboard shortcuts.
 *
 * Loaded on every page (see the <script> tag next to include.js). This is a
 * deterrent for casual copying, not a security control — anyone can still read
 * the markup with JavaScript disabled, via "view-source:", or by opening
 * devtools from the browser's own menu.
 */

(function () {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });

  // Stop images being dragged out of the page onto the desktop / another tab.
  document.addEventListener('dragstart', (event) => {
    if (event.target && event.target.tagName === 'IMG') {
      event.preventDefault();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (isBlockedShortcut(event)) {
      event.preventDefault();
    }
  });

  // F12, Ctrl/Cmd+Shift+I/J/C (devtools) and Ctrl/Cmd+U (view source).
  function isBlockedShortcut(event) {
    const key = (event.key || '').toLowerCase();
    const mod = event.ctrlKey || event.metaKey;

    if (key === 'f12') return true;
    if (mod && event.shiftKey && (key === 'i' || key === 'j' || key === 'c')) return true;
    if (mod && !event.shiftKey && key === 'u') return true;

    return false;
  }
})();
