function initAnimations() {
  const sections = document.querySelectorAll('.fade-in-section');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}
