let carrito =[];
let fruta = prompt("Ingresa una fruta");
carrito.push(fruta);


while( confirm ("Deseas agregar otra fruta?")){
    let fruta = prompt("Ingresa una fruta");
    carrito.push(fruta);
};

alert("Usted compro: ");
carrito.forEach((frutas, index)=> { 
    alert(index+1);
});
