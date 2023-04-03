class Persona{
    constructor(nombre,edad,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar(){
        document.write (`<p> ${this.nombre} te esta saludando y dando la bienvenida </p>`)

    };
    despedirse(){
        document.write (`${this.nombre} se esta despidiendo y espera verte pronto `)

    }
    
}

let persona1 = new Persona ('Ernesto Gonzalez',38,'Ingeniero de sistemas')
let persona2 = new Persona ('Lorena Lapadatoff',37,'Abogada')

persona1.saludar();
persona2.despedirse();
// document.write(Object.values(persona1));