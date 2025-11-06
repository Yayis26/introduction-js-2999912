const product ={
    productname:"Multímetro", 
    price: 150,
    avaiable: true,
}
//Con el método o función FREEZE bloqueamos el objeto  para que no se puedan agregar propiedades, modificar o borrar las propiedades
 Object.freeze(product);
// //Eliminar propiedad
// delete product.price;
// //Agregar propiedad
// product.color = "Blue";
// product.stock = 10;
// //Modificar propiedad
// product.price =500;
// console.log(product);

//El método seal no permite eliminar, agregar pero si permite modificar las propiedades del objeto  
Object.seal(product);
delete product.price;
//Modificar propiedad
product.price =500;
console.log(product);
console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));