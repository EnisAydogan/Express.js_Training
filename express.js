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



server.post("/aktorler", (req,res) => {
    let yeni_aktor=req.body;
    yeni_aktor.id = 4;
    next_id++;
    data.push(yeni_aktor);
    res.status(201).json(yeni_aktor);

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

