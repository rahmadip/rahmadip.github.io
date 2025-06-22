// CHANGE LOGO UTAMA

function updateLogoUtama() {
  const logoUtama = document.getElementById('logoUtama');
  const logoUtamaColor = document.getElementById('logoUtamaColor');
  const logoUtamaWhite = document.getElementById('logoUtamaWhite');
  const selectedOptionLogoUtama = document.querySelector('input[name="ColorOptionLogoUtama"]:checked').value;


  logoUtama.className = 'col-span-2 sm:col-span-5 lg:col-span-5 aspect-3/2 h-full w-full overflow-hidden flex justify-center items-center';

    if (selectedOptionLogoUtama === 'ColorWhiteLogoUtama') {
      logoUtama.classList.add('bg-[#f9f9f9]');
      logoUtamaColor.classList.remove('hidden');
      logoUtamaWhite.classList.add('hidden');
    } else if (selectedOptionLogoUtama === 'WhiteBlueLogoUtama') {
      logoUtama.classList.add('bg-[#003366]');
      logoUtamaColor.classList.add('hidden');
      logoUtamaWhite.classList.remove('hidden');
    } else if (selectedOptionLogoUtama === 'WhiteOrangeLogoUtama') {
      logoUtama.classList.add('bg-[#ff6600]');
      logoUtamaColor.classList.add('hidden');
      logoUtamaWhite.classList.remove('hidden');
    } else if (selectedOptionLogoUtama === 'WhiteBlackLogoUtama') {
      logoUtama.classList.add('bg-[#060606]');
      logoUtamaColor.classList.add('hidden');
      logoUtamaWhite.classList.remove('hidden');
    }
  }

    document.addEventListener('DOMContentLoaded', updateLogoUtama);



// CHANGE LOGO ALTERNATIF

function updateLogoAlternatif() {
  const logoAlternatif = document.getElementById('logoAlternatif');
  const logoAlternatifColor = document.getElementById('logoAlternatifColor');
  const logoAlternatifWhite = document.getElementById('logoAlternatifWhite');
  const selectedOptionLogoAlternatif = document.querySelector('input[name="ColorOptionLogoAlternatif"]:checked').value;


  logoAlternatif.className = 'col-span-2 sm:col-span-5 lg:col-span-5 aspect-3/2 h-full w-full overflow-hidden flex justify-center items-center';

    if (selectedOptionLogoAlternatif === 'ColorWhiteLogoAlternatif') {
      logoAlternatif.classList.add('bg-[#f9f9f9]');
      logoAlternatifColor.classList.remove('hidden');
      logoAlternatifWhite.classList.add('hidden');
    } else if (selectedOptionLogoAlternatif === 'WhiteBlueLogoAlternatif') {
      logoAlternatif.classList.add('bg-[#003366]');
      logoAlternatifColor.classList.add('hidden');
      logoAlternatifWhite.classList.remove('hidden');
    } else if (selectedOptionLogoAlternatif === 'WhiteOrangeLogoAlternatif') {
      logoAlternatif.classList.add('bg-[#ff6600]');
      logoAlternatifColor.classList.add('hidden');
      logoAlternatifWhite.classList.remove('hidden');
    } else if (selectedOptionLogoAlternatif === 'WhiteBlackLogoAlternatif') {
      logoAlternatif.classList.add('bg-[#060606]');
      logoAlternatifColor.classList.add('hidden');
      logoAlternatifWhite.classList.remove('hidden');
    }
  }

    document.addEventListener('DOMContentLoaded', updateLogoAlternatif);



// CHANGE LOGO IKON

function updateLogoIkon() {
  const logoIkon = document.getElementById('logoIkon');
  const logoIkonColor = document.getElementById('logoIkonColor');
  const logoIkonWhite = document.getElementById('logoIkonWhite');
  const selectedOptionLogoIkon = document.querySelector('input[name="ColorOptionLogoIkon"]:checked').value;


  logoIkon.className = 'col-span-2 sm:col-span-5 lg:col-span-5 aspect-3/2 h-full w-full overflow-hidden flex justify-center items-center';

    if (selectedOptionLogoIkon === 'ColorWhiteLogoIkon') {
      logoIkon.classList.add('bg-[#f9f9f9]');
      logoIkonColor.classList.remove('hidden');
      logoIkonWhite.classList.add('hidden');
    } else if (selectedOptionLogoIkon === 'WhiteBlueLogoIkon') {
      logoIkon.classList.add('bg-[#003366]');
      logoIkonColor.classList.add('hidden');
      logoIkonWhite.classList.remove('hidden');
    } else if (selectedOptionLogoIkon === 'WhiteOrangeLogoIkon') {
      logoIkon.classList.add('bg-[#ff6600]');
      logoIkonColor.classList.add('hidden');
      logoIkonWhite.classList.remove('hidden');
    } else if (selectedOptionLogoIkon === 'WhiteBlackLogoIkon') {
      logoIkon.classList.add('bg-[#060606]');
      logoIkonColor.classList.add('hidden');
      logoIkonWhite.classList.remove('hidden');
    }
  }

    document.addEventListener('DOMContentLoaded', updateLogoIkon);



// CHANGE LOGO MOTION

function updateLogoMotion() {
  const logoMotion = document.getElementById('logoMotion');
  const logoMotionColorWhite = document.getElementById('logoMotionColorWhite');
  const logoMotionWhiteBlue = document.getElementById('logoMotionWhiteBlue');
  const logoMotionWhiteOrange = document.getElementById('logoMotionWhiteOrange');
  const logoMotionWhiteBlack = document.getElementById('logoMotionWhiteBlack');
  const selectedOptionLogoMotion = document.querySelector('input[name="ColorOptionLogoMotion"]:checked').value;


  logoMotion.className = 'aspect-16/9 flex justify-center items-center overflow-hidden';

    if (selectedOptionLogoMotion === 'ColorWhiteLogoMotion') {
      logoMotion.classList.add('bg-[#f9f9f9]');
      logoMotionColorWhite.classList.remove('hidden');
      logoMotionWhiteBlue.classList.add('hidden');
      logoMotionWhiteOrange.classList.add('hidden');
      logoMotionWhiteBlack.classList.add('hidden');
    } else if (selectedOptionLogoMotion === 'WhiteBlueLogoMotion') {
      logoMotion.classList.add('bg-[#003366]');
      logoMotionColorWhite.classList.add('hidden');
      logoMotionWhiteBlue.classList.remove('hidden');
      logoMotionWhiteOrange.classList.add('hidden');
      logoMotionWhiteBlack.classList.add('hidden');
    } else if (selectedOptionLogoMotion === 'WhiteOrangeLogoMotion') {
      logoMotion.classList.add('bg-[#ff6600]');
      logoMotionColorWhite.classList.add('hidden');
      logoMotionWhiteBlue.classList.add('hidden');
      logoMotionWhiteOrange.classList.remove('hidden');
      logoMotionWhiteBlack.classList.add('hidden');
    } else if (selectedOptionLogoMotion === 'WhiteBlackLogoMotion') {
      logoMotion.classList.add('bg-[#060606]');
      logoMotionColorWhite.classList.add('hidden');
      logoMotionWhiteBlue.classList.add('hidden');
      logoMotionWhiteOrange.classList.add('hidden');
      logoMotionWhiteBlack.classList.remove('hidden');
    }
  }

    document.addEventListener('DOMContentLoaded', updateLogoMotion);



// CHANGE LOGO KONTRUKSI

function updateLogoKontruksi() {
  const logoKontruksi = document.getElementById('logoKontruksi');
  const logoKontruksiUtama = document.getElementById('logoKontruksiUtama');
  const logoKontruksiAlternatif = document.getElementById('logoKontruksiAlternatif');
  const logoKontruksiIkon = document.getElementById('logoKontruksiIkon');
  const selectedOptionLogoKontruksi = document.querySelector('input[name="OptionLogoKontruksi"]:checked').value;


  logoKontruksi.className = 'aspect-16/9 flex justify-center items-center overflow-hidden';

    if (selectedOptionLogoKontruksi === 'OptionLogoKontruksiUtama') {
      logoKontruksi.classList.add('bg-[#003366]');
      logoKontruksiUtama.classList.remove('hidden');
      logoKontruksiAlternatif.classList.add('hidden');
      logoKontruksiIkon.classList.add('hidden');
    } else if (selectedOptionLogoKontruksi === 'OptionLogoKontruksiAlternatif') {
      logoKontruksi.classList.add('bg-[#003366]');
      logoKontruksiUtama.classList.add('hidden');
      logoKontruksiAlternatif.classList.remove('hidden');
      logoKontruksiIkon.classList.add('hidden');
    } else if (selectedOptionLogoKontruksi === 'OptionLogoKontruksiIkon') {
      logoKontruksi.classList.add('bg-[#003366]');
      logoKontruksiUtama.classList.add('hidden');
      logoKontruksiAlternatif.classList.add('hidden');
      logoKontruksiIkon.classList.remove('hidden');
    }
  }

    document.addEventListener('DOMContentLoaded', updateLogoKontruksi);



    
// INFINITE LOOP

// === SLIDER KIRI (bergerak ke kiri) ===
const trackL = document.querySelector('.sliderTrackL');
let offsetL = 0;
let isPausedL = false;

trackL.addEventListener('mouseenter', () => isPausedL = true);
trackL.addEventListener('mouseleave', () => isPausedL = false);
trackL.addEventListener('touchstart', () => isPausedL = true);
trackL.addEventListener('touchend', () => isPausedL = false);

function loopL() {
  if (!isPausedL) {
    offsetL -= 1;
    trackL.style.transition = 'none';
    trackL.style.transform = `translateX(${offsetL}px)`;

    const firstL = trackL.children[0];
    const firstWidthL = firstL.offsetWidth;

    if (Math.abs(offsetL) >= firstWidthL) {
      trackL.appendChild(firstL);
      offsetL += firstWidthL;
      trackL.style.transition = 'none';
      trackL.style.transform = `translateX(${offsetL}px)`;
      trackL.appendChild(firstL);
    }
  }

  requestAnimationFrame(loopL);
}

loopL();


// === SLIDER KANAN (bergerak ke kanan) ===

const trackR = document.querySelector('.sliderTrackR');
let offsetR = 0;
let isPausedR = false;

trackR.addEventListener('mouseenter', () => isPausedR = true);
trackR.addEventListener('mouseleave', () => isPausedR = false);
trackR.addEventListener('touchstart', () => isPausedR = true);
trackR.addEventListener('touchend', () => isPausedR = false);

function loopR() {
  if (!isPausedR) {
    offsetR += 1;
    trackR.style.transition = 'none';
    trackR.style.transform = `translateX(${offsetR}px)`;

    const firstR = trackR.children[0];
    const firstWidthR = firstR.offsetWidth;

    if (Math.abs(offsetR) >= firstWidthR) {
      trackR.appendChild(firstR);
      offsetR -= firstWidthR;
      trackR.style.transition = 'none';
      trackR.style.transform = `translateX(${offsetR}px)`;
      trackR.appendChild(firstR);
    }
  }

  requestAnimationFrame(loopR);
}

loopR();


// RANDOM COLOR GRAPHIC

  const boxes = document.querySelectorAll('.randomColorBox');
  const colors = ['#003366', '#ff6600', '#060606', '#006633', '#ff9900', '#990000', '#663300'];

  function getRandomColor() {return colors[Math.floor(Math.random() * colors.length)];}

  boxes.forEach(box => {
    // Saat hover (mouseenter)
    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = getRandomColor();
    });

    // Saat klik (active)
    box.addEventListener('mousedown', () => {
      box.style.backgroundColor = getRandomColor();
    });

    // Saat hover berakhir / mouse keluar
    box.addEventListener('mouseleave', () => {
      box.style.backgroundColor = '#f9f9f9'; // kembali ke default
    });

    // Saat mouse dilepas setelah klik
    box.addEventListener('mouseup', () => {
      box.style.backgroundColor = getRandomColor();
    });
  });



// AUTOSLIDE CAROUSEL X

(function () {
  const carouselsX = document.querySelectorAll(".carouselX");

  carouselsX.forEach((carouselX) => {
    const innerX = carouselX.querySelector(".carouselInnerX");
    const slidesX = innerX.children;
    const totalX = slidesX.length;
    let indexX = 0;
    let intervalX;
    let timeoutX;

    const goToSlideX = (iX) => {
      innerX.style.transform = `translateX(-${iX * 100}%)`;
    };

    const startX = () => {
      const delayX = Math.floor(Math.random() * 5000);

      timeoutX = setTimeout(() => {
        intervalX = setInterval(() => {
          indexX = (indexX + 1) % totalX;
          goToSlideX(indexX);
        }, 3000);
      }, delayX);
    };

    const stopX = () => {
      clearInterval(intervalX);
      clearTimeout(timeoutX);
    };

    carouselX.addEventListener("mouseenter", stopX);
    carouselX.addEventListener("mouseleave", startX);

    startX();
  });
})();



// AUTOSLIDE CAROUSEL Y

(function () {
  const carouselsY = document.querySelectorAll(".carouselY");

  carouselsY.forEach((carouselY) => {
    const innerY = carouselY.querySelector(".carouselInnerY");
    const slidesY = innerY.children;
    const totalY = slidesY.length;
    let indexY = 0;
    let intervalY;
    let timeoutY;

    const goToSlideY = (iY) => {
      innerY.style.transform = `translateY(-${iY * 100}%)`;
    };

    const startY = () => {
      const delayY = Math.floor(Math.random() * 5000);

      timeoutY = setTimeout(() => {
        intervalY = setInterval(() => {
          indexY = (indexY + 1) % totalY;
          goToSlideY(indexY);
        }, 3000);
      }, delayY);
    };

    const stopY = () => {
      clearInterval(intervalY);
      clearTimeout(timeoutY);
    };

    carouselY.addEventListener("mouseenter", stopY);
    carouselY.addEventListener("mouseleave", startY);

    startY();
  });
})();