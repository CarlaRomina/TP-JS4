// let base = parseFloat(prompt('Ingrese la base del rectangulo: '));
// let altura = parseFloat(prompt('Ingrese la altura del rectangulo: '));
// let area; 

// area = base * altura;
// perimetro = 2 * base + 2 * altura;
// document.write(`El perimetro del rectangulo es ${perimetro} cm. `);
// document.write("El area del rectangulo es " + area + " cm");

class rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.calcularArea = function () { return this.base * this.altura; };
        this.calcularPerimetro = function () { return this.base * 2 + this.altura * 2; };
    }
} 

  let r1 = new rectangulo(2,4);

  document.write("El area del rectangulo es: " + r1.calcularArea()+". ");
  document.write("Y su perimetro es: " + r1.calcularPerimetro());