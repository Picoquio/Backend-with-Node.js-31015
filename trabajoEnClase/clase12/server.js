const express = require('express')
const { Server: IOServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const app = express() // instancia de servidor express
const httpServer = new HttpServer(app) // instancia de servidor http
const io = new IOServer(httpServer) // instanciamos Websocket

const PORT = 8081

const messages = [
    { author: "Juan", text: "¡Hola! ¿Que tal?" },
    { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
    { author: "Ana", text: "¡Genial!" }
 ];

 
 app.use(express.static('./public'))

 io.on('connection', (socket) => {
    console.log('Se ha conectado un cliente')
    socket.emit('messages', messages)

    /*EL socket escuchará el evento new-messange, y cuando llegue traerá con el mismo los datos en 
    'data'. Lo que haremos será añadir ese nuevo mensaje que nos llega en 'data' al array de 
    messages con el método push*/ 
    socket.on('new-message',data => {
        messages.push(data);
        
        /* Para notificar a los clientes conectados tenemos que avisarles de alguna forma.
        Si lo hacemos con sockets.emit estamos creando una comunicación 1:1, pero una sala de chat 
        no es así, no es privada. Tenemos que notificar a todos los clientes conectado. Para eso 
        sirve el io.sockets.emit, que notificará a todos los sockets conectados */
        io.sockets.emit('messages', messages);
    });

 })

 

httpServer.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
}) 