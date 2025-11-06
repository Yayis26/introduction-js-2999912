//Objetos en js 

const productname = "Multimetro";
const price = 150;
const avaiable = true ; 

console.log(productname);
console.log(price);
console.log(avaiable);

const product ={
    productname:"Multímetro", 
    price: 150,
    avaiable: true,
}
console.log(typeof product);

//Acceder a las propiedades de un objeto
console.log("The product name is " +product.productname);
console.log("The product price is " +product.price);
console.log("Is available the product? " +product.avaiable);

//Agregar propiedades al objeto 
product.image ="multimetro.png"
console.log(product);

//Eliminar una propiedad de un objeto 
delete product.price;
console.log(product);


