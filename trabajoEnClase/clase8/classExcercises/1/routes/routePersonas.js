const express = require('express');// importamos express
const { Router } = express; //importamos el router
const routerPersonas = Router() // instanciamos enrutador

let arrayPersonas = [];

routerPersonas.route('/')
    .get((req, res) => {
        res.status(200).json(arrayPersonas)
    })
    
    .post((req, res) => {
    
        const newObject = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad
        }
        arrayPersonas.push(newObject)
        console.log(arrayPersonas)
        res.json({ agregado: newObject })

    })


module.exports = routerPersonas; // se exporta la instanciacion del router
