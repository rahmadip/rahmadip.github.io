// ANIMATE NAVBAR

const logoContainer = document.getElementById('LogoContainer');
const arrowIcon = document.querySelector('.LogoIcon');

logoContainer.addEventListener('click', function() {
    logoContainer.classList.add('animate');

    arrowIcon.addEventListener('animationend', function() {
        location.reload();
    }, { once: true });
});

// // MODAL PASSWORD

document.getElementById("PasswordInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkPassword();
    }
});

function checkPassword() {
    const password = document.getElementById('PasswordInput').value;
    const PasswordInput = document.getElementById('PasswordInput');
    const MainContent = document.getElementById('MainContent');
    const PasswordModal = document.getElementById('PasswordModal');

    if (password === 'NawacitaTV2023') {
        PasswordModal.style.display = 'none';
        MainContent.style.display = 'flex';
    } else {
        PasswordInput.value = "";
        PasswordInput.placeholder = "Wrong password!";
    }
};

document.getElementById('ButtonPassword').addEventListener('click', checkPassword);

// FOLDER

function toggleVisibility(...ids) {
    event.stopPropagation();

    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = element.style.display === "block" ? "none" : "block";
        }
    });
}
