let nombre = prompt("Ingresa tu Nombre");
let edad = prompt("Ingresa tu Edad");
let peso = prompt("Ingresa tu Peso en Kilogramos");
let estatura = prompt("Ingresa tu Estatura en metros");

let IMC = parseFloat(peso) / (parseFloat(estatura) * parseFloat(estatura));
console.log ("Tu IMC es: " + IMC);
