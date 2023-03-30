var usuarioElige = prompt("Vamos a jugar piedra, papel o tijera? escoge una opcion"); 
var computadoraElige = Math.random(); 
//console.log(computadoraElige) 
if (computadoraElige < 0.34) { 
console.log(computadoraElige="piedra"); 
} 
else if ((computadoraElige >= 0.34) & (computadoraElige <= 0.66)) 
{ 
console.log(computadoraElige="papel"); 
} 
else { 
console.log(computadoraElige="tijera"); 
} 
var comparar = function(eleccion1,eleccion2){ 
console.log("usuario "+eleccion1, "Computadora "+eleccion2) 
if (eleccion1 === eleccion2){ 
return("¡Es un empate!"); 
} 
if(eleccion1 === "piedra"){ 
if (eleccion2 === "tijera") { 
return "gana piedra"; 
} 
else { 
return "gana papel"; 
} 
} 
else if (eleccion1=== "papel"){ 
if (eleccion2==="piedra"){ 
return"gana papel"; 
} 
else{ 
return"gana tijera"; 
} 
} 
if(eleccion1 === "tijera"){ 
if (eleccion2 === "piedra") { 
return "gana piedra"; 
} 
if (eleccion2==="papel"){ 
return"gana tijera"; 
} 
} 
}; 
console.log(comparar(usuarioElige,computadoraElige))