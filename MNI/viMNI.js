(function () {
  function setupSlider(sliderId, prevBtnId, nextBtnId) {
    const slider = document.querySelector(`#${sliderId} > div`);
    const totalSlides = slider.children.length;
    let currentIndex = 0;

    function updateSlidePosition() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.getElementById(prevBtnId).addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });

    document.getElementById(nextBtnId).addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    });

    updateSlidePosition();
  }

  // Inisialisasi sliderMotion
  setupSlider('sliderMotion', 'prevBtnMotion', 'nextBtnMotion');

  // Inisialisasi sliderSketch
  setupSlider('sliderSketch', 'prevBtnSketch', 'nextBtnSketch');
})();