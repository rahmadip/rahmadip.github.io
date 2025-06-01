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
    // Hanya cegah default untuk <img>, <video>, atau <svg> yang bukan bagian dari <a> di #gridProject atau #modalCover
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.tagName === 'SVG') {
        if (!e.target.closest('#gridProject a, #gridPhoto a') && !e.target.closest('#modalCover')) {
            e.preventDefault();
        }
    }
}, { passive: false });

document.addEventListener('touchend', function(e) {
    // Hanya cegah default untuk <img>, <video>, atau <svg> yang bukan bagian dari <a> di #gridProject atau #modalCover
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.tagName === 'SVG') {
        if (!e.target.closest('#gridProject a, #gridPhoto a') && !e.target.closest('#modalCover')) {
            e.preventDefault();
        }
    }
}, { passive: false });

document.addEventListener('touchmove', function(e) {
    window.getSelection().removeAllRanges();
});