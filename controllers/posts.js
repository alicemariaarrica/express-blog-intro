//2. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
//Creo un array di posts

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
  
//3 e 4 Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
  exports.index = (req, res) => { //questa funzione chiamata index serve a restituire i post
    res.json({
      count: posts.length, //numero totale di post nell'array
      posts: posts         //array dei post con tutti i dettagli, tag etc.
    });
  };
  