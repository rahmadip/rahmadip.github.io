function updateGridContent() {
  const gridSlide = document.getElementById('gridSlide');
  const selectedGridOption = document.querySelector('input[name="GridOption"]:checked');

  gridSlide.style.transition = 'transform 0.7s ease';

  if (!selectedGridOption) {
    gridSlide.style.transform = 'translateX(0%)';
    return;
  }

  if (selectedGridOption.value === 'GridOptionProject') {
    gridSlide.style.transform = 'translateX(0%)';
  } else if (selectedGridOption.value === 'GridOptionPhoto') {
    gridSlide.style.transform = 'translateX(-100%)';
  }
}

function enableTouchSlide() {
  const gridSlide = document.getElementById('gridSlide');
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  let isScrolling = false;

  gridSlide.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isScrolling = false;
  });

  gridSlide.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX;
    touchEndY = e.touches[0].clientY;

    const deltaX = Math.abs(touchEndX - touchStartX);
    const deltaY = Math.abs(touchEndY - touchStartY);

    if (deltaY > deltaX) {
      isScrolling = true;
    }
  });

  gridSlide.addEventListener('touchend', () => {
    if (isScrolling) return;

    const deltaX = touchEndX - touchStartX;
    const minSwipeDistance = 50;

    // Swipe ke kiri (tunjukkan gridPhoto)
    if (deltaX < -minSwipeDistance) {
      document.querySelector('input[value="GridOptionPhoto"]').checked = true;
      updateGridContent();
    }
    else if (deltaX > minSwipeDistance) {
      document.querySelector('input[value="GridOptionProject"]').checked = true;
      updateGridContent();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateGridContent();
  enableTouchSlide();
});

document.querySelectorAll('input[name="GridOption"]').forEach(radio => {
  radio.addEventListener('change', updateGridContent);
});