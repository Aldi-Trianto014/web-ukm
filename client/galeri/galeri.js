document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".relative .flex > div");
    const prevBtn = document.querySelector(".absolute.left-[-50px]");
    const nextBtn = document.querySelector(".absolute.right-[-50px]");
  
    let index = 1; // Indeks awal gambar tengah
  
    function updateSlider() {
      images.forEach((img, i) => {
        img.classList.remove("w-1/2", "w-1/4");
        if (i === index) {
          img.classList.add("w-1/2"); // Tengah besar
        } else {
          img.classList.add("w-1/4"); // Samping kecil
        }
      });
    }
  
    prevBtn.addEventListener("click", function () {
      index = (index - 1 + images.length) % images.length;
      rearrangeImages();
    });
  
    nextBtn.addEventListener("click", function () {
      index = (index + 1) % images.length;
      rearrangeImages();
    });
  
    function rearrangeImages() {
      const parent = images[0].parentNode;
      if (index === 0) {
        parent.appendChild(images[images.length - 1]); // Pindahin terakhir ke awal
      } else {
        parent.insertBefore(images[index], images[0]); // Geser yang dipilih ke awal
      }
      updateSlider();
    }
  
    updateSlider();
  });
  