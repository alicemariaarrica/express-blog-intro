//Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!

//questa deve essere la struttura del mio progetto
//├── public/
//│   └── images/
//│       ├── nodejs.jpg
//│       ├── express.jpg
//│       ├── javascript.jpg
//│       ├── mongodb.jpg
//│       └── react.jpg
//├── controllers/
//│   └── posts.js
//├── app.js
//└── package.json

const express = require("express");
const path = require("path");
const app = express();
const port = 3333;


app.use(express.static(path.join(__dirname, "public")));


const { index } = require("./controllers/posts"); //importo il controller


app.get("/", (req, res) => {   ////questa è la mia rotta principale
  res.send("<h1>Benvenuto nel mio blog!</h1>");
});


app.get("/posts", index); //questa è la mia rotta per visualizzare tutti i post

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});

//Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

const posts = [
    {
      title: "Introduzione a Node.js",
      content: "Node.js è un runtime per eseguire JavaScript lato server.",
      image: "public/images/nodejs.jpg",
      tags: ["Node.js", "JavaScript", "Backend"]
    },
    {
      title: "Guida a Express.js",
      content: "Express è un framework per costruire applicazioni web in Node.js.",
      image: "public/images/express.jpg",
      tags: ["Express", "Framework", "Node.js"]
    },
    {
      title: "Perché imparare JavaScript?",
      content: "JavaScript è il linguaggio del web ed è molto versatile.",
      image: "public/images/javascript.jpg",
      tags: ["JavaScript", "Frontend", "Linguaggio"]
    },
    {
      title: "Introduzione a MongoDB",
      content: "MongoDB è un database NoSQL molto utilizzato.",
      image: "public/images/mongodb.jpg",
      tags: ["MongoDB", "Database", "NoSQL"]
    },
    {
      title: "I vantaggi di usare React",
      content: "React è una libreria per costruire interfacce utente.",
      image: "public/images/react.jpg",
      tags: ["React", "JavaScript", "Frontend"]
    }
  ];


//Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
//La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
//Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
/
  