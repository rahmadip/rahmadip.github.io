document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/modalContent.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("modalContent").innerHTML = data;

            const modalBg = document.getElementById("modalBg");
            modalBg.classList.add("hidden");

            const closeButton = document.getElementById("modalClose");
            closeButton.addEventListener("click", function () {
                modalBg.classList.add("hidden");
                document.body.classList.remove("overflow-hidden");
            });

            const projectLinks = document.querySelectorAll("#gridProject a, #gridPhoto a");
            projectLinks.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault();

                    const modalDescDetails = document.getElementById("modalDescDetails");
                    const linkHref = link.getAttribute("href");
                    if (linkHref && linkHref !== "") {
                        modalDescDetails.setAttribute("href", linkHref);
                        modalDescDetails.classList.remove("hidden");
                    } else {
                        modalDescDetails.classList.add("hidden");
                    }

                    const modalDescTitle = document.getElementById("modalDescTitle");
                    const modalDescInfo = document.getElementById("modalDescInfo");
                    const title = link.dataset.title || "No Title";
                    const description = link.dataset.description || "";

                    modalDescTitle.textContent = title;
                    modalDescInfo.textContent = description;
                    if (description && description !== "") {
                        modalDescInfo.classList.remove("hidden");
                    } else {
                        modalDescInfo.classList.add("hidden");
                    }

                    // === START Carousel Logic ===
                    const imgs = link.querySelectorAll("img");
                    const carouselContainer = document.getElementById("carouselImages");
                    carouselContainer.innerHTML = ""; // Kosongkan

                    const innerWrapper = document.createElement("div");
                    innerWrapper.className = "flex w-full transition-transform duration-500 ease-in-out";
                    innerWrapper.style.transform = "translateX(0%)";
                    carouselContainer.appendChild(innerWrapper);

                    let currentIndex = 0;

                    imgs.forEach((img) => {
                        const wrapper = document.createElement("div");
                        wrapper.className = "w-full shrink-0 flex justify-center items-center";

                        const clone = img.cloneNode(true);
                        clone.classList.remove("hidden");
                        clone.classList.add("object-cover", "w-full", "h-auto");

                        wrapper.appendChild(clone);
                        innerWrapper.appendChild(wrapper);
                    });

                    const totalSlides = imgs.length;
                    const prevBtn = document.getElementById("carouselPrev");
                    const nextBtn = document.getElementById("carouselNext");

                    const showSlide = (index) => {
                        innerWrapper.style.transform = `translateX(-${index * 100}%)`;
                    };

                    prevBtn.onclick = () => {
                        if (totalSlides < 2) return;
                        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                        showSlide(currentIndex);
                    };

                    nextBtn.onclick = () => {
                        if (totalSlides < 2) return;
                        currentIndex = (currentIndex + 1) % totalSlides;
                        showSlide(currentIndex);
                    };

                    if (totalSlides > 1) {
                        prevBtn.classList.remove("hidden");
                        nextBtn.classList.remove("hidden");
                    } else {
                        prevBtn.classList.add("hidden");
                        nextBtn.classList.add("hidden");
                    }
                    // === END Carousel Logic ===

                    modalBg.classList.remove("hidden");
                    document.body.classList.add("overflow-hidden");
                });
            });

            modalBg.addEventListener("click", function (event) {
                if (event.target === modalBg) {
                    modalBg.classList.add("hidden");
                    document.body.classList.remove("overflow-hidden");
                }
            });
        });
});
