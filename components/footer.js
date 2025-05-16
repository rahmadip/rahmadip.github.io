document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            const searchFooter = document.getElementById('searchFooter');
            const resultSpan = document.querySelector('footer span');
            if (searchFooter && resultSpan) {
                searchFooter.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        const query = e.target.value.trim().toLowerCase();
                        if (query === 'owner') {
                            resultSpan.textContent = 'Fauzi Rahmadi Primanto';
                            return;
                    } else if (query === 'peliharaan owner') {
                            resultSpan.textContent = 'ARYOK';
                            return;
                        }

                        if (query.startsWith('g!')) {
                            const command = query.slice(2).trim();
                            switch (command) {
                                case 'google':
                                    window.location.href = 'https://google.com';
                                    break;
                                case 'home':
                                    window.location.href = '/index.html';
                                    break;
                                case 'download':
                                    window.location.href = '/Download/Download.html';
                                    break;
                                case 'mni':
                                    window.location.href = '/MNI/MNI.html';
                                    break;
                                case 'vimni':
                                    window.location.href = '/MNI/viMNI.html';
                                    break;
                                default:
                                    resultSpan.textContent = 'command not found';
                            }
                        } else {
                            resultSpan.textContent = 'command not found';
                        }
                    }
                });
            } else {
                console.error('command not found');
            }
        });
});