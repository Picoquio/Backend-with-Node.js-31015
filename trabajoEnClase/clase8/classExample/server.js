const express = require('express')
const router = require('./routes.js')

const app = express() // instanciamos servidor
const PORT = 8080
//middleware


app.use('/api', router) /* los pedidos que lleguen a /api, mandamelos a
un router*/


const server = app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})
 