/**
 * Update grid slide content based on radio option or swipe with smooth transition
 */
function updateGridContent() {
  const gridSlide = document.getElementById('gridSlide');
  const selectedGridOption = document.querySelector('input[name="GridOption"]:checked');

  // Add smooth transition for non-swipe movements
  gridSlide.style.transition = 'transform 0.5s ease-in-out';

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

/**
 * Sync radio button with slide position
 */
function syncRadioButton(position) {
  const radioProject = document.querySelector('input[value="GridOptionProject"]');
  const radioPhoto = document.querySelector('input[value="GridOptionPhoto"]');
  if (position === 0) {
    radioProject.checked = true;
  } else {
    radioPhoto.checked = true;
  }
}

/**
 * Handle touch interactions
 */
function setupTouch() {
  const gridSlide = document.getElementById('gridSlide');
  let isSwiping = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationFrameId = null;

  // Get current translateX value
  function getTranslateX() {
    const style = window.getComputedStyle(gridSlide);
    const matrix = new DOMMatrix(style.transform);
    return matrix.m41; // Get translateX value in pixels
  }

  // Start swipe
  function startInteraction(event) {
    isSwiping = true;
    gridSlide.style.transition = ''; // Disable transition during swipe
    startX = event.touches[0].clientX;
    prevTranslate = getTranslateX();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  }

  // Move during swipe
  function moveInteraction(event) {
    if (!isSwiping) return;
    event.preventDefault(); // Prevent scrolling on touch
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + deltaX;

    // Use requestAnimationFrame for smoother updates
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
      gridSlide.style.transform = `translateX(${currentTranslate}px)`;
    });
  }

  // End swipe and snap to nearest grid
  function endInteraction() {
    if (!isSwiping) return;
    isSwiping = false;
    gridSlide.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    // Snap to nearest grid based on translateX
    const slideWidth = gridSlide.offsetWidth;
    const threshold = slideWidth / 4; // Snap if swiped more than 25%
    const currentX = Math.abs(currentTranslate);

    if (currentX < threshold) {
      gridSlide.style.transform = 'translateX(0%)'; // Snap to gridProject
      syncRadioButton(0);
    } else {
      gridSlide.style.transform = 'translateX(-100%)'; // Snap to gridPhoto
      syncRadioButton(-100);
    }
  }

  // Touch events
  gridSlide.addEventListener('touchstart', startInteraction);
  gridSlide.addEventListener('touchmove', moveInteraction);
  gridSlide.addEventListener('touchend', endInteraction);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateGridContent(); // Initial grid setup
  setupTouch(); // Setup touch interactions
});

// Update on radio button change
document.querySelectorAll('input[name="GridOption"]').forEach(radio => {
  radio.addEventListener('change', updateGridContent);
});