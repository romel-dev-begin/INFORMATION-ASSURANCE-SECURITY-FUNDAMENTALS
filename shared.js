// ===== MATRIX RAIN =====
(function() {
  const canvas = document.getElementById('matrix-rain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, columns, drops;

  function resizeMatrix() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / 14);
    drops = Array(columns).fill(1);
  }
  resizeMatrix();
  window.addEventListener('resize', resizeMatrix);

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789<>/{}[]|&^%$#@!';

  function drawMatrix() {
    ctx.fillStyle = 'rgba(6, 10, 11, 0.05)';
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = i % 3 === 0 ? '#00ff41' : 'rgba(0,255,65,0.3)';
      ctx.fillText(text, i * 14, drops[i] * 14);
      if (drops[i] * 14 > height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 50);
})();

// ===== CLOCK =====
(function() {
  const clock = document.getElementById('hud-clock');
  if (!clock) return;
  function updateClock() {
    const now = new Date();
    clock.textContent = now.toTimeString().slice(0, 8);
  }
  updateClock();
  setInterval(updateClock, 1000);
})();

// ===== SCROLL REVEAL =====
(function() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
})();

// ===== SMOOTH SCROLL FOR ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log('%c CYCOM // Security Command Center v2.0 ', 'background: #060a0b; color: #00ff41; font-size: 16px; font-weight: bold; padding: 8px 16px; border: 1px solid #00ff41;');
console.log('%c CLASSIFIED SYSTEM — Authorized Personnel Only ', 'color: #7a9a7a; font-size: 11px;');
