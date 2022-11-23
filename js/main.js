document.addEventListener('DOMContentLoaded', () => {
  
  const input = document?.querySelector('.input');

  const slidesWrapper = document?.querySelector('.slider');
  const slidesField = document?.querySelector('.slider-track');
  const slides = document?.querySelectorAll('.slider-slide');
  const prev = document?.querySelector('.reviews__prev');
  const next = document?.querySelector('.reviews__next');
  const width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;

  next?.addEventListener('click', setNextSlide);
  prev?.addEventListener('click', setPrevSlide);

  function setNextSlide() {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  }

  function setPrevSlide() {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  }

  input?.addEventListener('input', (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/\D/g, '');
  });

});