const express = require('express')
const { Server: IOServer } = require('socket.io')
const { Server: HttpServer } = require('http')
const router = require('./src/Routes/routes.js')
const datos = require('./src/Products/products.js').listOfProducts() // array de productos
const messages = require('./public/messages.json')
const MessagesActions = require('./src/Controller/msgController').MessagesActions
const app = express() // instancia de servidor express
const httpServer = new HttpServer(app) // instancia de servidor http
const io = new IOServer(httpServer) // instanciamos Websocket

const PORT = 8080

// app.use(express.static('./public'))
app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/productos', router)
app.use('/message', router)
app.get('/', (req, res) => {
    res.render('index', { datos })
})

app.set('views', './views')
app.set('view engine', 'ejs')

// app.get('/productos', (req, res) => {
//      res.render('productos', { datos })
// })

// app.post('/productos', (req, res) => {
//     datos.push(req.body)
//     res.render('form', { datos })
//     console.log(datos)

// })

io.on('connection', (socket) => {
    console.log('Cliente conectado')
    socket.emit('tabla', datos);
    socket.emit('messages', messages);
    socket.on('new-message', data => {
        MessagesActions.add(data);
        io.sockets.emit('messages', messages);
    });

})


httpServer.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})

