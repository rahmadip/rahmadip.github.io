(() => {
    const mediaFiles = [
        { type: 'gif', src: 'assets/tipis2/TipisTipis Logo Motion Full.gif', duration: null},
        { type: 'image', src: 'assets/tipis2/1.Roy Suryo.jpg', duration: 300},
        { type: 'image', src: 'assets/tipis2/2.Gilbert.jpg', duration: 300},
        { type: 'image', src: 'assets/tipis2/3.Ray Rangkuti.jpg', duration: 300},
    ];

    const visualTipis2 = document.querySelector('.visualTipis2');

    let currentIndex = 0;

    function playNextMedia() {
        const media = mediaFiles[currentIndex];
        visualTipis2.innerHTML = '';

        if (media.type === 'video') {
            const video = document.createElement('video');
            video.src = media.src;
            video.autoplay = false;
            video.muted = true;
            video.onended = () => {
                currentIndex = (currentIndex + 1) % mediaFiles.length;
                playNextMedia();
            };
            visualTipis2.appendChild(video);
        } else if (media.type === 'gif' || media.type === 'image') {
            const img = document.createElement('img');
            img.src = media.src;

            if (media.type === 'gif') {
                img.style.width = '40%';
                img.style.height = 'auto';
                img.style.objectFit = 'cover';
            }

            visualTipis2.appendChild(img);

            const duration = media.duration || 2000;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % mediaFiles.length;
                playNextMedia();
            }, duration);
        }
    };

    playNextMedia();
})();