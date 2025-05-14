document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/modalContent.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("modalContent").innerHTML = data;

            // Set modal tersembunyi saat awal
            const modalBg = document.getElementById("modalBg");
            modalBg.classList.add("hidden");

            // Event listener untuk tombol close
            const closeButton = document.getElementById("modalClose");
            closeButton.addEventListener("click", function () {
                modalBg.classList.add("hidden");
                document.body.classList.remove("overflow-hidden"); // Kembalikan scroll
            });

            // Event listener untuk semua <a> di #gridProject
            const projectLinks = document.querySelectorAll("#gridProject a, #gridPhoto a");
            projectLinks.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Mencegah aksi default <a>
                    
                    // Ambil src dan alt dari <img> di dalam <a> yang diklik
                    const img = link.querySelector("img");
                    const imgSrc = img ? img.getAttribute("src") : "";
                    const imgAlt = img ? img.getAttribute("alt") : "";

                    // Perbarui <img> di #modalCover
                    const modalImg = document.querySelector("#modalCover img");
                    modalImg.setAttribute("src", imgSrc);
                    modalImg.setAttribute("alt", imgAlt);

                    // Ambil href dari <a> yang diklik dan perbarui #modalCover
                    const modalCover = document.getElementById("modalCover");
                    const linkHref = link.getAttribute("href");
                    if (linkHref && linkHref !== "") {
                        modalCover.setAttribute("href", linkHref);
                        modalCover.classList.remove("pointer-events-none"); // Aktifkan klik
                    } else {
                        modalCover.removeAttribute("href"); // Hapus href
                        modalCover.classList.add("pointer-events-none"); // Nonaktifkan klik
                    }

                    // Perbarui href dan visibilitas #modalDescDetails
                    const modalDescDetails = document.getElementById("modalDescDetails");
                    if (linkHref && linkHref !== "") {
                        modalDescDetails.setAttribute("href", linkHref);
                        modalDescDetails.classList.remove("hidden"); // Tampilkan
                    } else {
                        modalDescDetails.classList.add("hidden"); // Sembunyikan
                    }

                    // Perbarui teks dinamis untuk #modalDescTitle dan #modalDescInfo
                    const modalDescTitle = document.getElementById("modalDescTitle");
                    const modalDescInfo = document.getElementById("modalDescInfo");
                    const title = link.dataset.title || "No Title"; // Default jika tidak ada
                    const description = link.dataset.description || "";

                    modalDescTitle.textContent = title; // Isi judul
                    modalDescInfo.textContent = description; // Isi deskripsi
                    if (description && description !== "") {
                        modalDescInfo.classList.remove("hidden"); // Tampilkan jika ada deskripsi
                    } else {
                        modalDescInfo.classList.add("hidden"); // Sembunyikan jika deskripsi kosong
                    }

                    // Tampilkan modal
                    modalBg.classList.remove("hidden");
                    document.body.classList.add("overflow-hidden"); // Nonaktifkan scroll
                });
            });

            // Event listener untuk menutup modal saat klik #modalBg
            modalBg.addEventListener("click", function (event) {
                if (event.target === modalBg) {
                    modalBg.classList.add("hidden");
                    document.body.classList.remove("overflow-hidden"); // Kembalikan scroll
                }
            });
        });
});