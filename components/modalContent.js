document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/modalContent.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("modalContent").innerHTML = data;
        });
});


// ini baru fungsi fetch, fungsi modalnya, tolong ditambahkan fungsi modal seperti close dll, dan permasalahan logika yang saya tulis di index.html dan modalContent.html