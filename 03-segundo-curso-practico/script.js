/* Seleccionar elementos */
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const parrafos = document.querySelectorAll('p');

/* Manipular atributos y/o clases */
h1.innerHTML = 'Patito <br> feo';
h1.setAttribute('class', 'rojo');
h1.classList.add('verde');
h1.classList.remove('verde');

/* Para cambiar el valor de algún elemento */
input.value = '456';

/* Para crear elementos completos en HTML */
document.createElement('span');

/* Para crear un elemento y agregarlo dentro de otro */
const img = document.createElement('img');
img.setAttribute('src', 'https://i.imgur.com/IgwKCEI.png');
pid.append(img);