//Funciones

saludar();
function saludar(){
    console.log("hola");
    //alert("Hola desde un alert");
}

function despedida(nombreUsuario){
    console.log("Adios: " + nombreUsuario);  //Funcion con argumentos
}
despedida("Aron");

function retorno(nombreUsario){   //Funcion con return
    return "Adios con un return" + nombreUsario;
}
console.log(retorno("Aron"));

//Tarea modificar el advinar un numero pero con funciones :)