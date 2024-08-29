//FOR

let frutas = ["Manzanas", "Piña", "Platano","Jicama", "Pera"];

for(let i=0; i<frutas.length ; i++ ){
    console.log(frutas[i]);
}
console.log("-------------------------------------------");

for(let fruta of frutas){      //For of
    console.log(fruta);
}

for(let fruta in frutas){       //For in
    console.log(fruta);
}
