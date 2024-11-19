const mediaSosok = [
    { type: 'gif', src: 'assets/sosok/Sosok Logo Motion Full.gif', duration: null},
    { type: 'image', src: 'assets/sosok/1.Anthony Putihrai.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/2.Edison Manalu.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/3.ILFC.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/4.Rafif Adhikara.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/5.Choky Sitohang.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/6.Astrid Novika Pramita.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/7.Paulus Totok Lusida.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/8.Yosi Mokalu.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/9.Nofel Saleh Hilabi.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/10.Leo Giovanni.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/11.Flortje Ferra Manajang.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/12.Resa Boenard.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/13.Caezarro Rey Abishur.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/14.Taufan Akbari.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/15.Daniel Suryadi.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/16.Ria Musiawan.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/17.Didiet Maulana.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/18.Felix Daeli.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/19.Marinus Gea.jpg', duration: 300},
    { type: 'image', src: 'assets/sosok/20.Nanda Widya.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/21.Jeffey CT.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/22.Yohana Elizabeth.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/23.Cashtry Meher.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/24.Tony Wenas.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/25.Raguel Lewi.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/26.Ferro Ferizka.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/27.Okki Susanto.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/28.dr. yuliana.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/29.Guntur Subagja.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/30.Didi Riyadi.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/31.Mauren Hitipeuw.jpg', duration: 300},
    // { type: 'image', src: 'assets/sosok/32.David Susanto.jpg', duration: 300},
];

const visualSosok = document.querySelector('.visualSosok');

let currentIndex = 0;

function playNextMedia() {
    const media = mediaSosok[currentIndex];
    visualSosok.innerHTML = '';

    if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.src;
        video.autoplay = false;
        video.muted = true;
        video.onended = () => {
            currentIndex = (currentIndex + 1) % mediaSosok.length;
            playNextMedia();
        };
        visualSosok.appendChild(video);
    } else if (media.type === 'gif' || media.type === 'image') {
        const img = document.createElement('img');
        img.src = media.src;

        if (media.type === 'gif') {
            img.style.width = '60%';
            img.style.height = 'auto';
            img.style.objectFit = 'cover';
        }

        visualSosok.appendChild(img);

        const duration = media.duration || 2000;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % mediaSosok.length;
            playNextMedia();
        }, duration);
    }
};

playNextMedia();