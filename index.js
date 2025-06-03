

const toggleBtn = document.querySelector('#darkModeToggle'); // your toggle button
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }

  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        // your toggle logic here
      });
    }
  });

  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const nextBtn = document.querySelector(".carousel-btn-next");
  const prevBtn = document.querySelector(".carousel-btn-prev");

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % items.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
  });
