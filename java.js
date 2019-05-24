console.log('hello world');

var negative = document.querySelector('.negative');
var licht = document.querySelector('body');

negative.addEventListener('click',function(){
    licht.classList.toggle('animate');
})



var rotate = document.querySelector('#hadid');

rotate.addEventListener('click',function(){
    rotate.classList.toggle('animate2');
})



var split = document.querySelector('#rison');

split.addEventListener('click',function(){
    split.classList.toggle('animate3');
})



var spin = document.querySelector('#ms');

spin.addEventListener('click',function(){
    spin.classList.toggle('animate4');
})



var spring = document.getElementById('newYork');

document.addEventListener('keyup', logKey);

function logKey(e) {
  spring.classList.toggle('animate5');
}





/*
bronnen van code:
https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event

basis van code met hulp van Melanie gemaakt

*/
