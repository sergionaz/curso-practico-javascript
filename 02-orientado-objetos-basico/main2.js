class Course {
    constructor({
        name, 
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica"    
});

const cursoDefHtml = new Course({
    name: "Curso Definitivo de HTML y CSS"    
});

const cursoPracHtml = new Course({
    name: "Curso Práctivo de HTML y CSS"
});

const cursoDataBussiness = new Course({
    name: "Curso de DataBusiness"
});

const cursoDataViz = new Course({
    name: "Curso de DataViz"
});

const cursoUnity = new Course({
    name: "Curso de Unity"
});

const cursoUnreal = new Course({
    name: "Curso de Unreal"
});

class LearningPaths {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web", 
    courses: [
        cursoProgBasica,
        cursoDefHtml, 
        cursoPracHtml
    ]
});

const escuelaData = new LearningPaths({
    name: "Escuela de Data Science", 
    courses: [
        cursoProgBasica,
        cursoDataBussiness, 
        cursoDataViz
    ]
});

const escuelaVgs = new LearningPaths({
    name: "Escuela de Videojuegos", 
    courses: [
        cursoProgBasica,
        cursoUnity, 
        cursoUnreal
    ]
});

class Student {
    constructor({
        name, 
        email, 
        username, 
        twitter = undefined, 
        instagram = undefined, 
        facebook = undefined, 
        approveCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter, 
            instagram,
            facebook,
        }; 
        this.approveCourses = approveCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@miguelito.com",
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],    
});