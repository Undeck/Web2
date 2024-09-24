//Actividad ejercicio 3

let LVert = prompt ("Selcciona la longitud vertical")
let LHor = prompt ("Selcciona la longitud Horizontal")

LHor = parseInt(LHor);
LVert = parseInt(LVert);

let horizontal = "";
for (let i = 0; i < LHor; i++){
    horizontal += "X"
}
console.log(horizontal);

for (let i = 0; i < LVert; i++){
    console.log("X");
}