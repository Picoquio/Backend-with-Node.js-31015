/* 
Considere la siguiente frase: ‘Frase inicial’
Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
1) GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
2) GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1.
3) POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
4) PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
5) DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada (considerar que la primera palabra tiene posición #1).

*/

const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let frase = 'Frase inicial';

app.get('/api/frase', (req, res) => {
    res.json({ frase })
})

app.get('/api/palabras/:pos', (req, res) => {
    const numero = req.params.pos;
    let arrayPalabras = frase.split(' ')
    if (isNaN(numero)) {
        res.json({ error: 'El parámetro no es un número' })
    }
    else if (numero > arrayPalabras.length) {
        res.json({ error: 'El parámetro está fuera de rango' })
    }
    else {
        let palabraSeleccionada = arrayPalabras[numero - 1]
        res.json({ buscada: palabraSeleccionada })
    }
})

app.post('/api/palabras', (req, res) => {
    const palabra = req.body.palabra;
    const arrayPalabras = frase.split(' ')
    const posicion = arrayPalabras.push(palabra)
    frase = arrayPalabras.join(' ')
    res.json({
        agregada: palabra,
        pos: posicion
    })
})

app.delete('/api/palabras/:pos', (req, res) => {
    const numero = req.params.pos;
    let arrayPalabras = frase.split(' ')
    arrayPalabras.splice(numero - 1, 1);
    frase = arrayPalabras.join(' ')
    res.sendStatus(204);
})

app.put("/api/palabras/:pos", (req, res) => {
    const posicion = req.params.pos;
    const palabraRecibida = req.body.palabra;
    const palabras = frase.split(" ");
    const palabraAReemplazar = palabras[posicion];
    frase = frase.replace(palabraAReemplazar, palabraRecibida);
    res.json({
      actualizada: palabraRecibida,
      anterior: palabraAReemplazar,
    });
  });


const server = app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`)
});

server.on("error", error => console.log(`Error en servidor: ${error}`))