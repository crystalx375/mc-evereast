// Прогрузка preloader
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const images = document.querySelectorAll("img");
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
    if (loadedCount >= totalImages) {
      hidePreloader();
    }
  }

  function hidePreloader() {
    preloader.classList.add("hide");
    initReveals();
  }

  function initReveals() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    document.querySelectorAll(".reveal").forEach(el => {
      observer.observe(el);
    });
  }
});
// Копирование
async function copyMultiLine() {
  const text = document.getElementById("multiLineText").innerText;
  try {
  await navigator.clipboard.writeText(text);
  showToast("Текст скопирован!");
  } catch (err) {
    console.error('Не удалось скопировать текст: ', err);
  }
    }
function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.background = isError ? "rgba(220,53,69,0.95)" : "rgba(40,167,69,0.95)";
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
async function copyText(id) {
  const text = document.getElementById(id).innerText;
  try {
      await navigator.clipboard.writeText(text);
      showToast("Текст скопирован!");
  } catch (err) {
      console.error('Не удалось скопировать текст: ', err);
      showToast("Ошибка копирования!", true);
  }
}

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.background = isError ? "rgba(220,53,69,0.95)" : "rgba(40,167,69,0.95)";
  toast.classList.add("show");
  setTimeout(() => {
      toast.classList.remove("show");
  }, 2000);
}