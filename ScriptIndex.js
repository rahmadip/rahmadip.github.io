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
const Tabs = [Tab1, Tab2, Tab3];

let startX = 0;
let endX = 0;
let currentIndex = 0;

function showGallery(index) {
    const offset = -index * 100;
    GalleryContainer.style.transform = `translateX(${offset}%)`;

    activateTab(Tabs[index]);
}

function activateTab(tab) {
    Tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
}

Tab1.addEventListener('click', function() {
    currentIndex = 0;
    showGallery(currentIndex);
    activateTab(Tab1);
});

Tab2.addEventListener('click', function() {
    currentIndex = 1;
    showGallery(currentIndex);
    activateTab(Tab2);
});

Tab3.addEventListener('click', function() {
    currentIndex = 2;
    showGallery(currentIndex);
    activateTab(Tab3);
});

function handleSwipe() {
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
        if (deltaX < 0) {
            if (currentIndex < Tabs.length - 1) {
                currentIndex++;
            }
        } else {
            if (currentIndex > 0) {
                currentIndex--;
            }
        }
        showGallery(currentIndex);
    }
}

GalleryContainer.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

GalleryContainer.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
});

showGallery(currentIndex);

document.addEventListener('DOMContentLoaded', function() {
    showGallery(0);
    activateTab(Tab1);
});