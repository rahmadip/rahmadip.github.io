document.addEventListener("DOMContentLoaded", function () {
    fetch("/src/components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            const searchFooter = document.getElementById('searchFooter');
            const resultSpan = document.querySelector('footer span');
            if (searchFooter && resultSpan) {
                searchFooter.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        const query = e.target.value.trim().toLowerCase();
                        if      (query === 'owner') {resultSpan.textContent = 'Fauzi Rahmadi Primanto';return;}
                        else if (query === 'panggilan owner') {resultSpan.textContent = 'Oje, Ohe, Je, Jipaw, etc';return;}

                        if (query.startsWith('g!')) {
                            const command = query.slice(2).trim();
                            switch (command) {
                                case 'home'     :window.location.href = '/src/index.html';break;
                                case 'terminal' :window.location.href = 'https://rahmadip.github.io/terminal/';break;
                                case 'vimni'    :window.location.href = '/src/gridProject/MNI/viMNI/viMNI.html';break;
                                default         :resultSpan.textContent = 'command not found';
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