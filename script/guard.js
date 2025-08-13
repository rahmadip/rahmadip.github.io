document.addEventListener('contextmenu', function(e) {e.preventDefault();});
document.addEventListener('copy', function(e) {e.preventDefault();});
document.addEventListener('selectstart', function(e) {e.preventDefault();});

document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
    e.preventDefault();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.innerHTML = `
    * {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none;   /* Safari */
      -khtml-user-select: none;    /* Konqueror HTML */
      -moz-user-select: none;      /* Old versions of Firefox */
      -ms-user-select: none;       /* Internet Explorer/Edge */
      user-select: none;           /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
  `;
  document.head.appendChild(style);
});