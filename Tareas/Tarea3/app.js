let carrito = []; 

/*--------------------------------
Funcion Mostrar Menu:
Aqui muestro el menu que aparecera, en el con ayuda de un prompt y un parse int para detectar enteros,
se pueden seleccionar las 6 diferentes opciones que se utilizaran en el programa.
 */
const mostrarMenu = () => {     
    return parseInt(prompt(`
        Seleccione un producto para agregar al carrito:
        1. Camisa - $300
        2. Pantalón - $500
        3. Zapatos - $800
        4. Sombrero - $200
        5. Ver Carrito y Total
        6. Salir
    `));
};

/*----------------------------------
agregar producto: 
En esta funcion, con ayuda de un arreglo podremos agregar los respectivos productos,
esto con ayuda de push.
*/
const agregarProducto = (producto) => {
    carrito.push(producto);
    console.log(`Producto "${producto.nombre}" agregado al carrito.`);
};

/*
Ver Carrito:
Esta funcion muestra el contenido del "Carrito" y finalmente hace la suma de los precios
con lenght hago una comparacion, si es igual a 0 entonces el carrito esta vacio
carrito.forEach((producto, index) => {} Con ayuda de una funcion flecha, itero los productos mostrando
su nombre y precio
*/
const verCarrito = () => {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Carrito de compras:");
        let total = 0;
        carrito.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
            total += producto.precio;
        });
        console.log(`Total: $${total}`);
    }
};

/*
Iniciar Tienda:
Esta funcion controla casi todo el programa
Con ayuda de while inicio un bulce para poder ir añadiendo los productos
const opcion = mostrarMenu();  esta funcion llama al menu y va guardando los productos que se seleccionen
switch (opcion) Dependiendo de que elija el usuaruo sera la prenda y precio que se vayan agregando al
arreglo
*/

const iniciarTienda = () => {
    let continuar = true;
    while (continuar) {
        const opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto({ nombre: "Camisa", precio: 300 });
                break;
            case 2:
                agregarProducto({ nombre: "Pantalón", precio: 500 });
                break;
            case 3:
                agregarProducto({ nombre: "Zapatos", precio: 800 });
                break;
            case 4:
                agregarProducto({ nombre: "Sombrero", precio: 200 });
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                console.log("Saliendo de la tienda...");
                continuar = false;
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    }
};

iniciarTienda();
