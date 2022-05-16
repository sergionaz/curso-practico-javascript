// Utils o Helpers
function esPar(numero) {
    return (numero % 2 === 0);
};

const salariosArg = argentina.map(
    function(persona){
        return persona.salary;
    }
);

const salariosArgSorted = salariosArg.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
             return valorAcumulado + nuevoElemento;
         }
    );   
     const promedioLista = sumaLista / lista.length;    
     return promedioLista;
};

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad] - 1;
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const mediana = lista[mitad];        
        return mediana;
    }
};

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

// Mediana del Top 10%
const spliceStart = salariosArgSorted.length * .9;
const spliceCount = salariosArgSorted.length * .1;
const salariosArgTop10 = salariosArgSorted.splice(spliceStart, spliceCount);
const medianaTop10Arg = medianaSalarios(salariosArgTop10);

console.log({
    medianaGeneralArg, 
    medianaTop10Arg    
});

