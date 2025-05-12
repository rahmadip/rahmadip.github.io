document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
});

document.addEventListener('mousedown', function(e) {
    window.getSelection().removeAllRanges();
});

document.addEventListener('touchstart', function(e) {
    window.getSelection().removeAllRanges();
    if (e.target.tagName === 'IMG' || 
        e.target.tagName === 'VIDEO' || 
        e.target.tagName === 'SVG') {
        e.preventDefault();
    }
});

document.addEventListener('touchend', function(e) {
    if (e.target.tagName === 'IMG' || 
        e.target.tagName === 'VIDEO' || 
        e.target.tagName === 'SVG') {
        e.preventDefault();
    }
});

document.addEventListener('touchmove', function(e) {
    window.getSelection().removeAllRanges();
});