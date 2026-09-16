function initNav() {
  const navTrigger = document.getElementById('nav-trigger');
  const bubbleNav = document.getElementById('bubble-nav');
  const navIcon = document.getElementById('nav-icon');

  if (!navTrigger || !bubbleNav || !navIcon) return;

  const closeNav = () => {
    bubbleNav.classList.remove('opacity-100', 'visible', 'translate-y-0');
    bubbleNav.classList.add('opacity-0', 'invisible', 'translate-y-[-10px]');
    navIcon.textContent = 'menu';
  };

  const openNav = () => {
    bubbleNav.classList.remove('opacity-0', 'invisible', 'translate-y-[-10px]');
    bubbleNav.classList.add('opacity-100', 'visible', 'translate-y-0');
    navIcon.textContent = 'close';
  };

  navTrigger.addEventListener('click', () => {
    const isExpanded = bubbleNav.classList.contains('opacity-100');
    if (isExpanded) {
      closeNav();
    } else {
      openNav();
    }
  });

  bubbleNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });
}
