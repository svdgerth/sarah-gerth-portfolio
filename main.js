/* =============================================
   SARAH GERTH — PORTFOLIO SITE
   Interactions: filter pills, card expand/collapse, mobile nav
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE NAV TOGGLE ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // --- FILTER PILLS ---
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Deactivate all pills
      pills.forEach(p => p.classList.remove('active'));
      // Activate clicked pill
      pill.classList.add('active');

      const filter = pill.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all') {
          card.classList.remove('dimmed');
        } else {
          const tags = card.dataset.tags || '';
          const matches = tags.split(' ').includes(filter);
          card.classList.toggle('dimmed', !matches);
        }
      });
    });
  });

  // --- CARD EXPAND / COLLAPSE ---
  const toggleButtons = document.querySelectorAll('.card-toggle');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const story = btn.nextElementSibling;

      if (expanded) {
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Read the story ↓';
        story.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Close ↑';
        story.hidden = false;
      }
    });
  });

});
