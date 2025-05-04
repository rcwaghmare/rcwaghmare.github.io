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
  });