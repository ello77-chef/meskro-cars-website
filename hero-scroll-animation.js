/*
 * hero-scroll-animation.js
 * Scroll-driven frame sequence on #hero-canvas.
 *
 * CSS required (add to home.css or style.css):
 * ─────────────────────────────────────────────
 * .ad-hero {
 *   position: sticky;
 *   top: 0;
 *   z-index: 0;               ← keeps hero below normal flow content
 * }
 * .hero-canvas {
 *   position: absolute;
 *   inset: 0;
 *   width: 100%;
 *   height: 100%;
 *   z-index: 0;               ← above bg layers, below overlay (z-index:1)
 *   display: block;
 * }
 * #hero-scroll-spacer {
 *   height: 150vh;
 *   position: relative;
 *   z-index: 1;               ← sits above sticky hero in stacking order
 *   background: var(--canvas); ← NEXT_SECTION_COLOR
 * }
 * ─────────────────────────────────────────────
 */

(function () {
  'use strict';

  const FRAME_COUNT   = 86;
  const FRAME_PATH    = 'images/hero-sequence/frame_%04d.webp';
  const POSTER_PATH   = 'images/hero-sequence/poster.webp';
  // Background colour of the section immediately below the spacer (#181818 = --canvas)
  const NEXT_SECTION_COLOR = '#181818';

  const canvas  = document.getElementById('hero-canvas');
  const spacer  = document.getElementById('hero-scroll-spacer');
  if (!canvas || !spacer) return;

  const ctx = canvas.getContext('2d');

  // ── Frame store ──────────────────────────────────────────────────────────
  const frames = new Array(FRAME_COUNT).fill(null);
  let   loadedCount = 0;
  let   posterReady = false;

  function pad4(n) {
    return String(n).padStart(4, '0');
  }

  function framePath(i) {   // i = 1-based
    return FRAME_PATH.replace('%04d', pad4(i));
  }

  // ── Canvas sizing ─────────────────────────────────────────────────────────
  function resize() {
    canvas.width  = canvas.offsetWidth  * (window.devicePixelRatio || 1);
    canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    drawCurrentFrame();
  }

  // ── Draw helpers ──────────────────────────────────────────────────────────
  function drawImage(img) {
    if (!img) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth  || img.width;
    const ih = img.naturalHeight || img.height;
    // object-fit: cover
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  let currentFrameIndex = 0; // 0-based

  function drawCurrentFrame() {
    const img = frames[currentFrameIndex] || frames[0];
    if (img) drawImage(img);
  }

  // ── Scroll → frame index ──────────────────────────────────────────────────
  // Hero is sticky at top:0. Scroll animation begins once the spacer enters
  // the document (scrollY >= heroHeight) and completes when spacer is fully
  // scrolled past (scrollY >= heroHeight + spacerHeight).
  function onScroll() {
    const spacerHeight = spacer.offsetHeight;
    const progress     = Math.max(0, Math.min(1,
      window.scrollY / spacerHeight
    ));
    const idx = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
    if (idx !== currentFrameIndex) {
      currentFrameIndex = idx;
      drawCurrentFrame();
    }
  }

  // ── Preload ────────────────────────────────────────────────────────────────
  // 1. Poster first — shows immediately, no blank canvas on load
  const poster = new Image();
  poster.onload = function () {
    posterReady = true;
    if (!frames[0]) {
      // Poster doubles as frame 0 until the real frame loads
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawImage(poster);
    }
  };
  poster.src = POSTER_PATH;

  // 2. All frames (priority: 1→90 in order)
  function loadFrame(i) {  // i = 1-based
    const img = new Image();
    img.onload = function () {
      frames[i - 1] = img;
      loadedCount++;
      // If this is the frame currently displayed, redraw
      if (i - 1 === currentFrameIndex) drawCurrentFrame();
    };
    img.src = framePath(i);
  }

  for (let i = 1; i <= FRAME_COUNT; i++) loadFrame(i);

  // ── Init ──────────────────────────────────────────────────────────────────
  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  // Draw poster immediately before any frame resolves
  poster.complete
    ? (posterReady = true, drawImage(poster))
    : null;
})();
