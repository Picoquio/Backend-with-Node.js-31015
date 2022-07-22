const express = require('express')
const app = express() // instanciamos servidor
const PORT = 8080
const router = require('./routes')

app.use('/mascotas', router)
app.use('/personas', router)

const server = app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
} )