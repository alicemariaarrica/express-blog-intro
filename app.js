
//1. Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
//2. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
//3. Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
//4. La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
//5. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
//6. Testare nel browser.

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

//1. Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
const express = require("express");
const path = require("path");
const app = express();
const port = 3333;


//4. La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
const { index } = require("./controllers/posts"); //// Importa il controller per i post

//1. Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
app.get("/", (req, res) => {
  res.send("<h1>Benvenuto nel mio blog!</h1>");
});

//3 e 4.Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
app.get("/posts", index); //la rotta /posts richiama la funzione index per visualizzare i post (perchè c'è get) definita nel controller posts.js 

app.listen(port, () => { //serve a far partire il server (il mio pc)
  console.log(`Server avviato su http://localhost:${port}`);
});
