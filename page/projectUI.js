const renderMediaAndCarousel = (project) => {
    const mediaData = project.mediaProject;
    const projectTitle = project.titleProject;

    const mainCanvas = document.getElementById('mainCanvas');
    mainCanvas.className = 'hidden mx-auto max-w-screen-xl flex flex-col rahmadipTheme z-70 lg:flex-row lg:border lg:rounded-md lg:overflow-hidden lg:w-fit';

    const mediaCanvas = document.getElementById('mediaCanvas');
    mediaCanvas.className = 'flex z-50 overflow-x-auto no-scrollbar scroll-smooth';

    const descCanvas = document.getElementById('descCanvas');
    descCanvas.className = 'lg:w-md lg:shrink-0 lg:border-l flex flex-col paddingB rahmadipTheme z-60';

    if (mediaCanvas && mediaData && Array.isArray(mediaData) && mediaData.length > 0) {
        mediaCanvas.innerHTML = '';
        const mediaCount = mediaData.length;

        mediaData.forEach((mediaUrl) => { 
            const extension = mediaUrl.split('.').pop().toLowerCase();
            let mediaElement;
            if (['mp4', 'webm', 'ogg'].includes(extension)) {
                mediaElement = document.createElement('video');
                mediaElement.src = mediaUrl;
                mediaElement.autoplay = true;
                mediaElement.muted = true;
                mediaElement.loop = true;
                mediaElement.playsInline = true;
                mediaElement.controls = false;
                mediaElement.className = "lg:max-h-[calc(100dvh-9rem)] w-auto h-auto shrink-0 object-cover";
            } else if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension)) {
                mediaElement = document.createElement('img');
                mediaElement.src = mediaUrl;
                mediaElement.alt = `Media for ${projectTitle}`;
                mediaElement.className = "lg:max-h-[calc(100dvh-9rem)] w-auto h-auto shrink-0 object-cover";
                mediaElement.loading = 'lazy';
            } else {
                console.warn(`Unknown media type for ${projectTitle}: ${mediaUrl}`);
                return;
            }

            mediaCanvas.appendChild(mediaElement);
        });

        const carouselContainer = document.getElementById('carouselContainer');
        if (mediaCount > 1) {
            const firstElement = mediaCanvas.firstElementChild;
            if (firstElement) {
                const setCanvasWidth = () => {
                    if (window.matchMedia('(min-width: 1024px)').matches) {
                        mediaCanvas.style.width = firstElement.offsetWidth + 'px';
                    } else {
                        mediaCanvas.style.width = '';
                    }
                };
                if (firstElement.tagName.toLowerCase() === 'img') {
                    firstElement.addEventListener('load', setCanvasWidth);
                }
                else if (firstElement.tagName.toLowerCase() === 'video') {
                    firstElement.addEventListener('loadedmetadata', setCanvasWidth);
                }
                let resizeTimer;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(setCanvasWidth, 150);
                });
            }

            if (carouselContainer) {
                carouselContainer.className = 'flexCenter gap-1 paddingT lg:order-last';

                const prevButton = document.createElement('button');
                const iconPrev = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="flexCenter w-auto h-full object-cover" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>`;
                prevButton.innerHTML = iconPrev;
                prevButton.className = 'transitionOpacity hidden lg:block size-5';

                const nextButton = document.createElement('button');
                const iconNext = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="flexCenter w-auto h-full object-cover" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>`;
                nextButton.innerHTML = iconNext;
                nextButton.className = 'transitionOpacity hidden lg:block size-5';

                const containerDots = document.createElement('div');
                containerDots.className = 'w-fit flexCenter gap-1 lg:gap-2';
                const dots = [];
                mediaData.forEach((_,index) => {
                    const dot = document.createElement('span');
                    dot.className = "size-2 lg:size-3 bg-neutral-50/30 cursor-pointer rounded-full transition duration-300 ease-in-out hover:bg-neutral-50";
                    dots.push(dot);
                    dot.addEventListener('click', () => {
                        if (!firstElement) return;

                        const itemWidth = firstElement.offsetWidth;
                        const targetLeft = window.matchMedia('(min-width: 1024px)').matches
                            ? index * itemWidth
                            : mediaCanvas.children[index].offsetLeft;

                        if (Math.abs(mediaCanvas.scrollLeft - targetLeft) > 1) {
                            mediaCanvas.scrollTo({ left: targetLeft, behavior: 'smooth' });
                        }
                        updateActiveDot(index);
                    });
                    containerDots.appendChild(dot);
                });

                function updateActiveDot(activeIndex) {
                    dots.forEach((dot,i) => {
                        if (i === activeIndex) {
                            dot.classList.add('size-3','lg:size-4','bg-neutral-50');
                            dot.classList.remove('size-2','lg:size-3','bg-neutral-50/30');
                        } else {
                            dot.classList.add('size-2','lg:size-3','bg-neutral-50/30');
                            dot.classList.remove('size-3','lg:size-4','bg-neutral-50');
                        }
                    });
                }
                updateActiveDot(0);
                let currentIndex = 0;
                prevButton.addEventListener('click', () => {
                    if (!firstElement) return;
                    const step = firstElement.offsetWidth;
                    currentIndex = Math.max(0, currentIndex - 1);
                    mediaCanvas.scrollTo({
                        left: currentIndex * step,
                        behavior: 'smooth'
                    });
                    updateActiveDot(currentIndex);
                });
                nextButton.addEventListener('click', () => {
                    if (!firstElement) return;
                    const step = firstElement.offsetWidth;
                    currentIndex = Math.min(dots.length - 1, currentIndex + 1);
                    mediaCanvas.scrollTo({
                        left: currentIndex * step,
                        behavior: 'smooth'
                    });
                    updateActiveDot(currentIndex);
                });
                function getVisibleIndex() {
                    if (!firstElement) return 0;
                    const itemWidth = firstElement.offsetWidth || 1;
                    let idx = Math.round(mediaCanvas.scrollLeft / itemWidth);
                    idx = Math.max(0, Math.min(idx, dots.length -1 ));
                    return idx;
                }
                let ticking = false;
                mediaCanvas.addEventListener('scroll', () => {
                    if (!ticking) {
                        window.requestAnimationFrame(() => {
                            const visibleIndex = getVisibleIndex();
                            currentIndex = visibleIndex;
                            updateActiveDot(visibleIndex);
                            ticking = false;
                        });
                        ticking = true;
                    }
                });
                mediaCanvas.addEventListener('wheel', (e) => {
                    e.preventDefault();
                    mediaCanvas.scrollBy({
                        left: e.deltaY * 3.5,
                        behavior: 'smooth'
                    });
                }, { passive: false });

                carouselContainer.append(prevButton,containerDots,nextButton);
            }
 
        } else {
            if (carouselContainer) {
                carouselContainer.innerHTML = '';
                carouselContainer.className = 'hidden';
            }
        }
    }
}

const renderProjectInfo = (project) => {
    const titleHead = document.getElementById('titleHead');
    titleHead.innerHTML = `rahmadip | ${project.titleHead || 'untitled'}`;

    const projectInfo = document.getElementById('projectInfo');
    projectInfo.className = 'lg:h-full';

    const projectTitle = document.createElement('h1');
    projectTitle.id = 'projectTitle';
    projectTitle.innerHTML = project.titleProject || '';
    projectTitle.className = project.titleProject ? "paddingX paddingT textH1Title" : "hidden";

    const projectDescription = document.createElement('p');
    projectDescription.id = 'projectDescription';
    projectDescription.innerHTML = project.descriptionProject || '';
    projectDescription.className = project.descriptionProject ? "paddingX textPDesc transitionOpacity" : "hidden";

    const projectTagsContainer = document.createElement('div');
    projectTagsContainer.id = 'projectTagsContainer';
    const tagsData = project.tagsProject;
    if (projectTagsContainer && tagsData && Array.isArray(tagsData) && tagsData.length > 0 ) {
        projectTagsContainer.innerHTML = '';
        projectTagsContainer.className = 'paddingX flex gap-1';
        tagsData.forEach(tagsText => {
            const tagsElement = document.createElement('p');
            tagsElement.innerHTML = `#${tagsText}`;
            tagsElement.className = 'textPDesc transitionOpacity cursor-pointer italic';
            projectTagsContainer.appendChild(tagsElement);
        });
    } else {
        projectTagsContainer.innerHTML = '';
        projectTagsContainer.className = 'hidden';
    }

    const projectLinksContainer = document.createElement('div');
    projectLinksContainer.id = 'projectLinkContainer';
    const linkData = project.linkProject;
    if (projectLinksContainer && linkData && Array.isArray(linkData) && linkData.length > 0) {
        projectLinksContainer.innerHTML = '';
        projectLinksContainer.classList = 'paddingX paddingT flexStart gap-2';

        const moreDetails = document.createElement('p');
        moreDetails.innerHTML = 'More details:';
        moreDetails.className = 'textPDesc';
        projectLinksContainer.appendChild(moreDetails);

        linkData.forEach(linkPair => {
            if (Array.isArray(linkPair) && linkPair.length >=2) {
                const linkText = linkPair[0];
                const linkHref = linkPair[1];
                const linkElement = document.createElement('a');
                linkElement.innerHTML = `${linkText} 🔗`;
                linkElement.href = linkHref;
                linkElement.className = "textPDesc transitionOpacity";
                linkElement.target = '_blank';
                linkElement.rel = 'noopener noreferrer';
                projectLinksContainer.appendChild(linkElement);
            }
        });
    } else {
        projectLinksContainer.innerHTML = '';
        projectLinksContainer.className = 'hidden';
    }

    projectInfo.append(projectTitle,projectDescription,projectTagsContainer,projectLinksContainer);
}

const renderHeader = (profile) => {
    const headerCanvas = document.getElementById('headerCanvas');
    headerCanvas.className = 'hidden lg:flex flex-row items-center justify-between paddingX paddingT paddingB border-b rahmadipTheme';

    const profileSection = document.createElement('a');
    profileSection.id = 'profileSection';
    profileSection.className = 'flexCenter gap-3';
    profileSection.innerHTML = '';
    profileSection.href = '../profile/profile.html';

    if (profileSection) {
        const photoFrame = document.createElement('div');
        photoFrame.id = 'photoFrame';
        photoFrame.className = 'border rounded-full size-13 rahmadipTheme overflow-hidden flexCenter';

        const photoProfile = document.createElement('img');
        photoProfile.id = 'photoProfile';
        photoProfile.className = 'w-full h-full object-cover transitionBnW';
        photoProfile.src = profile.photo;
        photoProfile.alt = "Photo Profile";
        photoProfile.loading = 'lazy';
        photoFrame.appendChild(photoProfile);

        const profileInfo = document.createElement('div');
        if (profileInfo) {
            const nameProfile = document.createElement('h2');
            nameProfile.className = 'textH3Title'
            nameProfile.innerHTML = profile.fullName || 'Name data not found';

            const occupationProfile = document.createElement('p');
            occupationProfile.className = 'textPDesc transitionOpacity';
            occupationProfile.innerHTML = profile.occupation || 'Occupation data not found';

            profileInfo.append(nameProfile,occupationProfile);
        }

        profileSection.append(photoFrame,profileInfo);
    }

    const closeButton = document.createElement('a');
    const iconClose = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="size-5" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>`;
    closeButton.id = 'closeButton';
    closeButton.classList = 'text-xl flexCenter transitionOpacity';
    closeButton.innerHTML = iconClose;
    closeButton.href = 'javascript:history.back()';

    headerCanvas.append(profileSection,closeButton)
}