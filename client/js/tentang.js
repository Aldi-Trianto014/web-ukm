// Visi Misi
document.addEventListener("DOMContentLoaded", function () {
    const elements = [
        document.getElementById("visi"),
        document.getElementById("misi1"),
        document.getElementById("misi2"),
        document.getElementById("misi3"),
        document.getElementById("misi4"),
    ];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-4");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(el => observer.observe(el));
});
// End Visi Misi

// Sejarah
document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = [
        "UKM PENCAK SILAT UNUSIA Terbentuk pada hari Selasa 23 November 2021, di Kampus A UNUSIA Jakarta Lantai 4 Ruang 4.2, Jl. Taman Amir Hamzah No.5, Menteng, Jakarta Pusat. Berdasarkan hasil Musyawarah Antar Perguruan Pencak Silat yang ada dalam Unit Kegiatan Mahasiswa Pencak Silat Universitas Nahdlatul Ulama Indonesia yang terdiri dari 4 Organisasi Perguruan Terbesar di Indonesia, yaitu Pencak Silat Nahdlatul Ulama Pagar Nusa, Persaudaraan Setia Hati Terate (PSHT), Ikatan Keluarga Silat Putra Indonesia Kera Sakti (IKSPI) dan MARGALUYU 151.",
        "Personalia yang hadir dalam pembentukan UKM Pencak Silat UNUSIA berjumlah 9 orang; Ircham Ali, S.Kom, M.Kom (Pembina/Dosen), Khabib Alfath Rohmaniyah (Sekretaris UKM), Khamdan Mukorobin (Bendahara UKM), Muhammad Fajrul Husein (Ketua MARGALUYU), Moh. Ahlusyiam Ferliansyah (Ketua IKSPI), Ahmad Afifudin (Ketua PSHT), Zaky Munajih (Pelatih Keatlitan dan Prestasi).",
        "Pada tahun 2023 UKM Pencak Silat UNUSIA kedatangan anggota baru dari Organisasi Perguruan Satria Muda Indonesia (SMI), sekaligus keluarnya Pencak Silat MARGALUYU 151. Keluarnya perguruan MARGALUYU 151, disebabkan karena ketidaksanggupannya untuk mengkader anggota perguruan."
    ];

    const elements = [
        document.getElementById("paragraf1"),
        document.getElementById("paragraf2"),
        document.getElementById("paragraf3")
    ];

    let currentParagraph = 0;
    let charIndex = 0;
    let isTyping = false;

    function typeNextChar() {
        if (currentParagraph >= paragraphs.length) return;
        if (charIndex < paragraphs[currentParagraph].length) {
            elements[currentParagraph].classList.remove("invisible");
            elements[currentParagraph].innerHTML += paragraphs[currentParagraph][charIndex];
            charIndex++;
        } else {
            currentParagraph++;
            charIndex = 0;
        }
    }

    window.addEventListener("wheel", function () {
        if (!isTyping) {
            isTyping = true;
            typeNextChar();
            setTimeout(() => isTyping = false, 30);
        }
    });
});

// End Sejarah


















document.getElementById("ketua").addEventListener("click", function () {
    let anggota = document.getElementById("anggota");
    anggota.classList.toggle("opacity-0");
    anggota.classList.toggle("translate-y-5");
});