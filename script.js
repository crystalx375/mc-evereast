// Прогрузка preloader
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const images = document.querySelectorAll("img:not([loading='lazy'])");
  let loadedCount = 0;
  const totalImages = images.length;

  if (totalImages === 0) {
    hidePreloader();
  } else {
    images.forEach(img => {
      if (img.complete) {
        incrementCounter();
      } else {
        img.addEventListener("load", incrementCounter, { once: true });
        img.addEventListener("error", incrementCounter, { once: true });
      }
    });
  }

  function incrementCounter() {
    loadedCount++;
    if (loadedCount >= totalImages) hidePreloader();
  }

  function hidePreloader() {
    preloader.classList.add("hide");
    initReveals();
  }

  //Lazy
  function initReveals() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }
});