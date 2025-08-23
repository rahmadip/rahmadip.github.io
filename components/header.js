document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

        const headerContainer = document.createElement('div');
        headerContainer.className = 'mx-auto max-w-screen-xl barHHeader flexBetween rahmadipTheme';

            const backLink = document.createElement('a');
            const backIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="flexCenter w-auto h-5 object-cover" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>';
            const currentPage = window.location.pathname.split('/').pop()
            backLink.className = 'aspect-square w-fit h-full lg:hidden flexCenter transitionOpacity';
            backLink.href = 'javascript:history.back()';
            backLink.innerHTML = backIcon;
            if (currentPage === '' || currentPage === 'index.html') {
                backLink.classList.add('hidden');
            }

            const headerLogo = document.createElement('a');
            headerLogo.className = 'paddingX';
            headerLogo.href = '../index.html';
                const rahmadipLogo = document.createElement('img');
                rahmadipLogo.className = 'rahmadipLogo object-cover';
                rahmadipLogo.src = '../image/favfullicon.svg';
                rahmadipLogo.alt = 'rampadip logo';
            headerLogo.appendChild(rahmadipLogo);

            const menuIcon = document.createElement('div');
            menuIcon.className = 'aspect-square w-fit h-full lg:hidden flexCenter text-3xl sm:text-4xl transitionOpacity';
            menuIcon.innerHTML = '⋯';

            const headerNav = document.createElement('nav');
            headerNav.className = 'hidden lg:flex';
                const home = document.createElement('a');
                home.className = 'textPDesc paddingX place-content-center transitionOpacity';
                home.innerHTML = 'Home';
                home.href = '../index.html';

                const projects = document.createElement('a');
                projects.className = 'textPDesc paddingX place-content-center transitionOpacity';
                projects.innerHTML = 'Projects';
                projects.href = '../index.html#searchBar';

                const profile = document.createElement('a');
                profile.className = 'textPDesc paddingX place-content-center transitionOpacity';
                profile.innerHTML = 'Profile';
                profile.href = '../profile/profile.html';

            headerNav.append(home,projects,profile);
        headerContainer.append(backLink,headerLogo,menuIcon,headerNav);
    header.appendChild(headerContainer);

    const menuTab = document.createElement('nav');
    if (menuTab) {
        menuTab.className = 'fixed mt-2 end-2 w-48 textPDesc flex flex-col border divide-y rahmadipRounded rahmadipTheme overflow-hidden hidden lg:hidden';
        const homeTab = document.createElement('a');
        homeTab.className = 'rahmadipTheme transitionOpacity transitionColor block paddingXY';
        homeTab.innerHTML = home.innerHTML;
        homeTab.href = home.href;

        const projectsTab = document.createElement('a');
        projectsTab.className = 'rahmadipTheme transitionOpacity transitionColor block paddingXY';
        projectsTab.innerHTML = projects.innerHTML;
        projectsTab.href = projects.href;

        const profileTab = document.createElement('a');
        profileTab.className = 'rahmadipTheme transitionOpacity transitionColor block paddingXY';
        profileTab.innerHTML = profile.innerHTML;
        profileTab.href = profile.href;

        menuTab.append(homeTab,projectsTab,profileTab);
        header.appendChild(menuTab);
    }

    if (menuIcon && menuTab) {
        menuIcon.addEventListener('click', function() {
            menuTab.classList.toggle('hidden');
        });
    }
});