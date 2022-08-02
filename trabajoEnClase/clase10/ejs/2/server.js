const express = require('express');
const app = express()
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'ejs');

const datos = [];

app.get('/', (req, res) => {
    res.render('form', { datos })
})

app.post('/personas', (req, res) => {
    datos.push(req.body)
    res.render('form', { datos })
} )

app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})