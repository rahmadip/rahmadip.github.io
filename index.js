/**
 * Update grid slide content based on selected radio option with smooth transition
 */
function updateGridContent() {
  const gridSlide = document.getElementById('gridSlide');
  const selectedGridOption = document.querySelector('input[name="GridOption"]:checked');

  // Add smooth transition to gridSlide
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateGridContent);

// Update on radio button change
document.querySelectorAll('input[name="GridOption"]').forEach(radio => {
  radio.addEventListener('change', updateGridContent);
});