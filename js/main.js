document.addEventListener('DOMContentLoaded', () => {
  
  const inputTel = document?.querySelector('.input-tel');

  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: '1',
    spaceBetween: 50,
    speed: 600,
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },

  });

  inputTel?.addEventListener('input', (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/\D/g, '').substring(0, 11);
  });


  let futureTime = new Date().getTime() + 1800500;

  function renderTime() {
    let difference = futureTime - new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let day = Math.floor(difference / oneDay);
    let hours =  Math.floor((difference % oneDay) / oneHour);
    let minute =  Math.floor((difference % oneHour) / oneMinute);
    let sec =  Math.floor((difference % oneMinute) / 1000);
    
    if (sec < 0) {
      return
    }
    const elemMin = document.querySelector('.footer__timer-minutes span');
    const elemSec = document.querySelector('.footer__timer-seconds span');

    elemMin.textContent = minute;
    elemSec.textContent = sec;

    if (minute < 10) {
      elemMin.textContent = `0${minute}`;
    }

    if (sec < 10) {
      elemSec.textContent = `0${sec}`;
    }
  }
  renderTime();
  
  setInterval(renderTime, 1000);

});