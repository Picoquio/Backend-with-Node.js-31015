const express = require('express');
const app = express()
const handlebars = require ('express-handlebars')

app.engine('hbs', handlebars.engine({
    extname: 'hbs', //extensión a utilizar
    defaultLayout: 'index.hbs', //plantilla principal
    layoutsDir: __dirname + "/views/layouts" // ruta a la plantilla principal
}))

app.set('views', './views') // especifica el directorio de vistas
app.set('view engine', 'hbs') // registra el motor de plantillas

app.get('/cte', (req, res) => {
    const datos = {
        nombre: 'Juan',
        apellido: 'Goñi',
        mail: 'prueba@prueba.com',
        telefono: '99999',
    }
    res.render('main', datos) // main es donde se incrusta
})


app.listen(8080, console.log('Server up'));