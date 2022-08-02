const express = require('express');
const app = express();
const PORT = 8080

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    const { min, max, nivel, titulo } = req.query; //valores pasados por la query
    res.render('datos', { min, max, nivel, titulo }) // datos es el template
})

app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`)
})