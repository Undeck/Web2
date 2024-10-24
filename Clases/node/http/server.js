//Importar el modulo http que viene incluido en Note.js
const http = require('http');
//Definimos el puerto, si este ya esta ocupado, podemos ocupar otro
const port = 3009;

//Crear Servidor

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hola mundo');
});

//Escuchar el puerto especifico
server.listen(port,()=>{
    console.log(`El servidor esta funcionando por emdio de http://localhost:${port}`);
});