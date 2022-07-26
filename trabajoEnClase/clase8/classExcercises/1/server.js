const express = require('express') // importamos express
const app = express() // instanciamos servidor

//rutas
const rutaPersonas = require('./routes/routePersonas')
const rutaMascotas = require('./routes/routeMascotas')

//puerto
const PORT = 8080

//permite interpretar datos. VA SIEMPRE ANTES DEL APP.USE
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));

//middleware
app.use('/static', express.static(__dirname + 'public')) /* indicamos que la carpeta static es 'public' 
y con el primer parámetro creamos un prefijo virtual. __dirname se utiliza como path absoluto
*/
app.use('/personas', rutaPersonas) // los pedidos que lleguen a /personas, mandamelos a rutaPersonas
app.use('/mascotas', rutaMascotas) // idem anterior


//hacemos que el servidor escuche en puerto seleccionado
const server = app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
} )

