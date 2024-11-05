//Promesas
/*Es un objeto que representa eventualmente la finalización o fallo de una función asíncronas, por ejemplo llamadas a API o temporizadores, esto sin el uso de funciones callback
Una promesa puede estar en 3 estados, pendientes, resuelta y rechazada.*/

const mipromesa = new Promise((resolve, reject) => {
	// Simulamos una función asíncrona
	setTimeout(() => {
		const exito = true;
		if (exito) {
			resolve("operación exitosa");
		} else {
			reject("Hubo un error en la operación");
		}
	}, 300);
});