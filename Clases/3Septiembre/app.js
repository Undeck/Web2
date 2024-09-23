/* let frutas = ["melon" , "Manzana"];
console.log(frutas);
frutas.unshift("Sandia");   //frutas.push añade al final de la cadena

let eliminaFruta = frutas.pop()     //Elimina la ultima 
console.log(frutas);                //Shift elimina el primer elemento de cadena
console.log(eliminaFruta); */

//Inicio de un Arrgelo para el alamcen de tareas
let tareas = [];

//Funcion para mostrar nuestro menu
function mostrarMenu(){
    return parseInt(prompt(`
        "Opciones Disponibles"
        1.- Agregar Tarea
        2.- Ver Todas las Tareas
        3.- Marcar Tarea Completada
        4.- Salir
        "Elige una opcion:"
        `));

}
//Funcion para agregar una tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
       let tarea={
            nombre:nombre,
            completada: false
       };
       tareas.push(tarea);
       alert("Tarea Agregada de forma correcta"); 

    }else{
        alert("El nombre de la tarea no puede estar vacio.");

    }

}

//Ver todas las tareas
function verTareas(){
    if(tareas.lenght === 0){
        alert ("no tenemos tareas asignadaa");
    }else {
        let mensaje = "Lista de tareas\n";
        tareas.forEach((tarea,index)=> {
            mensaje+=`${index+1}.-${tarea.nombre} [${tarea.completada? "Completada":"Pendiente"}] \n `; //If sintactico   
        });
        alert(mensaje);

    }
}

//Funcion para marcar tarea completada
function  marcarTareaCompletada(){
 
    let numero = parseInt(prompt("Introduce el numero de la tarea a completar: "));
    if( numero > 0 &&  numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(` La tarea "${tareas[numero-1].nombre}" ha sido marcada como completada`);
    }else{
        alert("Numero no valido");
    }

}




//Funcion para manejar el flujo del programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no validad. Intenta Nuevamente");
    
    alert ("Programa Finalizado"); 
        }
    }
}

iniciarPrograma();
