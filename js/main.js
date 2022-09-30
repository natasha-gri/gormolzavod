'use strict';

function fontsize() {
    let block = document.querySelector('.products-cols-col');
    console.log(block);
    let text = document.querySelector('.text-name-card');
    let w = block.offsetWidth;
    text.style.fontSize = w/10 + "px";
    // text.style.top = w/38 + "px";
    // text.style.left = w/9 + "px";
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
    autoplay: {
    delay: 2000,     
    },
    // Скорость
    speed: 1000,
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // trumbs: {
    //     swiper: {
    //         el: '.slider-process-mini',
    //         slidesPerView: 5,
    //     }
    // },
    trumbs: {
        swiper: swiperProcessMini
    },

});

// const swiperProcessMini = new Swiper('.slider-process-mini', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 5,
    
    
// });