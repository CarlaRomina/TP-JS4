let base = parseFloat(prompt('Ingrese la base del rectangulo: '));
let altura = parseFloat(prompt('Ingrese la altura del rectangulo: '));
let area; 

area = base * altura;
perimetro = 2 * base + 2 * altura;
document.write("El perimetro del rectangulo es " + perimetro + " cm. ");
document.write("El area del rectangulo es " + area + " cm");