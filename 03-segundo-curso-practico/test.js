// 1) FUNCIONES

class Estudiante {
    constructor(
        {
            nombre, apellido, apodo,
        }
        )
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.apodo = apodo;
        }
    }

let sergio = new Estudiante({
    nombre: "Sergio",
    apellido: "Nazar",
    apodo: "seryo",
});

function mensajeEstudiante(estudiante){
    const nombreCompleto = estudiante.nombre + " " + estudiante.apellido;
    console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + estudiante.apodo + ".");        
}

mensajeEstudiante(sergio);

// 2) CONDICIONALES
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");    
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Solo con IF
function conseguirTipoSuscripcion(suscripcion){
    if (suscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } 
    
    if (suscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");    
        return;
    } 
    
    if (suscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } 
    
    if (suscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }   
}

// Con arrays u objetos y un solo condicional
const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",    
}
const ejemploSuscripcion = 'free'
if (tiposDeSuscripciones[ejemploSuscripcion]) {
    console.log(tiposDeSuscripciones[ejemploSuscripcion]);    
} 

// 3) CICLOS
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i += 1;
}

i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i -= 1;
}