document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            const backLink = document.getElementById("backLink");
            const currentPage = window.location.pathname.split("/").pop();
            if (currentPage === "" || currentPage === "index.html") {
                backLink.classList.add("hidden");
            }

            const menuIcon = document.getElementById("menuIcon");
            const menuTab = document.getElementById("menuTab");

            if (menuIcon && menuTab) {
                menuIcon.addEventListener("click", function () {
                    menuTab.classList.toggle("hidden");
                });
            }
        });
});