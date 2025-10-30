//Objeto Math 

let result;
result = Math.PI;
//Redondea al entero más cercano.
result = Math.round(2.5);
//Redondea hacia arriba 
result = Math.ceil(2.01);
//Redondea hacia abajo
result = Math.floor(2.9);
//Raíz cuadrada 
result = Math.sqrt(144);
//Absoluto
result = Math.abs(-115);
//Número mínimo 
result = Math.min(12, 14, 25);
//Devuelve un número aleatorio 
result = Math.random();
//Número aleatorio con un rango 
result = Math.floor(Math.random() * 10);
console.log(result);

//Práctica 

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

let add = num1 + num2
let rest = num1 - num2
let multp = num1 * num2
let divide = num1 / num2

console.log(add);
console.log(rest);
console.log(multp);
console.log(divide);

