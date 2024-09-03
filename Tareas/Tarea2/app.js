function generarNumeroSecreto() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

function pedirNumeroUsuario() {
    return parseInt(prompt("Ingresa un número del 1 al 10:"));
}

function verificarNumero(numeroMaquina, numeroUsuario) {
    return numeroMaquina === numeroUsuario;
}

function jugar() {
    let numeroMaquina = generarNumeroSecreto();
    console.log("El número secreto es: " + numeroMaquina);
    
    let numeroUsuario = pedirNumeroUsuario();
    let vidas = 3;

    while (!verificarNumero(numeroMaquina, numeroUsuario) && vidas > 1) {
        vidas--;
        numeroUsuario = parseInt(prompt("Intenta nuevamente, te quedan " + vidas + " vidas:"));
    }

    if (verificarNumero(numeroMaquina, numeroUsuario)) {
        alert("¡Ganaste");
        console.log("Ganaste");
    } else {
        alert("Perdiste, el número era: " + numeroMaquina);
        console.log("Perdiste, el número era el: " + numeroMaquina);
    }
}
jugar();
