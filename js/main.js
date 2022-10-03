'use strict';

// Адаптивный заголовочный шрифт для карточек продукта
function fontsize() {
    let block = document.querySelector('.products-cols-col');
    console.log(block);
    let text = document.querySelector('.text-name-card');
    let w = blocks[0].offsetWidth // сюда запишем все ширину у каждого блока
    texts.forEach(text => {
        text.style.fontSize = w/100 + "px"
    })
}
window.onload = fontsize;
window.onresize = fontsize;  

// Cлайдер обложки
// Инициализируем Swiper
const swipercover = new Swiper('.slider-cover', {
    // Optional parameters
    loop: true,
    // Автопрокрутка
    autoplay: {
    delay: 5000,
        },
    // Скорость
    speed: 2000,
    // Эффект
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },      
});

const swiperright = new Swiper('.slider-right', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Автопрокрутка
        autoplay: {
        delay: 5000,
         
        },
        // Скорость
        speed: 1000,
      
        // Стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            
        },
});

const swiperProduct = new Swiper('.slider-product', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Автопрокрутка
    autoplay: {
    delay: 5000,
     
    },
    // Скорость
    speed: 1000,
    
    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        
    },

    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// процесс
const swiperProcessMini = new Swiper('.slider-process-mini', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    
    
});

const swiperprocess = new Swiper('.slider-process', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // Автопрокрутка
    // autoplay: {
    // delay: 2000,     
    // },
    // Скорость
    speed: 1000,
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    trumbs: {
        swiper: swiperProcessMini
    },
});
// пример

var sliderprocmini = new Swiper(".slider-proc-mini", {
  // loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var sliderprocmain = new Swiper(".slider-proc-main", {
  loop: true,
  spaceBetween: 10,

  

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderprocmini,
  },
});


