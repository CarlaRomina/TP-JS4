class Animal{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        
    }
    emitirSonido(){
        document.write (`<p> ${this.nombre} esta emitiendo su gruñido </p>`)

    }
    
    
}

class Perro extends Animal{
    emitirSonido(){
        document.write (`<p> ${this.nombre} esta ladrando </p>`)

    }
}

class Gato extends Animal{
    emitirSonido(){
        document.write (`<p> ${this.nombre} esta maullando </p>`)

    }
}

let perro1 = new Perro ('Mordelon',6)
let gato1 = new Gato ('Jimmy',3)

perro1.emitirSonido();
gato1.emitirSonido();