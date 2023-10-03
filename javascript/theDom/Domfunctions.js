const title2 = document.querySelector('.start-here');
title2.innerText = 'main title';

const innerul = document.querySelector('li ul');

const subtitle= document.createElement('li');
subtitle.innerText = 'sub title 4';
innerul.appendChild(subtitle);

const outerul = document.querySelector('ul');

const allLi = document.querySelectorAll('ul li');
outerul.removeChild(allLi[allLi.length -1]);
document.title = 'Master Of The Dom';

const p = document.querySelector('div p');
p.innerText = 'SAY MY NAME!';