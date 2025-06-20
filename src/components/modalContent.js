document.addEventListener("DOMContentLoaded", function () {
    fetch("/src/components/modalContent.html")
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

                    const modalDescTitle = document.getElementById("modalDescTitle");
                    const title = link.dataset.title || "No Title";
                    const modalDescInfo = document.getElementById("modalDescInfo");
                    const description = link.dataset.description || "";
                    const modalDirection1 = document.getElementById("modalDirection1");
                    const direction1 = link.dataset.direction1 || "";
                    const href1 = link.getAttribute("data-href1") || "";
                    const modalDirection2 = document.getElementById("modalDirection2");
                    const direction2 = link.dataset.direction2 || "";
                    const href2 = link.getAttribute("data-href2") || "";
                    const modalDirection3 = document.getElementById("modalDirection3");
                    const direction3 = link.dataset.direction3 || "";
                    const href3 = link.getAttribute("data-href3") || "";
                    const modalDirectionContainer = document.getElementById("modalDirectionContainer")
                    

                    modalDescTitle.innerHTML = title;

                    modalDescInfo.innerHTML = description;
                        if (description && description !== "") {modalDescInfo.classList.remove("hidden");}
                        else {modalDescInfo.classList.add("hidden");}

                    modalDirection1.innerHTML = direction1;
                        if (direction1 && direction1 !== "") {
                            modalDirectionContainer.classList.remove("hidden");
                            modalDirection1.classList.remove("hidden");
                            modalDirection1.setAttribute("href", href1);}
                        else {modalDirection1.classList.add("hidden");
                              modalDirectionContainer.classList.add("hidden");}
                    
                    modalDirection2.innerHTML = direction2;
                        if (direction2 && direction2 !== "") {
                            modalDirection2.classList.remove("hidden");
                            modalDirection2.setAttribute("href", href2);}
                        else {modalDirection2.classList.add("hidden");}

                    modalDirection3.innerHTML = direction3;
                        if (direction3 && direction3 !== "") {
                            modalDirection3.classList.remove("hidden");
                            modalDirection3.setAttribute("href", href3);}
                        else {modalDirection3.classList.add("hidden");}

                    const imgs = link.querySelectorAll("picture img, picture video");
                    const carouselContainer = document.getElementById("carouselImages");
                    carouselContainer.innerHTML = "";

                    const innerWrapper = document.createElement("div");
                    innerWrapper.className = "flex w-full transition-transform duration-500 ease-in-out";
                    innerWrapper.style.transform = "translateX(0%)";
                    innerWrapper.style.touchAction = "pan-y";
                    carouselContainer.appendChild(innerWrapper);

                    let currentIndex = 0;

                    imgs.forEach((img) => {
                        const wrapper = document.createElement("div");
                        wrapper.className = "w-full shrink-0 m-0 p-0";

                        const clone = img.cloneNode(true);
                        clone.classList.remove("hidden");
                        clone.classList.add("object-cover", "w-full", "h-full");

                        wrapper.appendChild(clone);
                        innerWrapper.appendChild(wrapper);
                    });

                    const totalSlides = imgs.length;
                    const dotsContainer = document.getElementById("carouselDots");

                    const showSlide = (index) => {
                        innerWrapper.style.transform = `translateX(-${index * 100}%)`;
                        updateDots();
                    };

                    const updateDots = () => {
                        dots.forEach((dot, idx) => {
                            if (idx === currentIndex) {
                                dot.classList.remove("opacity-20");
                                dot.classList.add("opacity-100");
                            } else {
                                dot.classList.remove("opacity-100");
                                dot.classList.add("opacity-20");
                            }
                        });
                    };

                    // DOTS
                    dotsContainer.innerHTML = "";
                    const dots = [];

                    for (let i = 0; i < totalSlides; i++) {
                        const dot = document.createElement("button");
                        dot.className = "size-2 lg:size-3 bg-neutral-950 dark:bg-neutral-50 opacity-20 transition-opacity hover:opacity-75 cursor-pointer";
                        dot.addEventListener("click", () => {
                            currentIndex = i;
                            showSlide(currentIndex);
                        });
                        dotsContainer.appendChild(dot);
                        dots.push(dot);
                    }

                    if (totalSlides > 1) {
                        dotsContainer.classList.remove("hidden");
                        updateDots();
                    } else {
                        dotsContainer.classList.add("hidden");
                    }

                    // === Swipe + Mouse Drag Logic ===
                    let startX = 0;
                    let currentTranslate = 0;
                    let isDragging = false;

                    const startDrag = (x) => {
                        startX = x;
                        isDragging = true;
                        innerWrapper.style.transition = "none";
                    };

                    const moveDrag = (x) => {
                        if (!isDragging) return;
                        const deltaX = x - startX;
                        const translate = -currentIndex * carouselContainer.clientWidth + deltaX;

                        currentTranslate = deltaX;
                        innerWrapper.style.transform = `translateX(${translate}px)`;
                    };

                    const endDrag = () => {
                        if (!isDragging) return;
                        isDragging = false;
                        innerWrapper.style.transition = "transform 0.5s ease";

                        const threshold = carouselContainer.clientWidth * 0.4;
                        if (currentTranslate < -threshold && currentIndex < totalSlides - 1) {
                            currentIndex++;
                        } else if (currentTranslate > threshold && currentIndex > 0) {
                            currentIndex--;
                        }

                        innerWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
                        updateDots();
                    };

                    // Touch
                    innerWrapper.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX));
                    innerWrapper.addEventListener("touchmove", (e) => moveDrag(e.touches[0].clientX));
                    innerWrapper.addEventListener("touchend", endDrag);

                    // Mouse
                    innerWrapper.addEventListener("mousedown", (e) => {
                        e.preventDefault();
                        startDrag(e.clientX);
                    });

                    innerWrapper.addEventListener("mousemove", (e) => {
                        if (isDragging) moveDrag(e.clientX);
                    });

                    innerWrapper.addEventListener("mouseup", endDrag);
                    innerWrapper.addEventListener("mouseleave", () => {
                        if (isDragging) endDrag();
                    });

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