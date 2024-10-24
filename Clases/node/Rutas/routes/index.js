const express = require("express");
const router = express.Router();
const path = require("path");


//Definicion de las rutas

router.get("/",(req,res)=>{
    //res.send("Hola desde mi ruta de inicio, pagina principal") 
    res.sendFile(path.join(__dirname+"/index.html"));
});

router.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));    
});

module.exports = router;