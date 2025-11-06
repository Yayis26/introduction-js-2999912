//étodos para arreglos 
const numbers = [2,5,8,15];
//Agregar elementos a mi arreglo pero se requiere conocer la longitud del arreglo 
numbers[5] = 100;
console.table(numbers);
//Agrega elementos al final del arreglo 
numbers.push(1000, 500); 
console.table(numbers);

//Agrega elementos al inicio del arreglo 
numbers.unshift(-2, -1, 0); 
console.table(numbers);

//Elimina el último elemento del arreglo 
numbers.pop();
console.table(numbers);

//Elimina el primer elemento del arreglo 
numbers.shift();
console.table(numbers);

//Elimina los elementos después del índice asignado 
numbers.splice(3);
console.table(numbers);

const fruits =["manzana", "piña", "mango", "papaya"];
fruits.push("fresa"); 
fruits.unshift("coco")
console.table(fruits);

fruits.splice(3);
console.table(fruits);




