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
        window.location.href = 'https://rahmadip.github.io/terminal/';
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
