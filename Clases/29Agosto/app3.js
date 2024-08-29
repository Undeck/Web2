//Math random programa mio 
let vida = 5;
let ronda = 0;
let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
let respuesta = parseInt(prompt("Acierta el numero del 1 al 10"));
if (respuesta == numeroMaquina)
{
    ronda++;
    console.log("ganaste esta ronda")
}
else (respuesta != numeroMaquina)
{
    --vida;
    console.log("Perdiste esta ronda" + "Te quedan" + vida + "Vidas")
}
if (ronda == 3)
{
    console.log("Ganaste :)")
}
else (ronda < 3)
{
    console.log("Victorias:" + ronda)
}
console.log("El numero es:" + numeroMaquina);
