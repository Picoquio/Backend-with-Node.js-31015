const express = require('express');
const { Server: IOServer } = require('socket.io')
const { Server: HttpServer } = require('http') // importamos módulo http para que nuestros sockets funcionen

const httpPort = 3000

const app = express() // instancia de servidor express
const httpServer = new HttpServer(app) // instancia de servidor http
const io = new IOServer(httpServer) //

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('./public'))

//Esta ruta carga nuestro archivo index.html en la raíz del a misma
app.get('/', (req, res) => {
    /*¿Qué es eso de root? Le estamos diciendo que la raiz desde donde va a tomar nuestro
    index.html, es el dirname. ¿Qué es el dirname? nuestra ruta absoluta, y ahi vaya a buscar
    el index.html */
    res.sendFile('index.html', { root: __dirname})
})


io.on('connection', (socket) => {
    /*"connection" se ejecuta la primera vez que se abre una nueva conexión
    Se imprimirá solo la primera vez que se ha abierto la conexion*/
    console.log('Usuario conectado');
    
    /*utilizamos el objeto socket, que tiene diversos métodos, entre ellos el .emit */
    socket.emit('Mensajillo', 'Buen día vecinillo')

    socket.on('notificacion', (data) => {
        console.log(data);
    })
})

// El servidor funcionando en el puerto 3000
httpServer.listen(httpPort, () => {
    console.log(`Server listening in port ${httpPort}`);
})