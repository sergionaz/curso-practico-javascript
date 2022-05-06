// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado ** 2;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
console.groupEnd();

// Código del círculo
console.group("Círculos");

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(diametro){
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio ** 2) *  Math.PI;
}
console.groupEnd();