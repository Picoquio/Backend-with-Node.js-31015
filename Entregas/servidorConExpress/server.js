const fs = require('fs')
const express = require('express');
const app = express();
const PORT = 8080



class Contenedor {
    constructor(fileName) {
        this.fileName = fileName
    }

    //Devuelve un array con los objetos del archivo
    async getAll() {
        try {
            const data = await fs.promises.readFile(this.fileName, 'utf-8')
            const parsedData = JSON.parse(data)
            return parsedData

        } catch (error) {
            console.error('Hubo un error: ' + error)
        }
    }

    async getRandom() {
        const data = await fs.promises.readFile(this.fileName, 'utf-8')
        const parsedData = JSON.parse(data)
        let random = Math.ceil(Math.random() * 3)
        return parsedData[random]
    }

}

let container = new Contenedor('productos.txt');

app.get('/productos', (req, res) => {

    container.getAll()
        .then(data => res.send(data))
        .catch(err => res.send(err))

})

app.get('/productoRandom', (req, res) => {

    container.getRandom()
        .then(data => res.send(data))
        .catch(err => res.send(err))

})


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => console.log(`Error en servidor: ${error}`))

