const express = require('express');
const { Router } = express; //importamos el router
const routerMascotas = Router() // instanciamos enrutador

let arrayMascotas = []

routerMascotas.route('/')
    .get((req, res) => {
        res.status(200).json(arrayMascotas)
    }) 

    .post((req, res) => {
        const newObject = {
            nombre: req.body.nombre,
            apellido: req.body.raza,
            edad: req.body.edad
            }
            arrayMascotas.push(newObject)
            console.log(arrayMascotas)
            res.json({ agregado: newObject })
    })

    module.exports = routerMascotas