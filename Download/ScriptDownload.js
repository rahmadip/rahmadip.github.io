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
        MainContent.style.display = 'block';
    } else {
        PasswordInput.value = "";
        PasswordInput.placeholder = "Wrong password!";
    }
};

// CONTENT ANIMATE

document.querySelectorAll('.toggleHeader').forEach(header => {
    header.addEventListener('click', function() {
        const contentDivs = this.parentElement.querySelectorAll('.Content');

        contentDivs.forEach(contentDiv => {
            contentDiv.classList.toggle('hidden');
        });
    });
});