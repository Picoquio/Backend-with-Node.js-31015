/* 
Dada la siguiente constante: const frase = 'Hola mundo cómo están'
Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.

*/

const express = require('express');
const PORT = 8080;
const app = express()

const frase = 'Hola mundo como están'

app.get('/api/frase', (req, res) => {
    res.json({ frase })
})

app.get('/letras/:num', (req, res) => {
    const numero = req.params.num;
    if (isNaN(numero)) {
        res.json({ error: "El parámetro no es un número" })
    }
    else if ((frase.length) < numero) {
        res.json({ error: "El parámetro está fuera de rango" })
    }
    else {
        let letra = frase.charAt(req.params.num - 1)
        res.json({ letraEnPosicion: letra })
    }
})

app.get('/api/palabras/:num', (req, res) => {
    const numero = req.params.num;
    let arrayPalabras = frase.split(' ')
    if(isNaN(numero)) {
        res.json({ error: 'El parámetro no es un número' })
    }
    else if (numero > arrayPalabras.length) {
        res.json({ error: 'El parámetro está fuera de rango' })
    }
    else {
       let palabraSeleccionada = arrayPalabras[numero - 1]
       res.send(palabraSeleccionada)
        
    }
}) 


const server = app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`)
});

server.on("error", error => console.log(`Error en servidor: ${error}`))
server.on("error", (error) => console.log(`Error en servidor ${error}`));