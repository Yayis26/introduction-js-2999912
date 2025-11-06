//Desestructuración de objetos en JS
//¿Qué es la desestructuración de objetos?

//En Javascript es una forma de extraer los valores de un objeto y asignarlos a variables de manera directa y más sencilla
const person ={
    userName : "Dayana",
    age : 42,

}
console.log(person);

//Variables o claves son por defecto 
//Desestructuración
// const {userName, age} = person;

// console.log(userName);
// console.log(age);

//Desestructuración con renombramiento de variables 
// const {userName: personName, age : personAge} = person;
// console.log(personName);
// console.log(personAge);
//Entonces la desestructuración No solo simplifica el acceso a propiedades, sino que también permiote renombrar variables segín se necesite. 

const people = person.userName;

console.log(people);

//Ejemplo de extracción de datos de respuesta de API 

const respons = {
    responsStatus : 200, 
    data : {id :1, productName : "Tablet", price: 800},
};
const {responsStatus, data} = respons;

console.log("El estado es " +responsStatus);
console.log("El id es " +data.id);
console.log("El nombre del producto es " +data.productName);
console.log("El precio del producto es " +data.price);
