/* ═══════════════════════════════════════════════
   ABHAY KUMAR PORTFOLIO — Global Script
   ═══════════════════════════════════════════════ */

/* ── Highlight the active nav folder on index.html ── */
function setActivePage(name) {
  document.querySelectorAll('.folder').forEach(f => {
    f.classList.toggle('active', f.dataset.page === name);
  });
}

/* ── Animate page-inner on load (subpages) ── */
document.addEventListener('DOMContentLoaded', () => {
  const inner = document.querySelector('.page-inner');
  if (inner) {
    inner.style.opacity = '0';
    inner.style.transform = 'translateY(20px)';
    requestAnimationFrame(() => {
      inner.style.transition = 'opacity .45s ease, transform .45s cubic-bezier(.34,1.2,.64,1)';
      inner.style.opacity = '1';
      inner.style.transform = 'translateY(0)';
    });
  }

  /* stagger card animations */
  document.querySelectorAll('.card, .contact-link').forEach((el, i) => {
    el.style.animationDelay = `${0.06 + i * 0.08}s`;
  });
});

/* ── Folder hover: show preview label ── */
document.querySelectorAll('.folder').forEach(folder => {
  folder.addEventListener('mouseenter', () => {
    folder.querySelectorAll('.folder-icon').forEach((icon, i) => {
      icon.style.animationDelay = `${i * 0.06}s`;
    });
  });
});

/* ── Keyboard shortcut: Escape goes back ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const back = document.querySelector('.page-back');
    if (back) back.click();
  }
});

/* ── Smooth link transition (fade out before navigate) ── */
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  /* only internal .html links */
  if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) return;

  link.addEventListener('click', e => {
    e.preventDefault();
    document.body.style.transition = 'opacity .25s ease';
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 240);
  });
});

/* fade in on load */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity .35s ease';
    document.body.style.opacity = '1';
  });
});