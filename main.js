//Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!

const express = require("express"); 

const app = express(); 

const port = 3333;

app.get("/", (req, res) => {
  res.send("<h1>Benvenuto nel mio blog!</h1>");
});

//Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
