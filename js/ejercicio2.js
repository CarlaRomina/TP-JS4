// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// class Cuenta {
//     constructor(nombre, saldo) {
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     ingresar(){

//     }
//     extraer(){

//     }
//     informar(){

//     }
// }

// const cuenta1 = new Cuenta('Alex',0);

let txt1;

    Cuenta.prototypte.propietario;
    Cuenta.prototypte.saldo;
    Cuenta.prototypte.mostrar = mostrarSaldo;
    class Cuenta {
    constructor(p1, p2) {
        this.set("propietario", p1);
        this.set("saldo", p1);

    }
    get(atributo) {
        switch (atributo) {
            case "propietario": return this.propietario;
            case "saldo": return this.saldo;
        }

    }
    set(atributo, valor) {
        switch (atributo) {
            case "propietario": return this.propietario; break;
            case "saldo": return this.saldo; break;

        }

    }
}
    function mostrarSaldo(){
    document.write("Cuenta: ",this.get("propietario"),"\n saldo: ",this.get ("saldo"),"\n");
    }

    txt1 = parseInt(prompt("Por favor ingrese usuario de la cuenta"));
    let m = new Cuenta (txt1);
    m.mostrar();

        