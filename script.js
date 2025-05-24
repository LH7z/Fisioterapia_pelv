  const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel-track img');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  let currentIndex = 0;

  function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // volta pro início
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // vai pro fim se estiver no início
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel); // mantém alinhado ao redimensionar
