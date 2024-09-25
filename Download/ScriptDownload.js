// ANIMATE NAVBAR

const logoContainer = document.getElementById('LogoContainer');
const arrowIcon = document.querySelector('.LogoIcon');

logoContainer.addEventListener('click', function() {
    logoContainer.classList.add('animate');

    arrowIcon.addEventListener('animationend', function() {
        location.reload();
    }, { once: true });
});