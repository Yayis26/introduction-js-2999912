//Sting o cadena de texto 

const userName = "Carlos";
const name1 = 'Edwar';

console.log(typeof userName)

//Dos formas no tan comunes 
const userName2 = String("Vero");
//Constructor que me permite llamar la clase desde cualquier lugar - instarciar el objeto Vero desde la clase String 
//Instanciar proceso mediante el cual yo creo un objeto a partir de una clase
const userName4 = new String("Vero");

console.log(userName2);
console.log(typeof userName4)

let product = 'Televisor de 50"';
console.log(product);
let product2 = "Televisor de 50\"";
console.log(product2);


let phrase ="Estamos aprendiendo JS en CDITI";
console.log(phrase.length); //Length para leer la cantidad de caracteres
console.log(phrase.indexOf("Estamos"));//indexOf me indica la posición en la que se encuentra la palabra indicada 
console.log(phrase.indexOf("js")); // si el resultado es menor que 0 la cadena no existe 

console.log(phrase.includes("JS")); //Método más moderno para buscar si una cadena existe 