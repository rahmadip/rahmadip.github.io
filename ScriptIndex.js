// ANIMATE NAVBAR

const logoContainer = document.getElementById('LogoContainer');
const arrowIcon = document.querySelector('.LogoIcon');

logoContainer.addEventListener('click', function() {
    logoContainer.classList.add('animate');

    arrowIcon.addEventListener('animationend', function() {
        location.reload();
    }, { once: true });
});

// SLIDE GALLERY

const Tab1 = document.querySelector('.Tab1');
const Tab2 = document.querySelector('.Tab2');
const Tab3 = document.querySelector('.Tab3');
const GalleryContainer = document.querySelector('.GalleryContainer');

function showGallery(index) {
    const offset = -index * 100;
    GalleryContainer.style.transform = `translateX(${offset}%)`;
}

Tab1.addEventListener('click', function() {
    showGallery(0);
});

Tab2.addEventListener('click', function() {
    showGallery(1);
});

Tab3.addEventListener('click', function() {
    showGallery(2);
});

showGallery(0);