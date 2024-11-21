(() => {
    const mediaFiles = [
        { type: 'gif', src: '', duration: null},
        { type: 'image', src: '', duration: 300},
    ];

    const visualProduct = document.querySelector('.visualProduct');

    let currentIndex = 0;

    function playNextMedia() {
        const media = mediaFiles[currentIndex];
        visualProduct.innerHTML = '';

        if (media.type === 'video') {
            const video = document.createElement('video');
            video.src = media.src;
            video.autoplay = false;
            video.muted = true;
            video.onended = () => {
                currentIndex = (currentIndex + 1) % mediaFiles.length;
                playNextMedia();
            };
            visualProduct.appendChild(video);
        } else if (media.type === 'gif' || media.type === 'image') {
            const img = document.createElement('img');
            img.src = media.src;

            if (media.type === 'gif') {
                img.style.width = '60%';
                img.style.height = 'auto';
                img.style.objectFit = 'cover';
            }

            visualProduct.appendChild(img);

            const duration = media.duration || 2000;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % mediaFiles.length;
                playNextMedia();
            }, duration);
        }
    };

    playNextMedia();
})();