document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    searchBar.className = 'mx-auto max-w-screen-xl paddingY';
    const searchIndex = document.createElement('input');
    searchIndex.id = 'searchIndex';
    searchIndex.className = 'paddingX w-full focus:outline-none textPDesc text-base';
    searchIndex.type = 'text';
    searchIndex.autocomplete = 'off';
    searchIndex.placeholder = 'search . . . ';
    searchBar.appendChild(searchIndex);
    
    const gridCanvas = document.getElementById('gridCanvas');
    gridCanvas.className = 'mx-auto max-w-screen-xl my-0.5';
    const gridProject = document.createElement('div');
    gridProject.id = 'gridProject';
    gridProject.className = 'min-w-full grid grid-cols-3 lg:grid-cols-4 gap-0.5';
    gridCanvas.appendChild(gridProject);

    let allProjects = [];

    async function loadProjects() {
        try {
            gridProject.innerHTML = '<p class="textH2Tagline col-span-3 text-start paddingX">Try to load projects.</p>';
            const { data, error } = await db
                .from('project')
                .select('*')
                .order('uniqueId', { ascending: false });

            if (error) {
                throw new Error('Failed to fetch data from database: ' + error.message);
            }

            allProjects = data;
            displayProjects(allProjects);
            
            searchIndex.addEventListener('input', () => {
                filterProjects(searchIndex.value);
            });
        } catch (error) {
            console.error('Data or script error:', error);
            gridProject.innerHTML = '<p class="textH2Tagline col-span-3 text-start paddingX">Failed to load projects.</p>';
        }
    }

    function displayProjects(projectsToDisplay) {
        gridProject.innerHTML = '';

        if (projectsToDisplay.length === 0) {
            gridProject.innerHTML = '<p class="textH2Tagline col-span-3 text-start paddingX">No projects found matching your search.</p>';
            return;
        }
        projectsToDisplay.forEach(project => {
            const projectLink = document.createElement('a');
            projectLink.href = `./page/project.html?id=${project.id}`;

            if (project.thumbnailClass) {projectLink.className = project.thumbnailClass.trim();}

            if (project.thumbnail) {
                const url = project.thumbnail;
                const extension = url.split('.').pop().toLowerCase();

                if (['mp4', 'webm'].includes(extension)) {
                    const videoElement = document.createElement('video');
                    videoElement.src = url;
                    videoElement.autoplay = true;
                    videoElement.loop = true;
                    videoElement.muted = true;
                    videoElement.playsInline = true;
                    videoElement.className = 'w-full h-full object-cover';
                    projectLink.appendChild(videoElement);
                } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
                    const imageElement = document.createElement('img');
                    imageElement.src = url;
                    imageElement.loading = 'lazy';
                    imageElement.alt = `Thumbnail ${project.titleProject || project.title}`;
                    imageElement.className = 'w-full h-full object-cover';
                    projectLink.appendChild(imageElement);
                } else {
                    const webElement = document.createElement('img');
                    webElement.src = url;
                    webElement.loading = 'lazy';
                    webElement.alt = `Thumbnail ${project.titleProject || project.title}`;
                    webElement.className = 'w-full h-full object-cover';
                    projectLink.appendChild(webElement);
                }
            } else {
                projectLink.innerHTML = project.titleProject || project.titleHead;
            }
            gridProject.appendChild(projectLink);
        });
    }

    function filterProjects(searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const filtered = allProjects.filter(project => {
            if (project.id && project.id.toLowerCase().includes(lowerCaseSearchTerm)) {return true;}
            if (project.titleProject && project.titleProject.toLowerCase().includes(lowerCaseSearchTerm)) {return true;}
            if (project.tagsProject && Array.isArray(project.tagsProject)) {
                return project.tagsProject.some(tag => String(tag).toLowerCase().includes(lowerCaseSearchTerm));
            }
            return false;
        });
        displayProjects(filtered);
    }

    loadProjects();
});