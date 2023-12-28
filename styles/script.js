// Slider
const sliderWrapper = document.getElementById('slider-wrapper');
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${translateValue}vw)`;
  }

  
  setInterval(nextSlide, 5000);
