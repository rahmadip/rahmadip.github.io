// SLIDE

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

  setupSlider('sliderMotion', 'prevBtnMotion', 'nextBtnMotion');
  setupSlider('sliderSketch', 'prevBtnSketch', 'nextBtnSketch');
})();



// CHANGE FONT

function changeFont(fontName) {
  document.getElementById('changeFont').style.fontFamily = `'${fontName}', sans-serif`;

  document.getElementById('fontName').textContent = fontName;

  const fontType = fontName === 'STIX Two Text' ? 'Serif' : 'Sans Serif';
  document.getElementById('fontType').textContent = fontType;
}

document.addEventListener('DOMContentLoaded', function () {
  changeFont('Poppins');
});