









// Beranda.js

// Animasi Why Section
document.addEventListener("DOMContentLoaded", function () {
    // Animasi Hero langsung
    document.querySelectorAll(".hero-text").forEach(el => {
      el.classList.add("show");
    });
  
    // Animasi Why Section pas masuk viewport
    const elements = document.querySelectorAll("#why-section .animate-slide-up");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observer biar nggak looping
        }
      });
    }, { threshold: 0.3 });
  
    elements.forEach(el => observer.observe(el));
  });
// End Animasi Why Section

// cerita anggota
const comments = [
    { name: "Andi", text: "Seru banget, komunitas ini bikin gue makin semangat buat belajar lebih banyak!" },
    { name: "Rina", text: "Latihan di sini ngebantu gue jadi lebih disiplin dalam segala hal." },
    { name: "Budi", text: "Keren! Bisa kenal banyak temen baru dan nambah skill secara gratis!" },
    { name: "Sari", text: "Gak nyesel gabung, pelatihannya serius tapi tetep asik dan santai." },
    { name: "Dika", text: "Banyak pengalaman berharga yang gue dapetin di sini, bikin makin berkembang." },
    { name: "Fajar", text: "Lingkungan yang positif dan mendukung banget untuk berkembang." },
    { name: "Putri", text: "Latihan di sini bikin mental gue lebih kuat dan lebih percaya diri." },
    { name: "Ilham", text: "Kebersamaannya berasa banget, kayak keluarga sendiri beneran!" },
    { name: "Wulan", text: "Pelatihnya sabar dan profesional banget dalam ngajarin kita." },
    { name: "Rizky", text: "Belajar banyak nilai kehidupan dari latihan di sini, bukan sekadar teori." }
];

const scrollContainer = document.getElementById("scrollText");

function generateComments() {
    comments.forEach(comment => {
        const card = document.createElement("div");
        card.classList.add("comment-card");

        const name = document.createElement("h3");
        name.textContent = comment.name;
        name.classList.add("comment-name");

        const text = document.createElement("p");
        text.textContent = `"${comment.text}"`;
        text.classList.add("comment-text");

        card.appendChild(name);
        card.appendChild(text);
        scrollContainer.appendChild(card);
    });

    // Duplikasi komentar biar scroll mulus tanpa jeda
    comments.forEach(comment => {
        const card = document.createElement("div");
        card.classList.add("comment-card");

        const name = document.createElement("h3");
        name.textContent = comment.name;
        name.classList.add("comment-name");

        const text = document.createElement("p");
        text.textContent = `"${comment.text}"`;
        text.classList.add("comment-text");

        card.appendChild(name);
        card.appendChild(text);
        scrollContainer.appendChild(card);
    });
}

generateComments();
// End cerita anggota

// faq
document.querySelectorAll('.toggle-faq').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      answer.classList.toggle('hidden');
      item.querySelector('span').textContent = answer.classList.contains('hidden') ? '+' : '-';
    });
  });
// End faq






























// Tentang.js

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
        "UKM PENCAK SILAT UNUSIA Terbentuk pada hari Selasa 23 November 2021...",
        "Personalia yang hadir dalam pembentukan UKM Pencak Silat UNUSIA berjumlah 9 orang...",
        "Pada tahun 2023 UKM Pencak Silat UNUSIA kedatangan anggota baru..."
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

    window.addEventListener("wheel", function (event) {
        if (!isTyping) {
            isTyping = true;
            typeNextChar();
            setTimeout(() => isTyping = false, 30); 
        }
    });
});
// End Sejarah






























// Galeri.js





























// Prestasi.js