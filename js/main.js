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

// слайдер обложки
const swipercover = new Swiper(".slider-cover", {
    // Optional parameters
    loop: true,
    // Автопрокрутка
    autoplay: {
    delay: 4000,
        },
    // Скорость
    speed: 2000,
    // Эффект
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
});
// слайдер обложки мобильной
const swiperCoverMobile = new Swiper(".slider-cover-mobile", {
  loop: true,
  autoplay: {
  delay: 2000,
      },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
// слайдер обложки с права
const swiperright = new Swiper(".slider-right", {
        direction: 'horizontal',
        loop: true,
        autoplay: {
        delay: 5000,

        },
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
        },
});
// слайдер шапки странциы продукта
const swiperProduct = new Swiper(".slider-product", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
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

// слайдеры процесса
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
