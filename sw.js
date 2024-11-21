(() => {
    const mediaFiles = [
        // { type: 'gif', src: '', duration: null},
        { type: 'image', src: 'assets/sw/1.Roy Suryo.jpg', duration: 300},
        { type: 'image', src: 'assets/sw/2.Arteria Dahlan.jpg', duration: 300},
        { type: 'image', src: 'assets/sw/3.Albertina Ho.jpg', duration: 300},
        { type: 'image', src: 'assets/sw/4.Ray Rangkuti.jpg', duration: 300},
        { type: 'image', src: 'assets/sw/5.Fariz Gamal.jpg', duration: 300},
        { type: 'image', src: 'assets/sw/6.Lula Kamal.jpg', duration: 300},
        { type: 'image', src: 'assets/sw/7.Muhammad Farhan.jpg', duration: 300},
        { type: 'image', src: 'assets/sw/8.Hidayat Nur Wahid.jpg', duration: 300},
    ];

    const visualSW = document.querySelector('.visualSW');

    let currentIndex = 0;

    function playNextMedia() {
        const media = mediaFiles[currentIndex];
        visualSW.innerHTML = '';

        if (media.type === 'video') {
            const video = document.createElement('video');
            video.src = media.src;
            video.autoplay = false;
            video.muted = true;
            video.onended = () => {
                currentIndex = (currentIndex + 1) % mediaFiles.length;
                playNextMedia();
            };
            visualSW.appendChild(video);
        } else if (media.type === 'gif' || media.type === 'image') {
            const img = document.createElement('img');
            img.src = media.src;

            if (media.type === 'gif') {
                img.style.width = '60%';
                img.style.height = 'auto';
                img.style.objectFit = 'cover';
            }

            visualSW.appendChild(img);

            const duration = media.duration || 2000;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % mediaFiles.length;
                playNextMedia();
            }, duration);
        }
    };

    playNextMedia();
})();