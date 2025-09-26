const decors = document.querySelectorAll('.decor');
let decorShown = false;


window.addEventListener('scroll', () => {
    if (!decorShown) {
        decorShown = true;
        decors.forEach(el => el.classList.add('show'));
    }

    const offset = window.scrollY;
    decors.forEach(el => {
        const speed = parseFloat(el.dataset.speed);
        const baseRotate = parseFloat(el.dataset.rotate);
        el.style.transform = `translateY(${offset * speed}px) rotate(${baseRotate + offset * speed}deg)`;
    });
});

const decorImages = [
    'images/decor/1.png',
    'images/decor/2.png',
    'images/decor/3.png'
];

window.addEventListener('scroll', () => {
    if (!decorShown) {
        decorShown = true;
        decors.forEach(el => el.classList.add('show'));
    }

    const offset = window.scrollY;
    decors.forEach(el => {
        const speed = parseFloat(el.dataset.speed);
        const baseRotate = parseFloat(el.dataset.rotate);
        el.style.transform = `translateY(${offset * speed}px) rotate(${baseRotate + offset * speed}deg)`;
    });
});

function spawnDecorRain() {
    for (let i = 0; i < 10; i++) {
        let drop = document.createElement('img');
        
        drop.src = decorImages[Math.floor(Math.random() * decorImages.length)];

        drop.style.position = 'fixed';
        drop.style.left = Math.random() * window.innerWidth + 'px';
        drop.style.top = '-100px';
        drop.style.width = '80px';
        drop.style.animation = 'fall 3s linear forwards';
        drop.style.zIndex = '9999';
        document.body.appendChild(drop);
        
        setTimeout(() => {
            drop.remove();
        }, 3000);
    }
}

function startDecorRain() {
    let cycles = 0;
    const rainInterval = setInterval(() => {
        spawnDecorRain();
        cycles++;
        if (cycles >= 6) {
            clearInterval(rainInterval);
        }
    }, 1000);
}
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('show');
    }
  });
});


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");
let autoSlideInterval = setInterval(nextSlide, 4000);

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slider.style.transform = `translateX(${-currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function resetTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        resetTimer();
    });
});

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
});
prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextSlide();
        resetTimer();
    }
    if (event.key === "ArrowLeft") {
        prevSlide();
        resetTimer();
    }
});

showSlide(currentSlide);

(function() {
    let targetScroll = window.scrollY; 
    let currentScroll = window.scrollY; 
    let isScrolling = false;


    const ease = 0.08;
    const wheelSpeed = 0.7;


    window.addEventListener("wheel", (e) => {
        targetScroll += e.deltaY * wheelSpeed; 
        targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)); // границы
        if (!isScrolling) updateScroll();
    }, { passive: false });

    function updateScroll() {
        isScrolling = true;
        currentScroll += (targetScroll - currentScroll) * ease;
        window.scrollTo(0, currentScroll);

        if (Math.abs(targetScroll - currentScroll) > 0.8) {
            requestAnimationFrame(updateScroll);
        } else {
            isScrolling = false;
        }
    }
})();
showSlide(currentSlide);