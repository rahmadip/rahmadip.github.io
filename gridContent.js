/**
 * Update grid slide content based on selected radio option with smooth transition
 */
function updateGridContent() {
  const gridSlide = document.getElementById('gridSlide');
  const selectedGridOption = document.querySelector('input[name="GridOption"]:checked');

  // Add smoother transition to gridSlide
  gridSlide.style.transition = 'transform 0.7s ease'; // Increased duration to 0.7s and using ease

  // Fallback if no radio option is selected
  if (!selectedGridOption) {
    gridSlide.style.transform = 'translateX(0%)'; // Default to gridProject
    return;
  }

  // Slide to show gridProject or gridPhoto
  if (selectedGridOption.value === 'GridOptionProject') {
    gridSlide.style.transform = 'translateX(0%)';
  } else if (selectedGridOption.value === 'GridOptionPhoto') {
    gridSlide.style.transform = 'translateX(-100%)';
  }
}

// Touch slide functionality for gridSlide
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

    // Deteksi apakah gerakan lebih vertikal (scroll) atau horizontal (slide)
    const deltaX = Math.abs(touchEndX - touchStartX);
    const deltaY = Math.abs(touchEndY - touchStartY);

    // Jika gerakan lebih vertikal, tandai sebagai scroll
    if (deltaY > deltaX) {
      isScrolling = true;
    }
  });

  gridSlide.addEventListener('touchend', () => {
    if (isScrolling) return; // Abaikan jika sedang scroll vertikal

    const deltaX = touchEndX - touchStartX;
    const minSwipeDistance = 50; // Sensitivitas swipe tetap tinggi

    // Swipe ke kiri (tunjukkan gridPhoto)
    if (deltaX < -minSwipeDistance) {
      document.querySelector('input[value="GridOptionPhoto"]').checked = true;
      updateGridContent();
    }
    // Swipe ke kanan (tunjukkan gridProject)
    else if (deltaX > minSwipeDistance) {
      document.querySelector('input[value="GridOptionProject"]').checked = true;
      updateGridContent();
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateGridContent();
  enableTouchSlide(); // Aktifkan fitur touch slide
});

// Update on radio button change
document.querySelectorAll('input[name="GridOption"]').forEach(radio => {
  radio.addEventListener('change', updateGridContent);
});