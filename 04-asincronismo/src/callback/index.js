/* Primero, presentación del callback. Puede recibir otro nombre, no necesariamente "callback" */
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

/* setTimeout es un callback en sí, porque es una función que llama a otra función */
setTimeout(function () {
    console.log('Hola JavaScript');
}, 2000)

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Sergio');

