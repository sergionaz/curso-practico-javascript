const natalia = {
    name: "Natalia", 
    age: 20, 
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
}; 

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
};

Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student(
    "Juanita Alejandra", 
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes"
    ], 
);

// Prototipos con la sintaxis de clases
class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }   

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2(
    "Miguel", 
    28,
    [
        "Curso de Análisis de Negocios para Ciencia de Datos",
        "Principio de visualización de datos para BI"
    ], 
);

// En general, para hacer más dinámico todo, se suele enviar un objeto de parámetro. Entonces:
class Student3 {
    constructor({
        name,
        age,
        cursosAprobados = [], // parametro por defecto
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }   

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const jorgito = new Student3({
    age: 31, 
    cursosAprobados: [
        "Curso de Análisis de Negocios para Ciencia de Datos",
        "Principio de visualización de datos para BI"
    ],
    name: "Jorge",
});