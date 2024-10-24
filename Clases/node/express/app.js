const express = require("express");
const path = require("path");

const app = express();

app.get("/",(req,res)=>{
        //res.send("Hola Mundo desde Node");
        //res.sendFile("/Users/rubenomaravendanogaribay/Desktop/ProgramacionWeb2/Web2/Clases/node/express/index.html"); De forma local, inpractico para muchos html
        res.sendFile(path.join(__dirname+"/index.html"));
});

const port = 3056;

app.listen(port,()=>{
    console.log(`El server esta en esucha desde el http://localhost:${port}`);
})