// ANIMATE NAVBAR

const logoContainer = document.getElementById('LogoContainer');

logoContainer.addEventListener('click', () => {
    window.location.href = 'Index.html';
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

// MODAL CONST

const Modal = document.getElementById('Modal');
const ModalPage= document.getElementById('ModalPage');
const ModalImage = document.getElementById('ModalImage');
const MessageBox = document.getElementById('MessageBox');
const CloseModal = document.getElementById('CloseModal');
const Button1 = document.getElementById('Button1');
const GalleryArticles = document.querySelectorAll('.GalleryProject1 article, .GalleryProject2 article, .GalleryProject3 article');

// MODAL MESSAGE

Button1.addEventListener('click', function() {
    Modal.classList.add('show');
    Modal.style.display = 'flex';
    Modal.style.justifyContent = 'center';
    Modal.style.backgroundColor = '#050505ee';
    MessageBox.style.display = 'flex';
    ModalPage.style.display = 'none';
    ModalImage.style.display = 'none';
    CloseModal.style.display = 'flex';
});

// MODAL PAGE

// function openModal(htmlFile) {
//     loadHTML(htmlFile, 'ModalPage');
// }

// function loadHTML(url, elementId) {
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//         })
//         .catch(error => console.error('Error loading HTML:', error));
// }

// GalleryArticles.forEach(article => {
//     article.addEventListener('click', function() {
//         const htmlFile = this.getAttribute('data-html');
//         openModal(htmlFile);
//         Modal.style.display = 'flex';
//         MessageBox.style.display = 'none';
//         ModalImage.style.display = 'none';
//         CloseModal.style.display = 'flex';
//     });
// });

// MODAL ARTICLE

GalleryArticles.forEach(article => {
    article.addEventListener('click', function() {
        const imgSrc = article.querySelector('imgP').src;
        ModalImage.src = imgSrc;
        Modal.classList.add('show');
        Modal.style.display = 'flex';
        Modal.style.justifyContent = 'center';
        Modal.style.backgroundColor = '#FAFAFA';
        MessageBox.style.display = 'none';
        ModalPage.style.display = 'none';
        ModalImage.style.display = 'block';
        CloseModal.style.display = 'flex';
    });
});

// CLOSE MODAL

CloseModal.addEventListener('click', function() {
    Modal.classList.remove('show');
    Modal.style.display = 'none';
    CloseModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === Modal) {
        Modal.classList.remove('show');
        Modal.style.display = 'none';
        CloseModal.style.display = 'none';
    }
});