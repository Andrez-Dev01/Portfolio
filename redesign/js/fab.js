function initFab() {
  const fab = document.getElementById('fab-contact');
  const contactSection = document.getElementById('contact-section');

  if (!fab || !contactSection) return;

  // Desktop FAB only (hidden on mobile via CSS)
  if (window.matchMedia('(max-width: 767px)').matches) return;

  fab.style.transition = 'all 0.3s ease';

  const fabObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fab.style.opacity = '0';
          fab.style.pointerEvents = 'none';
          fab.style.transform = 'scale(0.8)';
        } else {
          fab.style.opacity = '1';
          fab.style.pointerEvents = 'auto';
          fab.style.transform = 'scale(1)';
        }
      });
    },
    { threshold: 0.1 }
  );

  fabObserver.observe(contactSection);
}
