function hideFooter() {
    const footer = document.getElementById("cookie-footer");
    if (footer) {
      footer.style.display = "none";
    }
  };

  const carousel = document.querySelector('#productCarousel');
  const prevButton = document.querySelector('#prevButton');
  const nextButton = document.querySelector('#nextButton');
  
  carousel.addEventListener('slid.bs.carousel', function () {
      const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active'));
  
      // Deshabilitar el botón "Anterior" en la primera imagen
      if (activeIndex === 0) {
          prevButton.setAttribute('disabled', 'true');
      } else {
          prevButton.removeAttribute('disabled');
      }
  
      // Deshabilitar el botón "Siguiente" en la última imagen
      if (activeIndex === carousel.querySelectorAll('.carousel-item').length - 1) {
          nextButton.setAttribute('disabled', 'true');
      } else {
          nextButton.removeAttribute('disabled');
      }
  });
  
  // Inicializar el estado de los botones
  carousel.dispatchEvent(new Event('slid.bs.carousel'));