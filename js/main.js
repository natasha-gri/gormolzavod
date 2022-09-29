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