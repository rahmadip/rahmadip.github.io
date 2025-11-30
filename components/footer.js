document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');

        const footerContainer = document.createElement('div');
        footerContainer.className = 'mx-auto max-w-screen-xl barHFooter flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2';

            const copyright = document.createElement('p');
            const currentYear = new Date().getFullYear();
            copyright.className = 'textPDesc paddingX place-content-center transitionOpacity';
            copyright.innerHTML = `Copyright&copy; ${currentYear}. All rights reserved.`;

            const navigation = document.createElement('nav');
            navigation.className = 'flex';
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
                profile.href = '../profile';

            navigation.append(home,projects,profile);
        footerContainer.append(copyright,navigation);
    footer.appendChild(footerContainer);
});