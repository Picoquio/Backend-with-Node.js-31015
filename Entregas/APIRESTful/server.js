const express = require('express'); // importamos express
const app = express() // instanciamos servidor

//ruta
const rutaProductos = require('./routes/routeProductos');

//puerto
const PORT = 8080;

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'))
app.use('/api/productos', rutaProductos);





const server = app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})

server.on('error', (error) => console.error(`Error detected. Please start panicking. ${error}`)) 
