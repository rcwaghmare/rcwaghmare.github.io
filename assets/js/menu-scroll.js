document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navigation-container");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      nav.style.opacity = "0";
    } else {
      nav.style.opacity = "1";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  const letsTalkContainer = document.querySelector('.lets-talk-container');
  const letsTalkButton = document.querySelector('.lets-talk-button');
  const quoteTagline = document.querySelector('.quote-tagline');

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Show Let's Talk when user has scrolled 60% of the page
    if (scrollPosition > (documentHeight - windowHeight) * 0.6) {
      letsTalkContainer.classList.add('visible');
      setTimeout(() => {
        letsTalkButton.style.opacity = '1';
        letsTalkButton.style.transform = 'translateY(0)';
        quoteTagline.style.opacity = '1';
        quoteTagline.style.transform = 'translateY(0)';
      }, 300);
    }
  }

  window.addEventListener('scroll', handleScroll);
  // Check initial scroll position
  handleScroll();
});

// Navigation menu scroll effects
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navigation-container');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
            nav.style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)';
        } else {
            nav.style.borderBottom = 'none';
            nav.style.boxShadow = 'none';
        }
    });
});

// Quote and CTA scroll animation
window.addEventListener('scroll', () => {
  const quote = document.getElementById('quote-section');
  const cta = document.getElementById('cta-wrapper');

  if (quote && cta) {
    const scrollY = window.scrollY;
    const trigger = quote.offsetTop + quote.offsetHeight / 2;

    if (scrollY > trigger) {
      quote.classList.add('fade-out');
      cta.classList.add('fade-in');
    } else {
      quote.classList.remove('fade-out');
      cta.classList.remove('fade-in');
    }
  }
});