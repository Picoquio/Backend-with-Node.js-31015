const express = require('express');
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(__dirname + "/public"));

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
