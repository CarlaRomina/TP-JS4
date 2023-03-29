// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
    color: "azul",
    marca: "fiat",
    modelo: "uno",

    encender: ()=>{
        document.write ('<p> El auto esta encendido </p>')
    },
    apagar: ()=>{
        document.write ('<p> El auto esta apagado </p>')
    }
    
    
}
    document.write(`<br>Color: ${auto.color}`);
    auto.encender();
    // auto.apagar();