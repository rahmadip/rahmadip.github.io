(() => {
    const mediaFiles = [
        // { type: 'gif', src: '', duration: null},
        { type: 'image', src: 'assets/icip2/1.Sinar Mandala.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/2.Mang Engking.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/7.La Verre.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/8.Gardencia.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/9.GadoGado Cemara.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/10.Good Friends.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/11.RM Padang Putra Bungsu.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/12.Sultan 99 Kuliner Minang.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/13.Phuket.jpg', duration: 300},
        { type: 'image', src: 'assets/icip2/14.Mie Kangkung.jpg', duration: 300},
    ];

    const visualIcip2 = document.querySelector('.visualIcip2');

    let currentIndex = 0;

    function playNextMedia() {
        const media = mediaFiles[currentIndex];
        visualIcip2.innerHTML = '';

        if (media.type === 'video') {
            const video = document.createElement('video');
            video.src = media.src;
            video.autoplay = false;
            video.muted = true;
            video.onended = () => {
                currentIndex = (currentIndex + 1) % mediaFiles.length;
                playNextMedia();
            };
            visualIcip2.appendChild(video);
        } else if (media.type === 'gif' || media.type === 'image') {
            const img = document.createElement('img');
            img.src = media.src;

            if (media.type === 'gif') {
                img.style.width = '60%';
                img.style.height = 'auto';
                img.style.objectFit = 'cover';
            }

            visualIcip2.appendChild(img);

            const duration = media.duration || 2000;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % mediaFiles.length;
                playNextMedia();
            }, duration);
        }
    };

    playNextMedia();
})();