const express = require('express');
const app = express()

const fs = require('fs')

// defino el motor de plantilla
app.engine('tce', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) {
            return callback(new Error(err));
        }
        const rendered = content.toString()
            .replace('^^titulo$$', '' + options.titulo + '')
            .replace('^^mensaje$$', '' + options.mensaje + '')
            .replace('^^autor$$', '' + options.autor + '')
            .replace('^^version$$', '' + options.version + '')
            .replace('^^nombre$$', '' + options.nombre + '')
            .replace('^^edad$$', '' + options.edad + '')
            .replace('^^especie$$', '' + options.especie + '');

        return callback(null, rendered);
    });
});
app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'tce'); // registra el motor de plantillas 

app.get('/cte', (req, res) => {
    const datos = {
        titulo: 'Prueba de plantilla',
        mensaje: 'Buenas tardes',
        autor: 'Juan',
        version: '3.1',
    }
    res.render('plantilla1', datos) //plantilla es el nombre del view. debe tener el mismo nombre
})

app.get('/cte2', (req, res) => {
    const datos = {
        nombre: 'Whisky',
        edad: '14',
        especie: 'perro',
    }
    res.render('plantilla2', datos);
})

app.listen(8080, console.log('Server up'));