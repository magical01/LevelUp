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
    e.target.value = value.replace(/\D/g, '');
  });


  // let futureTime = new Date().getTime() + 1800500;

  // function renderTimerRes() {
  //   let difference = futureTime - new Date().getTime();
  //   const oneDay = 24 * 60 * 60 * 1000;
  //   const oneHour = 60 * 60 * 1000;
  //   const oneMinute = 60 * 1000;
  //   let day = Math.floor(difference / oneDay);
  //   let hours =  Math.floor((difference % oneDay) / oneHour);
  //   let minute =  Math.floor((difference % oneHour) / oneMinute);
  //   let sec =  Math.floor((difference % oneMinute) / 1000);
    
  //   if (sec <= 0) {
  //     clearInterval(timerId)
  //   }
  //   const elemDay = document.querySelector('.app__bg--day span');
  //   const elemHrs = document.querySelector('.app__bg--hrs span');
  //   const elemMin = document.querySelector('.app__bg--min span');
  //   const elemSec = document.querySelector('.app__bg--sec span');

  //   elemDay.textContent = day;
  //   elemHrs.textContent = hours;
  //   elemMin.textContent = minute;
  //   elemSec.textContent = sec;
  // }
  // renderTimerRes();
  
  // let timerId = setInterval(renderTimerRes, 1000);

});