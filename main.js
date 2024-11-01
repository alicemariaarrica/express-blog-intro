//Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!

const express = require("express"); 

const app = express(); 

const port = 3333;

app.get("/", (req, res) => {
  res.send("<h1>Benvenuto nel mio blog!</h1>");
});

//Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

const posts = [
    {
      title: "Introduzione a Node.js",
      content: "Node.js è un runtime per eseguire JavaScript lato server.",
      image: "/images/nodejs.jpg",
      tags: ["Node.js", "JavaScript", "Backend"]
    },
    {
      title: "Guida a Express.js",
      content: "Express è un framework per costruire applicazioni web in Node.js.",
      image: "/images/express.jpg",
      tags: ["Express", "Framework", "Node.js"]
    },
    {
      title: "Perché imparare JavaScript?",
      content: "JavaScript è il linguaggio del web ed è molto versatile.",
      image: "/images/javascript.jpg",
      tags: ["JavaScript", "Frontend", "Linguaggio"]
    },
    {
      title: "Introduzione a MongoDB",
      content: "MongoDB è un database NoSQL molto utilizzato.",
      image: "/images/mongodb.jpg",
      tags: ["MongoDB", "Database", "NoSQL"]
    },
    {
      title: "I vantaggi di usare React",
      content: "React è una libreria per costruire interfacce utente.",
      image: "/images/react.jpg",
      tags: ["React", "JavaScript", "Frontend"]
    }
  ];
  