/* Seleccionar elementos */
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');
// form.addEventListener('submit', sumarInputValues);

/* Opción 1: Con click */
// btn.addEventListener('click', onClickButton);
// function onClickButton() {
//     pResult.innerText = Number(input1.value)+ Number(input2.value);
// }

/* Opción 2: Con formulario */
// form.addEventListener('submit', sumarInputValues);
// function sumarInputValues(event) {
//     event.preventDefault();
//     pResult.innerText = Number(input1.value)+ Number(input2.value);
// }

/* Opción 3: con formulario, pero específicando al botón que es de tipo button*/ 
btn.addEventListener('click', onClickButton);
function onClickButton() {
    pResult.innerText = Number(input1.value)+ Number(input2.value);
}