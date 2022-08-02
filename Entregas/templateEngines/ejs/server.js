const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'ejs')

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


app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})

app.on('error', (error) => {
    console.error(error)
})
