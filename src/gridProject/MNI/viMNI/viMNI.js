// CHANGE LOGO UTAMA

function updateLogoUtama() {
  const logoUtama = document.getElementById('logoUtama');
  const logoUtamaColor = document.getElementById('logoUtamaColor');
  const logoUtamaWhite = document.getElementById('logoUtamaWhite');
  const selectedOptionLogoUtama = document.querySelector('input[name="ColorOptionLogoUtama"]:checked').value;


  logoUtama.className = 'aspect-16/9 flex justify-center items-center overflow-hidden';

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


  logoAlternatif.className = 'aspect-16/9 flex justify-center items-center overflow-hidden';

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


  logoIkon.className = 'aspect-16/9 flex justify-center items-center overflow-hidden';

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



// CHANGE FONT

function changeFont(fontName) {
  document.getElementById('changeFont').style.fontFamily = `'${fontName}', sans-serif`;

  document.getElementById('fontName').textContent = fontName;

  const fontType = fontName === 'STIX Two Text' ? 'Serif' : 'Sans Serif';
  document.getElementById('fontType').textContent = fontType;
}

document.addEventListener('DOMContentLoaded', function () {
  changeFont('Poppins');
});