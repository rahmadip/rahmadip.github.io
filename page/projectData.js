const mainCanvas = document.getElementById('mainCanvas');

async function getProjectData(projectId) {
    const { data: projects, error } = await db
        .from('project')
        .select('*');
    if (error) {
        mainCanvas.className = "mx-auto max-w-screen-xl h-[calc(100dvh-8rem)] rahmadipTheme flex flex-col justify-center"
        mainCanvas.innerHTML = `<p class="textH2Tagline">Invalid data <i>${error.message}</i></p>
                                <a class="textH1Index paddingY cursor-pointer transitionOpacity" href="/src/index.html">back to home</a>`;
    }
    return projects.find(p => p.id === projectId);
}

async function getProfileData() {
    const { data, error } = await db
        .from('info')
        .select('*');
    if (error) {
        mainCanvas.className = "mx-auto max-w-screen-xl h-[calc(100dvh-8rem)] rahmadipTheme flex flex-col justify-center"
        mainCanvas.innerHTML = `<p class="textH2Tagline">Invalid data <i>${error.message}</i></p>
                                <a class="textH1Index paddingY cursor-pointer transitionOpacity" href="/src/index.html">back to home</a>`;
    }
    return data;
}