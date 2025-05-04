document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navigation-container");
  const letsTalkContainer = document.querySelector('.lets-talk-container');
  const letsTalkButton = document.querySelector('.lets-talk-button');
  const quoteTagline = document.querySelector('.quote-tagline');
  const quote = document.querySelector('.quote-text');
  const cta = document.getElementById('cta-wrapper');
  
  let lastScrollTop = 0;
  let ticking = false;

  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Navigation opacity
        if (scrollTop > lastScrollTop) {
          nav.style.opacity = "0";
        } else {
          nav.style.opacity = "1";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        // Navigation border and shadow
        if (scrollTop > 50) {
          nav.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
          nav.style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)';
        } else {
          nav.style.borderBottom = 'none';
          nav.style.boxShadow = 'none';
        }

        // Let's Talk visibility
        if (scrollTop > (documentHeight - windowHeight) * 0.6) {
          letsTalkContainer?.classList.add('visible');
          setTimeout(() => {
            if (letsTalkButton) letsTalkButton.style.opacity = '1';
            if (letsTalkButton) letsTalkButton.style.transform = 'translateY(0)';
            if (quoteTagline) quoteTagline.style.opacity = '1';
            if (quoteTagline) quoteTagline.style.transform = 'translateY(0)';
          }, 300);
        }

        // Quote and CTA animations
        if (quote && cta) {
          const quoteRect = quote.getBoundingClientRect();
          const quoteHeight = quote.offsetHeight;
          const triggerPoint = quoteRect.top + window.scrollY;
          const distance = scrollTop - triggerPoint;

          if (distance > 0 && distance < quoteHeight * 1.2) {
            quote.style.opacity = 1 - distance / (quoteHeight * 1.2);
          } else if (distance <= 0) {
            quote.style.opacity = 1;
          } else {
            quote.style.opacity = 0;
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', handleScroll);
  // Check initial scroll position
  handleScroll();

  // Service toggle functionality
  window.toggleService = function(header) {
    const service = header.closest('.service');
    service.classList.toggle('is-open');
  }
});