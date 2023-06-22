const express = require('express');

const data  = require('./data.js'); //get the data.js file

const server = express(); //server created
const port = 5000;

server.get("/", (req,res) => {
    res.send("Express'ten merhaba");

});

server.get("/aktorler", (req,res) => {
    res.status(200).json(data);
});

server.get("/aktorler/:id", (req,res) => {
    const {id} = req.params;  //we took the id through req.params
    const aktor = data.find(aktor => aktor.id === parseInt(id)); // we compare the ids

    if(aktor) {
        res.status(200).json(aktor); 
    }
    else {
        res.status(404);                            
        res.send("Aradığınız aktör bulunamadı...");
    }
});


server.listen(port, () => {
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor..")
});
