document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const loadingScreen = document.getElementById('loadingScreen');

    try {
        const profile = await getProfileData();
        const project = await getProjectData(projectId);
        renderMediaAndCarousel(project);
        renderProjectInfo(project);
        renderHeader(profile);
        loadingScreen.classList.add('hidden');
        mainCanvas.classList.remove('hidden');
    } catch (error) {
        loadingScreen.innerHTML = '';
        loadingScreen.className = 'mx-auto lg:max-w-screen-xl max-h-[calc(100dvh-8rem)] h-dvh flex flex-col justify-center';
        loadingScreen.innerHTML = `<p class="textH2Tagline">Error catch data<br><i>${error.message}</i></p>
                                   <a class="textH1Index paddingY cursor-pointer transitionOpacity" href="../index.html">back to home</a>`;  
    }
});