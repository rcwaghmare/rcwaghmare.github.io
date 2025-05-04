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