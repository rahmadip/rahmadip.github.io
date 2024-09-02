function showIframe(iframeId) {
    const iframes = document.querySelectorAll('main iframe');

    iframes.forEach(iframe => {
        iframe.style.display = 'none';
    });

    const selectedIframe = document.getElementById(iframeId);
    selectedIframe.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showIframe('iframe1');
});

document.getElementById('refresh').addEventListener('click', function() {
    const IconLogo = this.querySelector('.IconLogo');
    IconLogo.classList.add('spin');
  
    setTimeout(() => {
      location.reload();
    }, 1000);
  });

document.getElementById('gallery1-1').onclick = function() {
    window.top.location.href = 'gallery1-1.html';
};
