










          document.addEventListener("DOMContentLoaded", () => {
            const cards = document.querySelectorAll(".opacity-0");
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.remove("opacity-0", "translate-y-5");
                }
              });
            }, { threshold: 0.3 });
      
            cards.forEach(card => observer.observe(card));
          });