let frutas = ["manzana", "sandia", "Pera"];
//frutas.forEach(fruta => console.log(fruta));

/*
frutas.forEach((fruta, index, array) => {
    console.log(index+1);
    //console.log(array);
    console.log(fruta)
});
*/

frutas.forEach((fruta, index) => {
 console.log(`Fruta (${index+1}).- ${fruta}`)
});