'use strict';

// меню
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

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
// слайдер обложки с права
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
// слайдер шапки странциы продукта
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


