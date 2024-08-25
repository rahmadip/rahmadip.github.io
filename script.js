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