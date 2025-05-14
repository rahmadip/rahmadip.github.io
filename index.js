// CHANGE GRID CONTENT

function updateGridContent() {
  const gridCanvas = document.getElementById('gridCanvas');
  const gridProject = document.getElementById('gridProject');
  const gridPhoto = document.getElementById('gridPhoto');
  const selectedGridOption = document.querySelector('input[name="GridOption"]:checked').value;

    if (selectedGridOption === 'GridOptionProject') {
      gridProject.classList.remove('hidden');
      gridPhoto.classList.add('hidden');
    } else if (selectedGridOption === 'GridOptionPhoto') {
      gridProject.classList.add('hidden');
      gridPhoto.classList.remove('hidden');
    }
  }

    document.addEventListener('DOMContentLoaded', updateGridContent);