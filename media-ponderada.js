const estudianteNotas = [
    {
        materiaCodigo: 1, 
        nota: 8,
    },
    {
        materiaCodigo: 2, 
        nota: 10,
    },
    {
        materiaCodigo: 3, 
        nota: 2,
    },
];

const materias = [
    {
        codigo: 1, 
        nombre: "Matemáticas",
        credito: 10
    },
    {
        codigo: 2, 
        nombre: "Psicología",
        credito: 5
    },
    {
        codigo: 3, 
        nombre: "Lengua y Literatura",
        credito: 3
    },
];

function buscarCredito(codigo) {    
let materiaCredito = 0;
const credito = materias.map(function(materia){
    if (materia.codigo === codigo) {
        materiaCredito = materia.credito;
        return materiaCredito;
    };
});
return materiaCredito;
};

function calcularMedia(){
    let totalNotas = 0;
    let totalCredito = 0;
    const objetoNota = estudianteNotas.map(function(nota){
        const notaCredito = buscarCredito(nota.materiaCodigo);
        totalNotas += (nota.nota * notaCredito);
        totalCredito += notaCredito;
    });    
    const total = totalNotas / totalCredito
    return total;
};