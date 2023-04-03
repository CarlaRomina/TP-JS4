class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.mostrarDatos = function(){
            document.write(`<br>Codigo: ${this.codigo} <br>Nombre: ${this.nombre} <br>Precio: ${this.precio}<br>`);
        
        };

       
       
    }
    
}

let producto1 = new Producto (101,"Perfume importado",7500);
let producto2 = new Producto (102,"Perfume Prune",4500);
let producto3 = new Producto (103,"Perfume Luz",3500);

producto1.mostrarDatos();
producto2.mostrarDatos();
producto3.mostrarDatos();

