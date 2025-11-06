//Unir dos objetos 

const product ={
    productname:"Multímetro", 
    price: 150,
    avaiable: true,
}
Object.freeze(product); 
// Objeto que almacena medidas 
const measurements = {
    weight : "1kg",
    measurement : "15cm",
}

//Rest operator Une dos arreglos 
const newProduct = {...product, ...measurements,}
console.log(newProduct);

