document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            const currentYear = document.getElementById("currentYear");
            const copyright = document.getElementById("copyright");
            if (currentYear) {
                currentYear.innerHTML = new Date().getFullYear();
            }
            if (copyright) {
                copyright.className = "textPDesc paddingX place-content-center transitionOpacity";
                copyright.innerHTML = `Copyright&copy; ${currentYear.innerHTML}. All rights reserved.`;
            }
        });
});