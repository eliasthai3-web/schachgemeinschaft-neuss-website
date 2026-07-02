const menuToggle = document.getElementById('menuToggle');
const revealItems = document.querySelectorAll('.reveal');
const navLinks = document.getElementById('navLinks');
const internalLinks = document.querySelectorAll('a[href^="#"]');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
}

    internalLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();

        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        const offset = Math.max(110, window.innerHeight * 0.22);

        window.scrollTo({
          top: targetTop - offset,
          behavior: 'smooth'
        });

        history.replaceState(null, '', targetId);
        navLinks?.classList.remove('open');
      });
    });

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealItems.forEach(item => revealObserver.observe(item));
    } else {
      revealItems.forEach(item => item.classList.add('is-visible'));
    }
