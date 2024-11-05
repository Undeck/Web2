//Esta es una función callback, no usar la palabra callback es una mala práctica

/*
const operacion = (numero1, numero2, callback)=> {
	return console.log(callback(numero1,numero2));
}
operacion (1,3,(a,b)=>a+b);
*/

//Comentar lo anterior 

/*
const operacion = (numero1, numero2, op)=> {
	return console.log(op(numero1,numero2));
}
operacion (1,3,(a,b)=>a+b);
operacion (1,3,(a,b)=>a/b);
operacion (1,3,(a,b)=>a-b);
operacion (1,3,(a,b)=>a*b);
*/

//Buena practica de programación
const operacion = (numero1, numero2, callback)=> {
	return console.log(callback(numero1,numero2));
}
operacion (1,3,(a,b)=>a+b);


//Ejemplo

function saludar (nombre){
	console.log(`Hola ${nombre}`);
}

function procesarEntradaUsuario(callback){
	const nombre = prompt ("Porfavor ingresa tu nombre");
	callback(nombre);
}

procesarEntradaUsuario(saludar);
