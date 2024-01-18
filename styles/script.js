let currentSlideIndex = 1;

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) {
    currentSlideIndex = 1;
  }

  if (n < 1) {
    currentSlideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active-dot', '');
  }

  slides[currentSlideIndex - 1].style.display = 'block';
  dots[currentSlideIndex - 1].className += ' active-dot';
}

function changeSlide(n) {
  showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
  showSlides(currentSlideIndex = n);
}

// Autoplay
let slideInterval = setInterval(() => {
  changeSlide(1);
}, 3000);

// Pause autoplay on hover
document.querySelector('.carousel').addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// Resume autoplay on mouse leave
document.querySelector('.carousel').addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 3000);
});

showSlides(currentSlideIndex);
          
   // Inicializar ScrollReveal
   ScrollReveal().reveal('.scroll-reveal-section', {
    delay: 50,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false
});
