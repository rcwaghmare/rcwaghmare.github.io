document.addEventListener("DOMContentLoaded", () => {
  const quoteSection = document.querySelector(".quote-scroll-section");
  const quoteText = document.querySelector(".scroll-fade-quote");
  const quoteAuthor = document.querySelector(".quote-author");
  const letsTalkContainer = document.querySelector(".lets-talk-container");
  const letsTalkButton = document.querySelector(".lets-talk-button");
  const tagline = document.querySelector(".lets-talk-subtext");
  const staggeredElements = document.querySelectorAll(".staggered-animation");
  const quoteWrappers = document.querySelectorAll(".quote-scroll-wrapper");
  const quoteHighlights = document.querySelectorAll(".quote-highlight");
  const quote = document.querySelector('.quote-text');
  const cta = document.getElementById('cta-container');
  
  let lastScrollTop = 0;
  let ticking = false;
  
  function isInViewport(element, offset = 0.5) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const triggerPoint = window.innerHeight * offset;
    return rect.top <= triggerPoint;
  }
  
  function checkScroll() {
    if (!quote || !cta || !quoteSection) return;
    
    // Get current scroll position
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const quoteSectionTop = quoteSection.getBoundingClientRect().top + scrollY;
    const triggerOffset = window.innerHeight * 0.35; // Show quote earlier
    
    // Calculate opacity based on scroll position relative to the section
    const distanceFromTrigger = quoteSectionTop - scrollY - triggerOffset;
    const opacityValue = Math.min(Math.max(1 - (distanceFromTrigger / 300), 0), 1);
    
    // Apply opacity with a smooth effect
    quote.style.opacity = opacityValue;
    quote.style.transform = `translateY(${(1 - opacityValue) * 30}px)`;
    
    // Show CTA when quote is mostly visible but with a delay
    if (opacityValue > 0.7) {
      // Calculate CTA opacity with a delay after quote reaches 70% opacity
      const ctaOpacityValue = Math.min(Math.max((opacityValue - 0.7) * 3.33, 0), 1);
      cta.style.opacity = ctaOpacityValue;
      cta.style.transform = `translateY(${(1 - ctaOpacityValue) * 20}px)`;
    } else {
      cta.style.opacity = 0;
      cta.style.transform = 'translateY(20px)';
    }
    
    // Update last scroll position
    lastScrollTop = scrollY;
  }
  
  // Run on page load with a small delay to ensure all elements are properly rendered
  setTimeout(() => {
    checkScroll();
  }, 100);
  
  // Run on scroll with requestAnimationFrame for better performance
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Run on resize
  window.addEventListener("resize", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Add mouse movement interaction to quote section for subtle parallax
  if (quoteSection) {
    quoteSection.addEventListener("mousemove", (e) => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
      
      quoteWrappers.forEach(wrapper => {
        if (wrapper) {
          wrapper.style.transform = `translate(${-xPos}px, ${-yPos}px)`;
        }
      });
    });
    
    // Reset position when mouse leaves
    quoteSection.addEventListener("mouseleave", () => {
      quoteWrappers.forEach(wrapper => {
        if (wrapper) {
          wrapper.style.transform = 'translate(0, 0)';
        }
      });
    });
  }
});