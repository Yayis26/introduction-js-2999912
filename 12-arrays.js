//Arrays de numeros
// const numbers = [2,5,42,49,23,79];
// console.table(numbers);

//Instanciar es el proceso mediante el cual yo creo un objeto a partir de una clase 

const months = new Array("May", "July", "January", "June");
console.table(months); 

//Los arreglos en JS aceptan todos los tipos de datos del lenguaje 

const userName = "Edward";
const myArray = ["Hello", userName, 42, true, false, null, {lastName: "Velasquez", myJob: "Instructor"}, [3172293, 2999912, 3147206]];
console.table(myArray);
//Consultar el valor del elemento y su tipo 
console.table(typeof myArray[3]);

//Método lenght para conocer la longitud de tu arreglo
console.log("Tu arreglo tiene: " +myArray.length+ " elementos");

//Iterador Foreach 
const numbers = [2,5,8,15];
numbers.forEach(function(number){
    console.log(number);
})

months.forEach(function(month){
    console.log(month);
})

