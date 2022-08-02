const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs')
app.set('views', './views')

app.engine('hbs', handlebars.engine({
    extname: 'hbs', //extensión
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

const datos = []

app.get('/', (req, res) => {
    res.render('form', { datos })
})

app.get('/productos', (req, res) => {
     res.render('productos', { datos })
})

app.post('/productos', (req, res) => {
    datos.push(req.body)
    res.render('form', { datos })
    console.log(datos)
})

const server = app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})

server.on('error', (error) => {
    throw new Error(error)
})

